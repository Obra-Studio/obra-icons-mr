import React from "react"
import { framer } from "framer-plugin"
import { useState, useEffect, useCallback } from "react"
import { create, insert, search } from '@orama/orama'
import * as Icons from 'obra-icons-react'
import iconSearchData from 'obra-icons-website/src/lib/keywords'
import { createRoot } from 'react-dom/client'
import { ColorPicker } from './ColorPicker'
import { iconNamePascal, formatIconName, prepareSvg, shuffleArray } from './utilities'
import "./App.css"

framer.showUI({
    position: "top right",
    width: 420,
    height: 600,
})

interface IconProperties {
  size: {
    value: number
    min: number
    max: number
    step: number
  }
  strokeWeight: {
    value: number
    min: number
    max: number
    step: number
  }
  color: {
    value: string
  }
}

interface FilteredIcon {
  name: string
  component: React.ComponentType<any>
}

export function App() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredIcons, setFilteredIcons] = useState<FilteredIcon[]>([])
    const [searchDb, setSearchDb] = useState<any>(null)
    const [customColors, setCustomColors] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true)

    // Icon properties with default values
    const [iconProperties, setIconProperties] = useState<IconProperties>({
        size: {
            value: 24,
            min: 12,
            max: 64,
            step: 4,
        },
        strokeWeight: {
            value: 1.5,
            min: 1,
            max: 2,
            step: 0.5,
        },
        color: {
            value: '#000000',
        },
    })

    // Get all icons from the React package
    const iconList = Object.entries(Icons)
        .filter(([name]) => !name.startsWith('use') && typeof Icons[name as keyof typeof Icons] === 'function')
        .map(([name, component]) => ({ name, component }))
        
    // Debug: Log icon loading status
    console.log(`Loaded ${iconList.length} icons from obra-icons-react`)
    if (iconList.length === 0) {
        console.error('No icons loaded! Check obra-icons-react package.')
    }

    const initializeSearchDb = useCallback(async () => {
        setIsLoading(true)
        try {
            const db = await create({
                schema: {
                    nameKebab: 'string',
                    namePascal: 'string',
                    keywords: 'string[]',
                },
            })

            const entries = Object.entries(iconSearchData)
            console.log(`Loading ${entries.length} keyword entries into search database`)

            for (const [nameKebab, keywords] of entries) {
                await insert(db, {
                    namePascal: iconNamePascal(nameKebab),
                    nameKebab,
                    keywords,
                })
            }

            setSearchDb(db)
            // Initial search to populate filteredIcons with shuffled results
            const initialResults = await performSearch('', db)
            setFilteredIcons(shuffleArray(initialResults))
        } catch (error) {
            console.error('Failed to initialize search:', error)
            // Fallback to basic icon list
            setFilteredIcons(shuffleArray(iconList))
        } finally {
            setIsLoading(false)
        }
    }, [iconList])

    const performSearch = useCallback(async (term: string, db = searchDb) => {
        if (!db) return iconList

        try {
            const results = await search(db, {
                term,
                properties: ['nameKebab', 'keywords'],
                limit: 2000,
                boost: {
                    keywords: 2,
                },
            })

            return results.hits
                .map((hit: any) => ({
                    name: hit.document.namePascal,
                    component: Icons[hit.document.namePascal as keyof typeof Icons],
                }))
                .filter((icon) => icon.component) // Filter out any undefined components
        } catch (error) {
            console.error('Search failed:', error)
            return iconList.filter(icon => 
                icon.name.toLowerCase().includes(term.toLowerCase())
            )
        }
    }, [searchDb, iconList])

    const handleSearch = useCallback(async () => {
        if (isLoading) return
        
        const results = await performSearch(searchTerm)
        setFilteredIcons(searchTerm ? results : shuffleArray(results))
    }, [searchTerm, performSearch, isLoading])

    const handleIconClick = async (name: string, component: React.ComponentType<any>) => {
        try {
            const isFillIcon = name.endsWith('Fill')
            
            // Create a temporary container for rendering
            const tempContainer = document.createElement('div')
            tempContainer.style.position = 'absolute'
            tempContainer.style.left = '-9999px'
            tempContainer.style.visibility = 'hidden'
            document.body.appendChild(tempContainer)

                         try {
                 // Use the statically imported createRoot to avoid build warnings
                 const root = createRoot(tempContainer)
                
                // Prepare icon props
                const iconProps = {
                    size: iconProperties.size.value,
                    color: iconProperties.color.value,
                    ...(isFillIcon ? {} : { strokeWidth: iconProperties.strokeWeight.value }),
                }

                // Render the icon synchronously and wait for it
                let svgElement: SVGSVGElement | null = null
                
                const IconWrapper = () => {
                    const ref = React.useRef<HTMLDivElement>(null)
                    
                    React.useLayoutEffect(() => {
                        if (ref.current) {
                            svgElement = ref.current.querySelector('svg')
                        }
                    })
                    
                    return React.createElement('div', { ref }, React.createElement(component, iconProps))
                }

                root.render(React.createElement(IconWrapper))
                
                // Wait a bit for rendering to complete
                await new Promise(resolve => setTimeout(resolve, 50))
                
                // Get the SVG content
                if (svgElement) {
                    const svgString = (svgElement as SVGSVGElement).outerHTML
                    const preparedSvgString = prepareSvg(
                        svgString,
                        iconProperties.strokeWeight.value,
                        iconProperties.color.value
                    )

                    const formattedName = formatIconName(name)

                    await framer.addSVG({
                        svg: preparedSvgString,
                        name: `${formattedName}.svg`,
                    })
                } else {
                    throw new Error('SVG element not found after rendering')
                }

                // Clean up
                root.unmount()
            } finally {
                // Always clean up the temporary container
                if (tempContainer.parentNode) {
                    document.body.removeChild(tempContainer)
                }
            }
        } catch (error) {
            console.error('Failed to add SVG:', error)
            
            // Fallback to a simple icon with the correct properties
            const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${iconProperties.size.value}" height="${iconProperties.size.value}" viewBox="0 0 24 24" fill="none" stroke="${iconProperties.color.value}" stroke-width="${iconProperties.strokeWeight.value}" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`
            
            await framer.addSVG({
                svg: fallbackSvg,
                name: `${formatIconName(name)}.svg`,
            })
        }
    }

    const updateIconSize = (size: number) => {
        setIconProperties(prev => ({
            ...prev,
            size: { ...prev.size, value: size }
        }))
    }

    const updateStrokeWeight = (weight: number) => {
        setIconProperties(prev => ({
            ...prev,
            strokeWeight: { ...prev.strokeWeight, value: weight }
        }))
    }

    const updateColor = (color: string) => {
        setIconProperties(prev => ({
            ...prev,
            color: { ...prev.color, value: color }
        }))
    }

    useEffect(() => {
        initializeSearchDb()
    }, [initializeSearchDb])

    useEffect(() => {
        handleSearch()
    }, [handleSearch])

    return (
        <main className="obra-icons-plugin">
            <div className="toolbar">
                <div className="controls">
                    <div className="control-group">
                        <label htmlFor="iconColor">Color</label>
                        <div className="color-control">
                            <ColorPicker
                                selectedColor={iconProperties.color.value}
                                onColorChange={updateColor}
                                customColors={customColors}
                                onCustomColorsChange={setCustomColors}
                            />
                        </div>
                    </div>

                    <div className="control-group">
                        <label htmlFor="iconSize">Size</label>
                        <input
                            id="iconSize"
                            type="range"
                            min={iconProperties.size.min}
                            max={iconProperties.size.max}
                            step={iconProperties.size.step}
                            value={iconProperties.size.value}
                            onChange={(e) => updateIconSize(Number(e.target.value))}
                        />
                        <span>{iconProperties.size.value}px</span>
                    </div>

                    <div className="control-group">
                        <div className="fieldset" role="group" aria-describedby="iconStrokeWeight">
                            <div className="legend" id="iconStrokeWeight">
                                Stroke weight
                            </div>
                            <div className="radio-buttons">
                                <label>
                                    <input
                                        type="radio"
                                        name="strokeWeight"
                                        value="1"
                                        checked={iconProperties.strokeWeight.value === 1}
                                        onChange={() => updateStrokeWeight(1)}
                                    />
                                    <span>1</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="strokeWeight"
                                        value="1.5"
                                        checked={iconProperties.strokeWeight.value === 1.5}
                                        onChange={() => updateStrokeWeight(1.5)}
                                    />
                                    <span>1.5</span>
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="strokeWeight"
                                        value="2"
                                        checked={iconProperties.strokeWeight.value === 2}
                                        onChange={() => updateStrokeWeight(2)}
                                    />
                                    <span>2</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-holder">
                <input
                    type="text"
                    placeholder="Enter your search term…"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button className="clear-search" onClick={() => setSearchTerm('')}>
                        ×
                    </button>
                )}
            </div>

            {isLoading ? (
                <div className="loading">Loading icons...</div>
            ) : (
                <div className="icon-grid">
                    {filteredIcons.length > 0 ? (
                        filteredIcons.map(({ name, component }) => {
                            if (!name || !component) return null
                            
                            const IconComponent = component
                            const isFillIcon = name.endsWith('Fill')
                            
                            return (
                                <button
                                    key={name}
                                    className="icon-item"
                                    onClick={() => handleIconClick(name, component)}
                                    title={formatIconName(name)}
                                >
                                    <IconComponent
                                        size={iconProperties.size.value}
                                        color={iconProperties.color.value}
                                        {...(isFillIcon ? {} : { strokeWidth: iconProperties.strokeWeight.value })}
                                    />
                                </button>
                            )
                        })
                    ) : (
                        <div className="no-results">No icons found</div>
                    )}
                </div>
            )}
        </main>
    )
}
