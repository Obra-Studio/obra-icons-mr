export default function () {
    let lastIconPosition = { x: 0, y: 0 }
    const ICON_SPACING = 10 // Spacing between icons

    figma.showUI(__html__, { width: 420, height: 400, themeColors: true })

    figma.ui.onmessage = async (msg) => {
        if (msg.type === 'load-settings') {
            const size = await figma.clientStorage.getAsync('iconSize')
            const strokeWeight =
                await figma.clientStorage.getAsync('strokeWeight')
            const color = await figma.clientStorage.getAsync('iconColor')
            const customColors =
                await figma.clientStorage.getAsync('customColors')

            figma.ui.postMessage({
                type: 'load-settings-result',
                size,
                strokeWeight,
                color,
                customColors,
            })
        }

        if (msg.type === 'save-icon-color') {
            try {
                await figma.clientStorage.setAsync('iconColor', msg.color)
                console.log('Saved icon color:', msg.color)
            } catch (error) {
                console.error('Failed to save icon color:', error)
                figma.notify('Failed to save icon color', { error: true })
            }
        }

        if (msg.type === 'save-custom-colors') {
            try {
                await figma.clientStorage.setAsync('customColors', msg.colors)
                console.log('Saved custom colors:', msg.colors)
            } catch (error) {
                console.error('Failed to save custom colors:', error)
                figma.notify('Failed to save custom colors', { error: true })
            }
        }

        if (msg.type === 'load-custom-colors') {
            try {
                const colors =
                    await figma.clientStorage.getAsync('customColors')
                figma.ui.postMessage({
                    type: 'load-custom-colors-result',
                    colors,
                })
            } catch (error) {
                console.error('Failed to load custom colors:', error)
                figma.notify('Failed to load custom colors', { error: true })
            }
        }

        if (msg.type === 'save-stroke-weight') {
            try {
                await figma.clientStorage.setAsync('strokeWeight', msg.weight)
            } catch (error) {
                console.error('Failed to save icon weight:', error)
                figma.notify('Failed to save icon weight', { error: true })
            }
        }

        if (msg.type === 'save-icon-size') {
            try {
                await figma.clientStorage.setAsync('iconSize', msg.size)
            } catch (error) {
                console.error('Failed to save icon size:', error)
                figma.notify('Failed to save icon size', { error: true })
            }
        }

        if (msg.type === 'paste-icon') {

            const iconName = msg.iconName
            const svgString = msg.svgString

            
            function formatIconName(name: string): string {
                return name.toLowerCase().replace(/\s+/g, '-');
            }

            const strokeWeight = msg.strokeWeight || 2
            const iconSize = msg.iconSize || 24
            const iconColor = msg.iconColor || '#000000'

            function prepareSvg(svgString, strokeWeight, color) {
                return svgString
                .replace(/<g class="[^"]*">([\s\S]*?)<\/g>/g, '$1')
                    .replace(
                        /stroke-width="2"/g,
                        `stroke-width="${strokeWeight}"`
                    )
                    .replace(/stroke="[^"]*"/g, `stroke="${color}"`)
                    .replace(/fill="[^"]*"(?!.*<\/svg>)/g, `fill="${color}"`)
            }

            if (svgString) {
                const preparedSvgString = prepareSvg(
                    svgString,
                    strokeWeight,
                    iconColor
                )

                const node = figma.createNodeFromSvg(preparedSvgString)
                node.name = formatIconName(iconName)

                let x, y
                let parentNode

                if (figma.currentPage.selection.length > 0) {
                    const selectedNode = figma.currentPage.selection[0]
                    const bounds = selectedNode.absoluteBoundingBox

                    if (
                        selectedNode.type === 'FRAME' ||
                        selectedNode.type === 'GROUP'
                    ) {
                        if (
                            selectedNode.width === iconSize &&
                            selectedNode.height === iconSize
                        ) {
                            // If the selected frame has the same size as the icon, paste below
                            x = bounds.x
                            y = bounds.y + bounds.height + ICON_SPACING
                            parentNode = selectedNode.parent
                        } else {
                            // Paste inside the selected frame
                            x = 0
                            y = 0
                            parentNode = selectedNode
                        }
                    } else {
                        // Paste below the selected node
                        x = selectedNode.x
                        y = selectedNode.y + bounds.height + ICON_SPACING
                        parentNode = selectedNode.parent
                    }
                } else {
                    // Center in viewport if no selection
                    const viewportBounds = figma.viewport.bounds
                    x = viewportBounds.x + (viewportBounds.width - iconSize) / 2
                    y =
                        viewportBounds.y +
                        (viewportBounds.height - iconSize) / 2
                    parentNode = figma.currentPage
                }

                node.resize(iconSize, iconSize)
                node.x = x
                node.y = y

                parentNode.appendChild(node)

                // Temporarily select the node to scroll into view
                figma.currentPage.selection = [node]
                figma.viewport.scrollAndZoomIntoView([node])

                figma.notify(`✅ Pasted ${msg.iconName} icon`, {
                    timeout: 1000,
                })
            } else {
                figma.notify(`Icon ${iconName} not found`, { error: true })
            }
        }
    }
}
