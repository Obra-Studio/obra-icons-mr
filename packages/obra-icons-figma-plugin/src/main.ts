export default function() {
  // Your plugin main code here...
  figma.showUI(__html__, { width: 300, height: 400, themeColors: true });

  figma.ui.onmessage = async (msg) => {
    if (msg.type === 'load-settings') {
      const size = await figma.clientStorage.getAsync('iconSize');
      const strokeWeight = await figma.clientStorage.getAsync('strokeWeight');
      figma.ui.postMessage({ type: 'load-settings-result', size, strokeWeight });
    } else if (msg.type === 'save-stroke-weight') {
      await figma.clientStorage.setAsync('strokeWeight', msg.weight);
    } else if (msg.type === 'save-icon-size') {
      try {
          await figma.clientStorage.setAsync('iconSize', msg.size);
          console.log('Icon size saved successfully');
      } catch (error) {
          console.error('Failed to save icon size:', error);
          figma.notify('Failed to save icon size', { error: true });
      }
    } else if (msg.type === 'paste-icon') {
      const iconName = msg.iconName;
      const svgString = msg.svgString;
      const strokeWeight = msg.strokeWeight || 2; // Default to 2 if not provided
      const iconSize = msg.iconSize || 24; // Default to 24 if not provided

      function prepareSvg(svgString, strokeWeight) {
        return svgString.replace(/stroke-width="2"/g, `stroke-width="${strokeWeight}"`);
      }

      if (svgString) {
        const preparedSvgString = prepareSvg(svgString, strokeWeight);
        const node = figma.createNodeFromSvg(preparedSvgString);
        node.name = iconName

        // Calculate the position
        let x, y;

        if (figma.currentPage.selection.length > 0) {
          const selectedNode = figma.currentPage.selection[0];
          const bounds = selectedNode.absoluteBoundingBox;
          x = bounds.x + (bounds.width - iconSize) / 2;
          y = bounds.y + (bounds.height - iconSize) / 2;

          if (selectedNode.type === 'FRAME') {
            // For frames, use relative positioning
            x = (bounds.width - iconSize) / 2;
            y = (bounds.height - iconSize) / 2;
            selectedNode.appendChild(node);
          } else {
            // For other node types, use absolute positioning
            figma.currentPage.appendChild(node);
          }
        } else {
          // Center in viewport if no selection
          const viewportBounds = figma.viewport.bounds;
          x = viewportBounds.x + (viewportBounds.width - iconSize) / 2;
          y = viewportBounds.y + (viewportBounds.height - iconSize) / 2;
          figma.currentPage.appendChild(node);
        }
        
        node.resize(iconSize, iconSize); // Resize the node based on iconSize
        node.x = x;
        node.y = y;

        figma.notify(`✅ Pasted ${msg.iconName} icon`);
      } else {
        figma.notify(`Icon ${iconName} not found`, { error: true });
      }
    }
  };
}