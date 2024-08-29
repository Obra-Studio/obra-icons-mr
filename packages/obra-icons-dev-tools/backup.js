// Load the UI

// Set up the UI and message handler
figma.showUI(__html__, { width: 300, height: 300 });


figma.ui.onmessage = async (msg) => {


  if (msg.type === 'resizeWindow') {
    figma.ui.resize(300, msg.height);
  }
  
  if (msg.type === 'create-dev-copy') {
      createDevCopy();
  }
  
  if (msg.type === 'merge-auto-layout-groups') {
      mergeAutoLayoutGroups();
  }

  if (msg.type === 'harmonize-strokes-and-fills') {
      harmonizeStrokesAndFills();
  }

  if (msg.type === 'delete-key-shapes') {
      deleteKeyShapes();
  }

  if (msg.type === 'report-fill-and-stroke') {
      reportFillAndStroke();
  }

}

/*
 * General - load fonts
 */


async function loadFonts() {
    await Promise.all([
        figma.loadFontAsync({
            family: "Inter",
            style: "Regular"
        }),
    ])
}

/*
 * Debug actions - Scan for layers that both have a stroke and a fill
 */

// Array to hold the names of layers that meet the criteria
let layersWithStrokeAndFill = [];

// Function to recursively scan all layers within a given layer for stroke and fill
function scanLayersForStrokeAndFill(layer, parentHierarchy = "") {
  // If the layer has children, check each child
  if ("children" in layer) {
    for (const child of layer.children) {
      // Prepare a string representing the current hierarchy of layer names
      const currentHierarchy = parentHierarchy + layer.name + ' > ';
      // Check if the child layer has both a stroke and a fill
      if (child.strokes && child.strokes.length > 0 && child.fills && child.fills.length > 0) {
        // Add the child layer's name and its parent hierarchy to the array
        layersWithStrokeAndFill.push(currentHierarchy + child.name);
      }
      // Recursively check the child layer's children
      scanLayersForStrokeAndFill(child, currentHierarchy);
    }
  }
}

// Function to initiate the scan either on a specified frame or the current selection
function reportFillAndStroke(frame) {
  // Reset the array for each new scan
  layersWithStrokeAndFill = [];

  // If no frame is specified, use the current selection
  if (!frame) {
    const selection = figma.currentPage.selection;
    if (selection.length !== 1 || selection[0].type !== 'FRAME') {
      figma.notify('Please select an autolayout frame that contains icons.');
      return;
    }
    frame = selection[0];
  }

  // Start the recursive scan from the specified frame
  scanLayersForStrokeAndFill(frame);

  // Report the results to the user
  if (layersWithStrokeAndFill.length > 0) {
    const layerNames = layersWithStrokeAndFill.join('\n');
    
    figma.notify(`Layers with stroke and fill:\n${layerNames}`);

  } else {
    figma.notify('No layers with both stroke and fill found.');
  }
}

/*
 * Action - Create dev copy
 */


// 1. Select the frame called “Obra Icons - Original source”. Make a copy.
// 2. Position the copy to the right of the initial frame, with 96px in between the original and the copy.
// 3. Rename the frame to “Obra Icons - Dev export”
// 4. Within the new frame, find the layer that has the text “Source version”. Rename it to “Dev version”.
// 5. Find the frame called “Icons”. Remove the child layers that are of type text 
// 6. Select the icons layer, and apply merge auto layout groups.
// 7. Apply “harmonize strokes and fills” code, which harmonizes strokes and fills based on specific layer names
// 8. Apply the “delete keyshapes” code, which removes a layer with a specific name.
// 9. Change the layer with contents “Source version” to contain the id of the layer with name “Base” which is to be used in furhter development. The “Base” layer is a direct child of the “Icons” layer.

