// Obra icons dev tools

// Load the UI
figma.showUI(__html__, { width: 300, height: 300 });

// Message handlers
figma.ui.onmessage = async (msg) => {
	if (msg.type === 'resizeWindow') {
		figma.ui.resize(300, msg.height);
	}

	if (msg.type === 'create-dev-copy') {
		createDevCopy();
	}

	if (msg.type === 'create-design-copy') {
		createDesignCopy();
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

	if (msg.type === 'remove-all-bitmap-images') {
		removeAllBitmapImages();
	}

	if (msg.type === 'remove-all-top-level-text-layers') {
		removeAllTopLevelTextLayers();
	}

	if (msg.type === 'set-constraints-scale') {
		setConstraintsScale(figma.currentPage.selection);
	}

	if (msg.type === 'report-on-groups') {
		reportOnGroups(figma.currentPage.selection);
	}

	if (msg.type === 'report-on-duplicate-icons') {
		reportOnDuplicateIcons(figma.currentPage.selection);
	}

	if (msg.type === 'set-stroke-weight') {
		setStrokeWeight(figma.currentPage.selection, msg.weight);
	}

	if (msg.type === 'auto-colour-named-layers') {
		autoColourNamedLayers(figma.currentPage.selection);
	}

	if (msg.type === 'snap-pixel') {
		snapToPixel(figma.currentPage.selection, 1);
	}

	if (msg.type === 'snap-half-pixel') {
		snapToPixel(figma.currentPage.selection, 0.5);
	}

	if (msg.type === 'convert-to-variant-set') {
		convertToVariantSet();
	}

	if (msg.type === 'union-and-flatten') {
		unionAndFlatten(figma.currentPage.selection);
	}

	if (msg.type === 'apply-simplify') {
		const tolerance = msg.tolerance;

		const vectors = figma.currentPage.selection.filter(
			(n) => n.type === 'VECTOR',
		);

		if (vectors.length == 0) {
			figma.notify('Please select at least one vector path to simplify.');
			return;
		}

		vectors.forEach((node) => {
			const v = node;
			let allPoints = [];
			v.vectorNetwork.segments.forEach((segment) => {
				const start = v.vectorNetwork.vertices[segment.start];
				const end = v.vectorNetwork.vertices[segment.end];
				const c1 = { x: start.x, y: start.y };
				const c2 = { x: end.x, y: end.y };
				if (segment.tangentStart) {
					c1.x = c1.x + segment.tangentStart.x;
					c1.y = c1.y + segment.tangentStart.y;
				}
				if (segment.tangentEnd) {
					c2.x = c2.x + segment.tangentEnd.x;
					c2.y = c2.y + segment.tangentEnd.y;
				}
				const points = renderBezier(start, c1, c2, end);
				allPoints = allPoints.concat(points);
			});

			allPoints = simplify(allPoints, tolerance);
			const path = {
				windingRule: 'NONE',
				data: svgPathData(allPoints),
			};
			v.vectorPaths = [path];
		});

		figma.notify(
			`Simplified ${vectors.length} vector(s) with tolerance ${tolerance}`,
		);
	}
};

function snapToNearestFraction(value, fraction) {
	return Math.round(value / fraction) * fraction;
}

function snapToPixel(selection, fraction) {
	for (const node of selection) {
		if ('x' in node && 'y' in node) {
			node.x = snapToNearestFraction(node.x, fraction);
			node.y = snapToNearestFraction(node.y, fraction);

			if ('width' in node && 'height' in node) {
				node.resize(
					snapToNearestFraction(node.width, fraction),
					snapToNearestFraction(node.height, fraction),
				);
			}
		}
	}

	figma.notify(
		`Elements snapped to nearest ${fraction === 1 ? 'pixel' : 'half pixel'}`,
	);
}

/*
 * General - load fonts
 */

async function loadFonts() {
	await Promise.all([
		figma.loadFontAsync({
			family: 'Inter',
			style: 'Regular',
		}),
	]);
}

/*
 * Debug actions - Scan for group layers
 */

function reportOnGroups(selection = figma.currentPage.selection) {
	if (!selection || selection.length === 0) {
		figma.notify('No layers selected');
		return;
	}

	let groupsFound = 0;
	let layersWithGroups = [];

	function processNode(node, path = '') {
		const currentPath = path ? `${path} > ${node.name}` : node.name;

		if (node.type === 'GROUP') {
			groupsFound++;
			layersWithGroups.push(currentPath);
		}

		if ('children' in node) {
			for (const child of node.children) {
				processNode(child, currentPath);
			}
		}
	}

	for (const node of selection) {
		processNode(node);
	}

	if (groupsFound > 0) {
		console.log('Layers containing groups:');
		layersWithGroups.forEach((path) => console.log(path));
		figma.notify(
			`Found ${groupsFound} group(s) in ${layersWithGroups.length} layer(s). Check console for details.`,
		);
	} else {
		figma.notify('No groups found in the selected layers.');
	}
}

/*
 * Debug action - Scan for duplicate icons
 */

function scanLayersForDuplicates(layer, layerNames) {
	if (layer.type === 'FRAME' || layer.type === 'GROUP') {
		for (const child of layer.children) {
			scanLayersForDuplicates(child, layerNames);
		}
	} else if (layer.width === 24 && layer.height === 24) {
		layerNames[layer.name] = (layerNames[layer.name] || 0) + 1;
	}
}

function findDuplicates(layerNames) {
	const duplicates = [];
	for (const [name, count] of Object.entries(layerNames)) {
		if (count > 1) {
			// Don't report key shape template layers
			if (name != 'Key shape template') {
				duplicates.push(name);
			}
		}
	}
	return duplicates;
}

function reportOnDuplicateIcons() {
	const selectedLayers = figma.currentPage.selection;

	if (selectedLayers.length !== 1 || selectedLayers[0].type !== 'FRAME') {
		figma.notify('Please select a single artboard');
		figma.closePlugin();
		return;
	}

	const artboard = selectedLayers[0];
	const layerNames = {};
	scanLayersForDuplicates(artboard, layerNames);

	const duplicates = findDuplicates(layerNames);

	if (duplicates.length > 0) {
		figma.notify(`Duplicate layers found: ${duplicates.join(', ')}`);
	} else {
		figma.notify('No duplicates found');
	}
}

/*
 * Debug action - Scan for layers that both have a stroke and a fill
 */

// Array to hold the names of layers that meet the criteria
let layersWithStrokeAndFill = [];

// Function to recursively scan all layers within a given layer for stroke and fill
function scanLayersForStrokeAndFill(layer, parentHierarchy = '') {
	// If the layer has children, check each child
	if ('children' in layer) {
		for (const child of layer.children) {
			// Prepare a string representing the current hierarchy of layer names
			const currentHierarchy = parentHierarchy + layer.name + ' > ';
			// Check if the child layer has both a stroke and a fill
			if (
				child.strokes &&
				child.strokes.length > 0 &&
				child.fills &&
				child.fills.length > 0
			) {
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
			figma.notify(
				'Please select an autolayout frame that contains icons.',
			);
			return;
		}
		frame = selection[0];
	}

	// Start the recursive scan from the specified frame
	scanLayersForStrokeAndFill(frame);

	// Report the results to the user
	if (layersWithStrokeAndFill.length > 0) {
		const layerNames = layersWithStrokeAndFill.join('\n');

		figma.notify(`Layers with both stroke and fill:\n${layerNames}`);
	} else {
		figma.notify('No layers with both stroke and fill found.');
	}
}

/*
 * Action - Remove all top level text layers
 */

function removeAllTopLevelTextLayers() {
	console.log('Starting removeAllTopLevelTextLayers');

	const selection = figma.currentPage.selection;

	if (selection.length !== 1 || selection[0].type !== 'FRAME') {
		console.error('Invalid selection');
		figma.notify('Please select a single frame');
		return;
	}

	const frame = selection[0];
	console.log(`Processing frame: ${frame.name}`);

	let removedCount = 0;

	// Iterate through the direct children of the frame
	for (let i = frame.children.length - 1; i >= 0; i--) {
		const child = frame.children[i];
		if (child.type === 'TEXT') {
			console.log(`Removing text layer: ${child.name}`);
			child.remove();
			removedCount++;
		}
	}

	console.log(
		`Finished removeAllTopLevelTextLayers. Removed ${removedCount} text layers.`,
	);
	figma.notify(
		`Removed ${removedCount} top-level text layer${removedCount !== 1 ? 's' : ''}`,
	);
}

/*
 * Action - Remove all bitmap images
 */

function removeAllBitmapImages() {
	console.log('Starting removeLayersWithBitmapFills');

	const selection = figma.currentPage.selection;

	if (selection.length !== 1 || selection[0].type !== 'FRAME') {
		console.error('Invalid selection');
		figma.notify('Please select a single frame');
		return;
	}

	const frame = selection[0];
	let removedCount = 0;

	function processNode(node) {
		if ('children' in node) {
			// Process children in reverse order to avoid indexing issues when removing nodes
			for (let i = node.children.length - 1; i >= 0; i--) {
				processNode(node.children[i]);
			}
		}

		if ('fills' in node) {
			const hasBitmapFill = node.fills.some(
				(fill) => fill.type === 'IMAGE',
			);
			if (hasBitmapFill) {
				console.log(`Removing node with bitmap fill: ${node.name}`);
				node.remove();
				removedCount++;
			}
		}
	}

	processNode(frame);

	console.log(
		`Finished removeLayersWithBitmapFills. Removed ${removedCount} layers with bitmap fills.`,
	);
	figma.notify(
		`Removed ${removedCount} layer${removedCount !== 1 ? 's' : ''} with bitmap fill${removedCount !== 1 ? 's' : ''}`,
	);
}

/*
 * Action - Set all children's constraints to scale
 */

function setConstraintsScale(selection = figma.currentPage.selection) {
	console.log('Starting setConstraintsScale');

	if (!selection || selection.length === 0) {
		console.error('No selection provided');
		figma.notify('Error: No layers selected');
		return;
	}

	let count = 0;

	function processNode(node) {
		console.log(`Processing node: ${node.name}, type: ${node.type}`);

		// Skip component instances
		if (node.type === 'INSTANCE') {
			console.log(`Skipping component instance: ${node.name}`);
			return;
		}

		if ('constraints' in node) {
			node.constraints = {
				horizontal: 'SCALE',
				vertical: 'SCALE',
			};
			count++;
			console.log(`Set constraints to SCALE for: ${node.name}`);
		}

		if ('children' in node) {
			console.log(
				`Node ${node.name} has ${node.children.length} children`,
			);
			for (const child of node.children) {
				processNode(child);
			}
		}
	}

	for (const node of selection) {
		processNode(node);
	}

	console.log(`Finished setConstraintsScale. Updated ${count} nodes.`);
	figma.notify(`Updated constraints for ${count} layers`);
}

/*
 * Action - Create design copy
 */

// 1. Select the frame called “Obra Icons - Original source”. Make a copy.
// 2. Position the copy to the right of the initial frame, with 96px in between the original and the copy.
// 3. Rename the frame to “Obra Icons - Design export”
// 4. Apply “harmonize strokes and fills” code, which harmonizes strokes and fills based on specific layer names
// 5. Apply the “delete keyshapes” code, which removes a layer with a specific name.

function createDesignCopy() {
	loadFonts().then(() => {
		// Get the current page
		const currentPage = figma.currentPage;

		// Find the original frame by name on the current page
		const originalFrame = currentPage.findOne(
			(node) =>
				node.name === 'Obra Icons - Original source' &&
				node.type === 'FRAME',
		);

		// Ensure the original frame was found
		if (!originalFrame) {
			figma.notify('Original frame not found');
			figma.closePlugin();
			return;
		}

		// Clone the original frame
		const cloneFrame = originalFrame.clone();

		// Position the clone to the right of the original, with offset
		cloneFrame.x = originalFrame.x + originalFrame.width + 1632;

		// Rename the cloned frame
		cloneFrame.name = 'Obra Icons - Design export';

		// Find the frame named "Icons" within the cloned frame
		const iconsFrame = cloneFrame.findOne(
			(node) => node.name === 'Icons' && node.type === 'FRAME',
		);

		// Ensure the Icons frame was found
		if (!iconsFrame) {
			figma.notify('Icons frame not found');
			figma.closePlugin();
			return;
		}

		// Call harmonizeStrokesAndFills with the Icons frame as an argument
		harmonizeStrokesAndFills(iconsFrame);

		// Call deleteKeyShapes with the Icons frame as an argument
		deleteKeyShapes(iconsFrame);
	});
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
	loadFonts().then(() => {
		// Get the current page
		const currentPage = figma.currentPage;

		// Find the original frame by name on the current page
		const originalFrame = currentPage.findOne(
			(node) =>
				node.name === 'Obra Icons - Original source' &&
				node.type === 'FRAME',
		);

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
		cloneFrame.name = 'Obra Icons - Dev export';

		// Find the frame named "Icons" within the cloned frame
		const iconsFrame = cloneFrame.findOne(
			(node) => node.name === 'Icons' && node.type === 'FRAME',
		);

		// Ensure the Icons frame was found
		if (!iconsFrame) {
			figma.notify('Icons frame not found');
			figma.closePlugin();
			return;
		}

		// Iterate through the direct children of the Icons frame and remove children that are text layers
		for (let i = iconsFrame.children.length - 1; i >= 0; i--) {
			const child = iconsFrame.children[i];
			if (child.type === 'TEXT') {
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
		const sourceVersionLayer = cloneFrame.findOne(
			(node) =>
				node.type === 'TEXT' && node.characters === 'Source version',
		);

		// Ensure the Source Version layer was found
		if (!sourceVersionLayer) {
			figma.notify('Source Version layer not found');
			figma.closePlugin();
			return;
		} else {
			console.log('Source Version layer found');
		}

		// Locate the "Base" layer which is a direct child of the "Icons" layer
		const baseLayer = cloneFrame.findOne((node) => node.name === 'Base');

		// Ensure the Base layer was found
		if (!baseLayer) {
			figma.notify('Base layer not found');
			figma.closePlugin();
			return;
		} else {
			console.log(`Base layer found. Id is ${baseLayer.id}`);
		}

		// Update the text content of the Source Version layer with the id of the Base layer
		sourceVersionLayer.characters = `Dev version - ID: ${baseLayer.id}`;
	});
}

/*
 * Action - Merge auto layout groups
 * @description Merges several auto layout groups that are children of the selected or passed frame
 */

function mergeAutoLayoutGroups(frame = figma.currentPage.selection[0]) {
	const autoLayoutGroups = frame.children.filter(
		(node) => node.type === 'FRAME',
	);

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
	figma.notify('Auto Layout groups merged successfully.');
}

/*
 * Action - Harmonize strokes and fills
 * @description Set the stroke and fill of icons to black, instead of the specific variable name used in production
 */

function harmonizeStrokesAndFills(frame = figma.currentPage.selection[0]) {
	if (!frame) {
		console.error('No frame provided or selected');
		figma.notify('Error: No frame provided or selected');
		return;
	}

	console.log(`Frame type: ${frame.type}, name: ${frame.name}`);

	// Check if the frame is actually a selection of multiple items
	if (
		Array.isArray(figma.currentPage.selection) &&
		figma.currentPage.selection.length > 1
	) {
		figma.currentPage.selection.forEach((item, index) => {
			console.log(`Processing selection item ${index + 1}:`, item);
			harmonizeOperations(item);
		});
	} else {
		console.log('Single frame or item, processing normally');
		harmonizeOperations(frame);
	}
}

function harmonizeOperations(node) {
	setColors(node);

	if ('children' in node) {
		for (const child of node.children) {
			harmonizeOperations(child);
		}
	}
}

function setColors(node) {
	if (
		(node.type === 'VECTOR' ||
			node.type === 'ELLIPSE' ||
			node.type === 'RECTANGLE' ||
			node.type === 'STAR') &&
		node.name != 'oi-fill'
	) {
		if (node.name === 'oi-combo-fill') {
			node.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
			if (node.fills.length > 0) {
				node.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
			}
		} else {
			node.strokes = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
		}
	}

	if (
		node.name === 'oi-fill' &&
		(node.type === 'VECTOR' ||
			node.type === 'ELLIPSE' ||
			node.type === 'STAR' ||
			node.type === 'RECTANGLE' ||
			node.type === 'BOOLEAN_OPERATION')
	) {
		if (node.fills.length > 0) {
			node.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
		} else {
			console.log(`Node ${node.name} has no fills`);
		}
	}
}

/*
 * Action - Remove key shape layers
 */
let nodesToRemove = []; // Array to hold nodes that will be removed

function deleteKeyShapes(selectionOrFrame = figma.currentPage.selection) {
	console.log('Starting deleteKeyShapes');

	// Reset nodesToRemove array
	nodesToRemove = [];

	if (
		!selectionOrFrame ||
		(Array.isArray(selectionOrFrame) && selectionOrFrame.length === 0)
	) {
		console.error('No selection or frame provided');
		figma.notify('Please select at least one item');
		return;
	}

	// If a single frame is passed (like in createDevCopy), wrap it in an array
	const itemsToProcess = Array.isArray(selectionOrFrame)
		? selectionOrFrame
		: [selectionOrFrame];

	// Process each item
	itemsToProcess.forEach((item) => {
		console.log(`Processing item: ${item.name}, type: ${item.type}`);
		markForRemoval(item);
	});

	// Now remove all nodes marked for removal
	let removedCount = nodesToRemove.length;
	nodesToRemove.forEach((node) => {
		console.log(`Removing node: ${node.name}`);
		node.remove();
	});

	console.log(
		`Finished deleteKeyShapes. Removed ${removedCount} key shape(s).`,
	);
	if (figma.currentPage.selection.length > 0) {
		// Only notify if it's being run independently (not as part of createDevCopy)
		figma.notify(
			`${removedCount} key shape${removedCount !== 1 ? 's' : ''} removed`,
		);
	}
	return removedCount; // Return the count for use in createDevCopy
}

// Recursive function to mark layers named "Key shape template" for removal
function markForRemoval(node) {
	if (node.name === 'Key shape template') {
		console.log(`Marking for removal: ${node.name}`);
		nodesToRemove.push(node);
	}

	// If the node has children, recurse through them
	if ('children' in node) {
		node.children.forEach((child) => {
			markForRemoval(child);
		});
	}
}

/*
 * Convert to variant set
 */

function convertToVariantSet() {
	const selection = figma.currentPage.selection;
	
	if (selection.length !== 1 || selection[0].type !== 'FRAME') {
	  figma.notify('Please select a single icon frame to convert.');
	  return;
	}
  
	const originalFrame = selection[0];
	const originalName = originalFrame.name;
  
	const parentFrame = figma.createFrame();
	parentFrame.name = originalName;
  
	originalFrame.name = '2-stroke';
  
	parentFrame.layoutMode = 'HORIZONTAL';
	parentFrame.itemSpacing = 8;
	parentFrame.paddingLeft = 8;
	parentFrame.paddingRight = 8;
	parentFrame.paddingTop = 8;
	parentFrame.paddingBottom = 8;
	parentFrame.layoutWrap = 'WRAP';
	parentFrame.counterAxisSizingMode = 'AUTO';
	parentFrame.counterAxisSpacing = 8;
	parentFrame.resize(110, 24 * 2 + 8 * 3);
  
	// Move the original frame into the parent frame
	parentFrame.appendChild(originalFrame);
  
	// Find the Key shape template in the original frame
	const keyShapeTemplate = originalFrame.findOne(node => node.name === 'Key shape template');
  
	if (!keyShapeTemplate) {
	  figma.notify('Key shape template not found in the original icon.');
	  return;
	}
  
	// 4. Create the new frames for the variants
	const variantNames = ['1.5-stroke', '1-stroke', '2-fill', '1.5-fill', '1-fill'];
  
	variantNames.forEach(name => {
	  const frame = figma.createFrame();
	  frame.name = name;
	  frame.resize(24, 24);
  
	  // Clone the Key shape template to all variants
	  const clonedKeyShape = keyShapeTemplate.clone();
	  frame.appendChild(clonedKeyShape);
  
	  if (!name.includes('-fill')) {
		// For non-fill variants, clone the contents of the original frame (excluding the Key shape template)
		originalFrame.children.forEach(child => {
		  if (child.name !== 'Key shape template') {
			const clonedChild = child.clone();
			frame.appendChild(clonedChild);
		  }
		});
  
		// Apply stroke weights based on the variant name
		if (name === '1.5-stroke') {
		  setStrokeWeight([frame], 1.5);
		} else if (name === '1-stroke') {
		  setStrokeWeight([frame], 1);
		}
	  }

	  if (name.includes('-fill')) {
		// Clone the contents of the respective stroke variant
		const strokeVariantName = name.replace('-fill', '-stroke');
		const strokeVariant = parentFrame.findChild(n => n.name === strokeVariantName);
		
		if (strokeVariant) {
		  strokeVariant.children.forEach(child => {
			if (child.name !== 'Key shape template') {
			  const clonedChild = child.clone();
			  frame.appendChild(clonedChild);
			}
		  });

		} else {
		  console.warn(`Stroke variant ${strokeVariantName} not found for ${name}`);
		}
	  }
  
	  parentFrame.appendChild(frame);
	});
  
	// Replace the original frame with the new parent frame
	originalFrame.parent.insertChild(originalFrame.parent.children.indexOf(originalFrame), parentFrame);
  
	// Zoom to the new parent frame
	figma.viewport.scrollAndZoomIntoView([parentFrame]);
  
	figma.notify('Icon converted to variant set successfully!');
  }

/*
 * Action - Adjust layer names for design copy
 * 1. Remove keywords from layer names. Keywords are in brackets.
 * 2. Remove string 'oi-' from each layer name. Users are likely to want their own namespace or none.
 */

function removeBracketedContent(str) {
	return str.replace(/\[.*?\]/g, '').trim();
}

function removeObraIconsPrefix(str) {
	return str.replace(/^oi-/, '');
}

/*
 * Action - Stroke weight
 */

function setStrokeWeight(selection = figma.currentPage.selection, weight) {
	if (!selection || selection.length === 0) {
		console.error('No selection provided');
		figma.notify('Error: No layers selected');
		return;
	}

	// Define the stroke widths based on the provided weight
	const classStrokeWidths = {
		1: {
			'oi-mini-dot': 1,
			'oi-medium-dot': 1.5,
			'oi-dot': 2,
			'oi-mini-square': 1,
			'oi-medium-square': 1,
			'oi-square': 2,
			'oi-negative': 3,
		},
		1.5: {
			'oi-mini-dot': 1.5,
			'oi-medium-dot': 2,
			'oi-dot': 3,
			'oi-mini-square': 1,
			'oi-medium-square': 1.5,
			'oi-square': 3,
			'oi-negative': 3,
		},
		2: {
			'oi-mini-dot': 2,
			'oi-medium-dot': 3,
			'oi-dot': 4,
			'oi-mini-square': 1.5,
			'oi-medium-square': 2,
			'oi-square': 4,
			'oi-negative': 4,
		},
	};

	let count = 0;

	function processNode(node) {
		console.log(`Processing node: ${node.name}, type: ${node.type}`);

		if (node.name === 'Key shape template') {
			console.log(`Skipping Key shape template: ${node.name}`);
			return;
		}

		let strokeWeight = weight; // Default to the provided weight

		// Check if the node name matches any in classStrokeWidths for the given weight
		if (
			classStrokeWidths[weight] &&
			node.name in classStrokeWidths[weight]
		) {
			strokeWeight = classStrokeWidths[weight][node.name]; // Set weight based on class
		}

		if ('strokes' in node && node.strokes.length > 0) {
			node.strokeWeight = strokeWeight;
			count++;
		}

		if ('children' in node) {
			console.log(
				`Node ${node.name} has ${node.children.length} children`,
			);
			for (const child of node.children) {
				processNode(child);
			}
		}
	}

	for (const node of selection) {
		processNode(node);
	}

	figma.notify(
		`Updated stroke weight to ${weight}px for ${count} layer${count !== 1 ? 's' : ''}`,
	);
}

// Square distance between two points a and b
function squareDistance(a, b) {
	return (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
}

// Square distance from point p to a segment between points a and b.
function squareDistanceToSegment(p, a, b) {
	let { x, y } = a;
	let dx = b.x - x;
	let dy = b.y - y;
	if (dx !== 0 || dy !== 0) {
		const t = ((p.x - x) * dx + (p.y - y) * dy) / (dx ** 2 + dy ** 2);
		if (t > 1) {
			({ x, y } = b);
		} else if (t > 0) {
			x += dx * t;
			y += dy * t;
		}
	}
	dx = p.x - x;
	dy = p.y - y;
	return dx ** 2 + dy ** 2;
}

// Douglas-Peucker algorithm to simplify (smoothen) a sequence of points
function simplify(points, tolerance) {
	if (points.length <= 1) {
		return points;
	}
	const len = points.length;
	const sqTolerance = tolerance ** 2;
	const markers = new Uint8Array(len);
	let first = 0;
	let last = len - 1;
	const stack = [];
	const newPoints = [];
	markers[first] = 1;
	markers[last] = 1;
	while (last) {
		let maxSqDist = 0;
		let index = 0;
		for (let i = first + 1; i < last; i++) {
			const sqDist = squareDistanceToSegment(
				points[i],
				points[first],
				points[last],
			);
			if (sqDist > maxSqDist) {
				index = i;
				maxSqDist = sqDist;
			}
		}
		if (maxSqDist > sqTolerance) {
			markers[index] = 1;
			stack.push(first, index, index, last);
		}
		last = stack.pop();
		first = stack.pop();
	}
	for (let i = 0; i < len; i++) {
		if (markers[i]) newPoints.push(points[i]);
	}
	return newPoints;
}

const RECURSION_LIMIT = 8;
const FLT_EPSILON = 1.1920929e-7;
const curve_angle_tolerance_epsilon = 0.01;
const m_angle_tolerance = 0;
const m_cusp_limit = 0;

// Entry point for recursive bezier curve rendering
function renderBezier(start, c1, c2, end) {
	const points = [];
	points.push(start);
	const { x: x1, y: y1 } = start;
	const { x: x2, y: y2 } = c1;
	const { x: x3, y: y3 } = c2;
	const { x: x4, y: y4 } = end;
	renderBezierRecursive(x1, y1, x2, y2, x3, y3, x4, y4, points, 2, 0);
	points.push(end);
	return points;
}

// Recursively split bezier curve in two, adding newly created points to the list
function renderBezierRecursive(
	x1,
	y1,
	x2,
	y2,
	x3,
	y3,
	x4,
	y4,
	points,
	distanceTolerance,
	level,
) {
	if (level > RECURSION_LIMIT) {
		return;
	}

	const pi = Math.PI;

	// Calculate all the mid-points of the line segments
	//----------------------
	const x12 = (x1 + x2) / 2;
	const y12 = (y1 + y2) / 2;
	const x23 = (x2 + x3) / 2;
	const y23 = (y2 + y3) / 2;
	const x34 = (x3 + x4) / 2;
	const y34 = (y3 + y4) / 2;
	const x123 = (x12 + x23) / 2;
	const y123 = (y12 + y23) / 2;
	const x234 = (x23 + x34) / 2;
	const y234 = (y23 + y34) / 2;
	const x1234 = (x123 + x234) / 2;
	const y1234 = (y123 + y234) / 2;

	if (level > 0) {
		// Enforce subdivision first time
		// Try to approximate the full cubic curve by a single straight line
		//------------------
		let dx = x4 - x1;
		let dy = y4 - y1;

		let d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx);
		let d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx);

		let da1, da2;

		if (d2 > FLT_EPSILON && d3 > FLT_EPSILON) {
			// Regular care
			//-----------------
			if (
				(d2 + d3) * (d2 + d3) <=
				distanceTolerance * (dx * dx + dy * dy)
			) {
				// If the curvature doesn't exceed the distanceTolerance value
				// we tend to finish subdivisions.
				//----------------------
				if (m_angle_tolerance < curve_angle_tolerance_epsilon) {
					points.push({ x: x1234, y: y1234 });
					return;
				}

				// Angle & Cusp Condition
				//----------------------
				let a23 = Math.atan2(y3 - y2, x3 - x2);
				da1 = Math.abs(a23 - Math.atan2(y2 - y1, x2 - x1));
				da2 = Math.abs(Math.atan2(y4 - y3, x4 - x3) - a23);
				if (da1 >= pi) da1 = 2 * pi - da1;
				if (da2 >= pi) da2 = 2 * pi - da2;

				if (da1 + da2 < m_angle_tolerance) {
					// Finally we can stop the recursion
					//----------------------
					points.push({ x: x1234, y: y1234 });
					return;
				}

				if (m_cusp_limit !== 0.0) {
					if (da1 > m_cusp_limit) {
						points.push({ x: x2, y: y2 });
						return;
					}

					if (da2 > m_cusp_limit) {
						points.push({ x: x3, y: y3 });
						return;
					}
				}
			}
		} else {
			if (d2 > FLT_EPSILON) {
				// p1,p3,p4 are collinear, p2 is considerable
				//----------------------
				if (d2 * d2 <= distanceTolerance * (dx * dx + dy * dy)) {
					if (m_angle_tolerance < curve_angle_tolerance_epsilon) {
						points.push({ x: x1234, y: y1234 });
						return;
					}

					// Angle Condition
					//----------------------
					da1 = Math.abs(
						Math.atan2(y3 - y2, x3 - x2) -
							Math.atan2(y2 - y1, x2 - x1),
					);
					if (da1 >= pi) da1 = 2 * pi - da1;

					if (da1 < m_angle_tolerance) {
						points.push({ x: x2, y: y2 });
						points.push({ x: x3, y: y3 });
						return;
					}

					if (m_cusp_limit !== 0.0) {
						if (da1 > m_cusp_limit) {
							points.push({ x: x2, y: y2 });
							return;
						}
					}
				}
			} else if (d3 > FLT_EPSILON) {
				// p1,p2,p4 are collinear, p3 is considerable
				//----------------------
				if (d3 * d3 <= distanceTolerance * (dx * dx + dy * dy)) {
					if (m_angle_tolerance < curve_angle_tolerance_epsilon) {
						points.push({ x: x1234, y: y1234 });
						return;
					}

					// Angle Condition
					//----------------------
					da1 = Math.abs(
						Math.atan2(y4 - y3, x4 - x3) -
							Math.atan2(y3 - y2, x3 - x2),
					);
					if (da1 >= pi) da1 = 2 * pi - da1;

					if (da1 < m_angle_tolerance) {
						points.push({ x: x2, y: y2 });
						points.push({ x: x3, y: y3 });
						return;
					}

					if (m_cusp_limit !== 0.0) {
						if (da1 > m_cusp_limit) {
							points.push({ x: x3, y: y3 });
							return;
						}
					}
				}
			} else {
				// Collinear case
				//-----------------
				dx = x1234 - (x1 + x4) / 2;
				dy = y1234 - (y1 + y4) / 2;
				if (dx * dx + dy * dy <= distanceTolerance) {
					points.push({ x: x1234, y: y1234 });
					return;
				}
			}
		}
	}

	// Continue subdivision
	//----------------------
	renderBezierRecursive(
		x1,
		y1,
		x12,
		y12,
		x123,
		y123,
		x1234,
		y1234,
		points,
		distanceTolerance,
		level + 1,
	);
	renderBezierRecursive(
		x1234,
		y1234,
		x234,
		y234,
		x34,
		y34,
		x4,
		y4,
		points,
		distanceTolerance,
		level + 1,
	);
}

// Converts array of points to a smooth SVG path data like "M x y C sx sy ex ey px py C ..."
function svgPathData(points) {
	const line = (a, b) => {
		const dx = b.x - a.x;
		const dy = b.y - a.y;
		return {
			length: Math.sqrt(dx ** 2 + dy ** 2),
			angle: Math.atan2(dy, dx),
		};
	};
	const controlPoint = (current, previous, next, reverse) => {
		const p = previous || current;
		const n = next || current;
		const smoothing = 0.2;
		const o = line(p, n);
		const angle = o.angle + (reverse ? Math.PI : 0);
		const length = o.length * smoothing;
		const x = current.x + Math.cos(angle) * length;
		const y = current.y + Math.sin(angle) * length;
		return { x, y };
	};
	const bezierCommand = (point, i, a) => {
		const cps = controlPoint(a[i - 1], a[i - 2], point, false);
		const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
		return `C ${cps.x} ${cps.y} ${cpe.x} ${cpe.y} ${point.x} ${point.y}`;
	};
	return points.reduce(
		(acc, point, i, a) =>
			i === 0
				? `M ${point.x} ${point.y}`
				: `${acc} ${bezierCommand(point, i, a)}`,
		'',
	);
}

/*
 * Action - Auto colour named layers with same name variables
 */

const colorVariableNames = [
	'oi-line',
	'oi-ellipse',
	'oi-box',
	'oi-incomplete-triangle',
	'oi-vector',
	'oi-fill',
	'oi-combo-fill',
	'oi-triangle',
	'oi-mini-dot',
	'oi-medium-dot',
	'oi-mini-square',
	'oi-medium-square',
	'oi-dot',
];

function autoColourNamedLayers() {
	const selection = figma.currentPage.selection;

	// Get all local variables
	const localVariableCollections =
		figma.variables.getLocalVariableCollections();

	// Find our color variables
	const colorVariables = localVariableCollections
		.flatMap((collection) =>
			collection.variableIds.map((id) =>
				figma.variables.getVariableById(id),
			),
		)
		.filter(
			(variable) =>
				variable !== null && colorVariableNames.includes(variable.name),
		);

	let appliedCount = 0;

	function processNode(node) {
		if ('name' in node) {
			const matchingVariable = colorVariables.find(
				(variable) => variable.name === node.name,
			);

			if (matchingVariable) {
				if (
					'fills' in node &&
					Array.isArray(node.fills) &&
					node.fills.length > 0
				) {
					// For fills
					const fills = clone(node.fills);
					fills[0] = figma.variables.setBoundVariableForPaint(
						fills[0],
						'color',
						matchingVariable,
					);
					node.fills = fills;
					appliedCount++;
				}
				if (
					'strokes' in node &&
					Array.isArray(node.strokes) &&
					node.strokes.length > 0
				) {
					// For strokes
					const strokes = clone(node.strokes);
					strokes[0] = figma.variables.setBoundVariableForPaint(
						strokes[0],
						'color',
						matchingVariable,
					);
					node.strokes = strokes;
					appliedCount++;
				}
			}
		}

		// Recursively process children if the node is a container (like a frame or group)
		if ('children' in node) {
			for (const child of node.children) {
				processNode(child);
			}
		}
	}

	// Process each selected node
	selection.forEach(processNode);

	figma.notify(
		`Applied colors to ${appliedCount} ${appliedCount === 1 ? 'property' : 'properties'}`,
	);
}

function clone(val) {
	return JSON.parse(JSON.stringify(val));
}


function unionAndFlatten(selection) {
    if (selection.length === 0) {
        figma.notify('Please select at least one node');
        return;
    }

    for (const node of selection) {
        if ('children' in node) {
            // Create a new frame to wrap the original node
            const wrapperFrame = figma.createFrame();
            wrapperFrame.name = node.name;
            wrapperFrame.resize(node.width, node.height);
            wrapperFrame.x = node.x;
            wrapperFrame.y = node.y;
            
            // Remove the default background fill
            wrapperFrame.fills = [];
            // Insert the wrapper frame at the same position as the original node
            node.parent.insertChild(node.parent.children.indexOf(node), wrapperFrame);

            // Move the original node into the wrapper frame
            wrapperFrame.appendChild(node);
            node.x = 0;
            node.y = 0;

			// Create a union of all child nodes, except instances of "Key shape template"
			const childrenToUnion = node.children.filter(child => child.name !== "Key shape template");
			const union = figma.union(childrenToUnion, node);

			// Save the x/y position of the union
			const unionX = union.x;
			const unionY = union.y;

            // Flatten the union
            const flattened = figma.flatten([union]);
			flattened.name = 'oi-fill'

            // Position the flattened output inside the wrapper frame, using the saved xy position
            wrapperFrame.appendChild(flattened);
			flattened.x = unionX;
			flattened.y = unionY;

            // Remove the original node
            node.remove();
        } else {
            figma.notify('Selected node has no children to union and flatten');
        }
    }

    figma.notify('Union and flatten operation completed');
}