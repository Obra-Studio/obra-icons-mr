
export default function() {
  // You're plugin main code here...
  figma.showUI(__html__, { width: 300, height: 400, themeColors: true })

  figma.ui.onmessage = async (msg) => {
    if (msg.type === 'paste-icon') {
      const iconName = msg.iconName;
      console.log(iconName)
      const svgString = msg.svgString;
      console.log(svgString)

      if (svgString) {
        const node = figma.createNodeFromSvg(svgString);
        node.name = iconName.slice(4); // Remove 'Icon' prefix
        figma.currentPage.appendChild(node);
        figma.viewport.scrollAndZoomIntoView([node]);
        figma.notify(`Pasted ${iconName.slice(4)} icon`);
      } else {
        figma.notify(`Icon ${iconName} not found`, { error: true });
      }
    }
  };
}

