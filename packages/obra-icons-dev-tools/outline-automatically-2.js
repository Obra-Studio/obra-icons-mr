

let madeFilled = false;
let nodesToMerge = [];

function deepClone(val) {
    const type = typeof val;
    if (val === null) {
        return null;
    } else if (type === 'undefined' || type === 'number' ||
               type === 'string' || type === 'boolean') {
        return val;
    } else if (type === 'object') {
        if (val instanceof Array) {
            return val.map(x => deepClone(x));
        } else if (val instanceof Uint8Array) {
            return new Uint8Array(val);
        } else {
            let o = {};
            for (const key in val) {
                o[key] = deepClone(val[key]);
            }
            return o;
        }
    }
    throw 'unknown';
}

const makeFilled = (selection) => {
    fill(selection);
}

const fill = (selection) => {
    if (selection.length === 0) {
        figma.notify('You have not selected anything.');
        return;
    }

    const fallbackColor = { r: 0, g: 0, b: 0 };

    for (const node of selection) {
        let strokes;

        // Only process visible nodes
        if (node.visible) {
            if (node.type === 'BOOLEAN_OPERATION') {
                // Process children of boolean operation nodes
                fill(node.children);
            }

            if (node.type === 'ELLIPSE' || node.type === 'POLYGON' || node.type === 'STAR' || node.type === 'RECTANGLE' || node.type === 'VECTOR' || node.type === 'LINE' || node.type === 'BOOLEAN_OPERATION') {
                // Skip node if it is just a line
                if (node.type === 'LINE' || node.type === 'VECTOR' && node.vectorNetwork.segments.length < 2) {
                    // Directly push lines into the array for merging later
                    nodesToMerge.push(node);

                    figma.notify('Lines cannot be filled.');

					const outlinedNode = figma.flatten([node]);
					node.parent.appendChild(outlinedNode);
					outlinedNode.x = node.x;
					outlinedNode.y = node.y;
					outlinedNode.rotation = node.rotation;
					node.remove();
					nodesToMerge.push(outlinedNode);
					continue;

                    
                }

                // Skip node if it has no stroke
                if (node.strokes.length === 0) {
                    continue;
                }

                // Save first stroke of node
                strokes = deepClone(node.strokes[0]);

                // Remove fills from node
                node.fillStyleId = '';
                node.fills = [];

                // Clone node to be filled
                const fillNode = node.deepClone();

                // Reparent cloned node and set its position and rotation
                node.parent.appendChild(fillNode);
                fillNode.x = node.x;
                fillNode.y = node.y;
                fillNode.rotation = node.rotation;

                // Remove strokes from cloned node
                fillNode.strokeStyleId = '';
                fillNode.strokes = [];

                // Create boolean operation node from original and cloned node
                const boolNode = figma.union([node, fillNode], node.parent);

                // Apply stroke of original node as fill for cloned node and boolean operation node
                if (node.strokeStyleId.length > 0) {
                    fillNode.fillStyleId = node.strokeStyleId;
                    boolNode.fillStyleId = node.strokeStyleId;
                } else if (strokes !== null) {
                    fillNode.fills = [strokes];
                    boolNode.fills = [strokes];
                } else {
                    let fillNodeFills = [{ type: 'SOLID', color: fallbackColor }];
                    let boolNodeFills = [{ type: 'SOLID', color: fallbackColor }];

                    fillNode.fills = fillNodeFills;
                    boolNode.fills = boolNodeFills;
                }

                // Rename filled node and boolean operation node
                fillNode.name = fillNode.name + ' (Filled)';
                boolNode.name = node.name;

                // Push the boolean operation node into the array for merging
                nodesToMerge.push(boolNode);
				
                madeFilled = true;
            } else if (node.type === 'COMPONENT' || node.type === 'FRAME' || node.type === 'GROUP' || node.type === 'INSTANCE') {
                // Process the children of components, frames, groups, and instances
                fill(node.children);
            } else {
                figma.notify('This layer type is not supported.');
            }
        }
    }

    // Notify user that no node was filled
    if (!madeFilled) {
        figma.notify('There is no layer that can be filled.');
    }
}

const merge = (nodes) => {
    // Get parent of the first node
    const parent = nodes[0].parent;

    // Create a boolean operation node of all nodes
    const mergedNodes = figma.union(nodes, parent);

    // Apply the fills (or fill style ID or stroke style ID) of the first node to the boolean operation node
    mergedNodes.fills = nodes[0].fills;
    mergedNodes.fillStyleId = nodes[0].fillStyleId !== '' ? nodes[0].fillStyleId : nodes[0].strokeStyleId;

    // Flatten the boolean operation node
    const flattenedNode = figma.flatten([mergedNodes]);

    // Set the flattened node as the new selection and empty the global array of nodes to merge
    figma.currentPage.selection = [flattenedNode];
    nodesToMerge = [];
}

const createFilledVariant = (selection) => {
    if (selection.length === 0) {
        figma.notify(noSelectionMessage);
        return;
    }

    for (const node of selection) {
        if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
            const filledVariant = node.deepClone();
            filledVariant.name = node.name + ' (Filled)';
            node.parent.appendChild(filledVariant);
            filledVariant.x = node.x + node.width + 16; // Position the new variant to the right of the original
            fill([filledVariant]);
        } else {
            figma.notify('Please select a component or instance to create a filled variant.');
        }
    }
}