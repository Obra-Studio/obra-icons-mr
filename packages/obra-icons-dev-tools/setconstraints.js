/*
 * General - function get children nodes
 */

function getChildrenNodes(node) {
  let childrenNodes = []
  const children = node.children
  if (children && children.length) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      childrenNodes.push(child)
      const _children = getChildrenNodes(child)
      if (_children && _children.length) {
        childrenNodes.push(..._children)
      }
    }
  }
  return childrenNodes
}

/*
 * Set constraints of selection
 */

function setConstraintsScale(sel) {
  for (const s of sel) {
    if (s.type === 'COMPONENT' || s.type === 'FRAME') {
      const nodes = getChildrenNodes(s)
      if (nodes.length > 0 && s.layoutMode === 'NONE') {
        for (const node of nodes) {
          if (node.type === 'VECTOR'
            || node.type === 'COMPONENT'
            || node.type === 'COMPONENT_SET'
            || node.type === 'INSTANCE'
            || node.type === 'FRAME'
            || node.type === 'TEXT'
            || node.type === 'LINE'
            || node.type === 'POLYGON'
            || node.type === 'ELLIPSE'
            || node.type === 'RECTANGLE'
            || node.type === 'STAR'
          ) {
            try {
              node.constraints = {
                horizontal: 'SCALE',
                vertical: 'SCALE'
              }
            } catch { }
          }
        }
      } else {
        figma.notify('⚠️ This selection is empty or an auto layout.')
        return
      }
    }
  }
  figma.notify(`All constraints of child layers set to scale.`)
}