export default function () {
  let lastIconPosition = { x: 0, y: 0 };
  const ICON_SPACING = 10; // Spacing between icons

  figma.showUI(__html__, { width: 300, height: 400, themeColors: true })

  figma.ui.onmessage = async (msg) => {
      if (msg.type === 'load-settings') {
          const size = await figma.clientStorage.getAsync('iconSize')
          const strokeWeight =
              await figma.clientStorage.getAsync('strokeWeight')
          figma.ui.postMessage({
              type: 'load-settings-result',
              size,
              strokeWeight,
          })
      } else if (msg.type === 'save-stroke-weight') {
          await figma.clientStorage.setAsync('strokeWeight', msg.weight)
      } else if (msg.type === 'save-icon-size') {
          try {
              await figma.clientStorage.setAsync('iconSize', msg.size)
          } catch (error) {
              console.error('Failed to save icon size:', error)
              figma.notify('Failed to save icon size', { error: true })
          }
      } else if (msg.type === 'paste-icon') {
        const iconName = msg.iconName
        const svgString = msg.svgString
        const strokeWeight = msg.strokeWeight || 2
        const iconSize = msg.iconSize || 24
    
        function prepareSvg(svgString, strokeWeight) {
            return svgString.replace(
                /stroke-width="2"/g,
                `stroke-width="${strokeWeight}"`
            )
        }
    
        if (svgString) {

            const preparedSvgString = prepareSvg(svgString, strokeWeight)
            const node = figma.createNodeFromSvg(preparedSvgString)
            node.name = iconName
    
            // Calculate the position
            let x, y
            let parentNode
    
            if (figma.currentPage.selection.length > 0) {
              const selectedNode = figma.currentPage.selection[0]
              const bounds = selectedNode.absoluteBoundingBox
              console.log(bounds)
              if (selectedNode.type === 'FRAME' || selectedNode.type === 'GROUP') {
                  console.log('Selected frame or group')
                  if (selectedNode.width === iconSize && selectedNode.height === iconSize) {
                      // If the selected frame has the same size as the icon, paste below
                      console.log('Pasted below because same size frame/group')
                      x = bounds.x
                      y = bounds.y + bounds.height + ICON_SPACING
                      parentNode = selectedNode.parent
                  } else {
                      // Paste inside the selected frame
                      console.log('Paste inside the selected frame')
                      x = 0
                      y = 0
                      parentNode = selectedNode
                  }
              } else {
                  // Paste below the selected node
                  console.log('Paste below the selected node')
                  x = bounds.x
                  y = bounds.y + bounds.height + ICON_SPACING
                  parentNode = selectedNode.parent
              }
          } else {
              // Center in viewport if no selection
              console.log('Center in viewport if no selection')
              const viewportBounds = figma.viewport.bounds
              x = viewportBounds.x + (viewportBounds.width - iconSize) / 2
              y = viewportBounds.y + (viewportBounds.height - iconSize) / 2
              parentNode = figma.currentPage
          }

            node.resize(iconSize, iconSize)
            node.x = x
            node.y = y
            parentNode.appendChild(node)
    
            // Temporarily select the node to scroll into view
            figma.currentPage.selection = [node]
            figma.viewport.scrollAndZoomIntoView([node])

            figma.notify(`✅ Pasted ${msg.iconName} icon`, { timeout: 1000 });
        } else {
            figma.notify(`Icon ${iconName} not found`, { error: true })
        }
    }
  }
}