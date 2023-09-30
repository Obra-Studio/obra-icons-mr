export function css(node, properties) {
	function setProperties() {
		for (const prop of Object.keys(properties)) {
			node.style.setProperty(`--${prop}`, properties[prop]);
		}
	}

	setProperties();

	return {
		update(newProperties) {
			properties = newProperties;
			setProperties();
		},
	};
}
