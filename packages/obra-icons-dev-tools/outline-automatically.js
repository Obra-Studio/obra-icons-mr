let child = figma.currentPage.selection[0].children[0]
let line = child.outlineStroke()
child.appendChild(line)