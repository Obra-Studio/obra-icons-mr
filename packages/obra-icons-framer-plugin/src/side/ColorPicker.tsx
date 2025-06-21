import React, { useState, useEffect, useRef } from 'react'

interface ColorPickerProps {
  selectedColor: string
  onColorChange: (color: string) => void
  customColors: string[]
  onCustomColorsChange: (colors: string[]) => void
}

const predefinedColors = [
  '#000000',
  '#007AFF',
  '#34C759',
  '#FFCC00',
  '#FF3B30',
  '#7AC6F5',
  '#AF52DE',
  '#5856D6',
  '#FF2D55',
]

export function ColorPicker({ selectedColor, onColorChange, customColors, onCustomColorsChange }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isManagingCustomColors, setIsManagingCustomColors] = useState(false)
  const [isImportingColors, setIsImportingColors] = useState(false)
  const [newCustomColor, setNewCustomColor] = useState('#666666')
  const [importColors, setImportColors] = useState('')
  const [importError, setImportError] = useState('')
  
  const pickerRef = useRef<HTMLDivElement>(null)

  const toUpperCase = (str: string) => str.toUpperCase()

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setIsManagingCustomColors(false)
    setIsImportingColors(false)
  }

  const selectColor = (color: string) => {
    onColorChange(toUpperCase(color))
    setIsOpen(false)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
      setIsOpen(false)
      setIsManagingCustomColors(false)
      setIsImportingColors(false)
    }
  }

  const openCustomColorManager = () => {
    setIsManagingCustomColors(true)
    setIsImportingColors(false)
  }

  const closeCustomColorManager = () => {
    setIsManagingCustomColors(false)
  }

  const openImportDialog = () => {
    setIsImportingColors(true)
    setImportColors('')
    setImportError('')
  }

  const closeImportDialog = () => {
    setIsImportingColors(false)
  }

  const addCustomColor = () => {
    const upperCaseColor = toUpperCase(newCustomColor)
    if (!customColors.includes(upperCaseColor)) {
      onCustomColorsChange([...customColors, upperCaseColor])
    }
    setNewCustomColor('#666666')
  }

  const removeCustomColor = (color: string) => {
    onCustomColorsChange(customColors.filter(c => c !== color))
  }

  const importCustomColors = () => {
    const colors = importColors.split('\n').map(color => color.trim()).filter(Boolean)
    const validColors = colors.filter(color => /^#[0-9A-F]{6}$/i.test(color))
    
    if (validColors.length !== colors.length) {
      setImportError('Some colors were invalid and were not imported.')
    } else {
      setImportError('')
    }

    const newValidColors = validColors.filter(color => !customColors.includes(toUpperCase(color)))
    onCustomColorsChange([...customColors, ...newValidColors.map(toUpperCase)])
    setImportColors('')
    if (newValidColors.length > 0) {
      closeImportDialog()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    setNewCustomColor(toUpperCase(newCustomColor))
  }, [newCustomColor])

  return (
    <div className="color-picker" ref={pickerRef}>
      <button
        className="selected-color"
        style={{ backgroundColor: selectedColor }}
        onClick={(e) => {
          e.stopPropagation()
          toggleDropdown()
        }}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {/* Color */}
      </button>
      
      {isOpen && (
        <div className="menu-overlay color-options-overlay">
          <div className="color-section">
            <div className="color-grid">
              {predefinedColors.map((color) => (
                <button
                  key={color}
                  className="color-option"
                  style={{ backgroundColor: toUpperCase(color) }}
                  onClick={() => selectColor(color)}
                >
                  {/* Color */}
                </button>
              ))}
            </div>
          </div>
          
          {customColors.length > 0 && (
            <div className="color-section">
              <h3>Custom colors</h3>
              <div className="color-grid">
                {customColors.map((color) => (
                  <button
                    key={color}
                    className="color-option"
                    style={{ backgroundColor: color }}
                    onClick={() => selectColor(color)}
                  >
                    {/* Color */}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <button className="add-custom-color" onClick={openCustomColorManager} title="Manage custom colors">
            +
          </button>
        </div>
      )}

      {isManagingCustomColors && (
        <div className="menu-overlay custom-color-manager-overlay" style={{ maxHeight: '200px', overflow: 'scroll' }}>
          <div className="overlay-header">
            <h3>Manage custom colors</h3>
            <button onClick={closeCustomColorManager} className="icon-button close">
              ×
            </button>
          </div>
          <div className="add-color">
            <input type="color" value={newCustomColor} onChange={(e) => setNewCustomColor(e.target.value)} />
            <button onClick={addCustomColor} className="icon-button">
              +
              <span>Add color</span>
            </button>
          </div>
          
          <button onClick={openImportDialog} className="icon-button import-button">
            ↑
            <span>Import colors</span>
          </button>
          
          {customColors.length > 0 && (
            <div className="custom-colors-list">
              <h4>Current custom colors</h4>
              <div className="color-list">
                {customColors.map((color) => (
                  <div key={color} className="color-item">
                    <div className="color-sample" style={{ backgroundColor: color }}></div>
                    <span>{color}</span>
                    <button onClick={() => removeCustomColor(color)} className="icon-button delete">
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {isImportingColors && (
        <div className="menu-overlay import-colors-overlay">
          <div className="overlay-header">
            <h3>Import colors</h3>
            <button onClick={closeImportDialog} className="icon-button close">
              ×
            </button>
          </div>
          <div className="import-content">
            <p>Paste hex colors (one per line):</p>
            <textarea
              value={importColors}
              onChange={(e) => setImportColors(e.target.value)}
              placeholder="#FF0000&#10;#00FF00&#10;#0000FF"
              rows={5}
            />
            {importError && <div className="error">{importError}</div>}
            <button onClick={importCustomColors} className="icon-button">
              ↑
              <span>Import</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 