function createDevCopy() {

  // Get the current page
  const currentPage = figma.currentPage;
  
  // Find the original frame by name on the current page
  const originalFrame = currentPage.findOne(node => node.name === "Obra Icons - Original source" && node.type === "FRAME");

  // Ensure the original frame was found
  if (!originalFrame) {
    figma.notify('Original frame not found');
    figma.closePlugin();
    return;
  }

  // Clone the original frame
  const cloneFrame = originalFrame.clone();

  // Position the clone to the right of the original, with 96px spacing
  cloneFrame.x = originalFrame.x + originalFrame.width + 96;

  // Rename the cloned frame
  cloneFrame.name = "Obra Icons - Dev export";

  // Find the frame named "Icons" within the cloned frame
  const iconsFrame = cloneFrame.findOne(node => node.name === "Icons" && node.type === "FRAME");

  // Ensure the Icons frame was found
  if (!iconsFrame) {
    figma.notify('Icons frame not found');
    figma.closePlugin();
    return;
  }

  // Iterate through the direct children of the Icons frame
  for (let i = iconsFrame.children.length - 1; i >= 0; i--) {
    const child = iconsFrame.children[i];
    // Remove the child if it's a text layer
    if (child.type === "TEXT") {
      child.remove();
    }
  }

  // Call mergeAutoLayoutGroups with the Icons frame as an argument
  mergeAutoLayoutGroups(iconsFrame);

  // Call harmonizeStrokesAndFills with the Icons frame as an argument
  harmonizeStrokesAndFills(iconsFrame);

  // Call deleteKeyShapes with the Icons frame as an argument
  deleteKeyShapes(iconsFrame);

  // Add the clone to the same parent as the original
  originalFrame.parent.appendChild(cloneFrame);


  // Locate the layer with content "Source version"
  const sourceVersionLayer = cloneFrame.findOne(node => node.type === "TEXT" && node.characters === "Source version");

  // Ensure the Source Version layer was found
  if (!sourceVersionLayer) {
    figma.notify('Source Version layer not found');
    figma.closePlugin();
    return;
  }

  // Locate the "Base" layer which is a direct child of the "Icons" layer
  const baseLayer = iconsFrame.findOne(node => node.name === "Base");

  // Ensure the Base layer was found
  if (!baseLayer) {
    figma.notify('Base layer not found');
    figma.closePlugin();
    return;
  }

  loadFonts().then(() => {
    // Update the text content of the Source Version layer with the id of the Base layer
    sourceVersionLayer.characters = baseLayer.id;
   });
}

/*
 * Action - Merge auto layout groups
 * @description Merges several auto layout groups that are children of the selected or passed frame
 */

function mergeAutoLayoutGroups(frame = figma.currentPage.selection[0]) {
    const autoLayoutGroups = frame.children.filter(node => node.type === 'FRAME');

    // Ensure there's at least one Auto Layout group to serve as the target
    if (autoLayoutGroups.length === 0) {
        figma.notify('No Auto Layout groups found.');
        return;
    }

    const targetGroup = autoLayoutGroups[0];

    // Iterate through the other Auto Layout groups and move their children to the target group
    for (let i = 1; i < autoLayoutGroups.length; i++) {
        let group = autoLayoutGroups[i];
        for (let child of group.children) {
            targetGroup.appendChild(child.clone());
        }
    }

    // Delete the other Auto Layout groups
    for (let i = 1; i < autoLayoutGroups.length; i++) {
        autoLayoutGroups[i].remove();
    }

    // Notify the user of completion
    // figma.notify('Auto Layout groups merged successfully.');
}



/*
 * Action - Harmonize strokes and fills
 * @description Set the stroke and fill of icons to black, instead of the specific variable name used in production
 */

function harmonizeStrokesAndFills(frame = figma.currentPage.selection[0]) {
    // Instead of iterating through selected nodes, 
    // we'll start the harmonization process on the provided frame
    harmonizeOperations(frame);
}

// Recursive function to traverse node tree
function harmonizeOperations(node) {
    setColors(node);

    // If the node has children, recurse through them
    if ("children" in node) {
        for (const child of node.children) {
            harmonizeOperations(child);
        }
    }
  
}

// Function to set the stroke and fill color of a node to black
function setColors(node) {
  if ((node.type === "VECTOR" || node.type === "ELLIPSE" || node.type === "RECTANGLE" || node.name === "Union (Vector) - Stroke") && node.name != "Fill" ) {
    node.strokes = [{ type: "SOLID", color: {r: 0, g: 0, b: 0} }];
  }

  if (node.name === "Union (Vector) - Stroke") {
      node.fills = []
  }

  if (node.name === "Fill" || node.name === "Subtract (Vector)" || node.name === "Union (Vector) - Fill" || node.name === "Union (Vector) - Fill" && (node.type === "VECTOR" || node.type === "ELLIPSE" || node.type === "RECTANGLE"))  {
      if (node.fills.length > 0) {
         node.fills = [{ type: "SOLID", color: {r: 0, g: 0, b: 0} }];
      }
  }
}


/*
 * Action - Remove key shape layers
 */

let nodesToRemove = [];  // Array to hold nodes that will be removed

function deleteKeyShapes(frame = figma.currentPage.selection[0]) {
    // Reset nodesToRemove array
    nodesToRemove = [];

    // Start the removal marking process on the provided frame
    markForRemoval(frame);

    // Now remove all nodes marked for removal
    nodesToRemove.forEach(node => {
        node.remove();
    });

    // Notify the user of completion
    // figma.notify(`${nodesToRemove.length} key shape(s) removed successfully.`);
}

// Recursive function to mark layers named "Key shape template" for removal
function markForRemoval(node) {
  if (node.name === "Key shape template") {
    nodesToRemove.push(node);
  }

  // If the node has children, recurse through them
  if ("children" in node) {
    for (const child of node.children) {
        markForRemoval(child);
    }
  }
}
