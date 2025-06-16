export async function copyToClipboard(text: string): Promise<void> {
	try {
		await navigator.clipboard.writeText(text);
		return Promise.resolve();
	} catch (err) {
		console.error('Could not copy text: ', err);
		return Promise.reject(err);
	}
}

export async function copyPngToClipboard(svgData: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = async () => {
			const canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			const ctx = canvas.getContext('2d')!;
			ctx.drawImage(img, 0, 0);

			try {
				const blob = await new Promise<Blob>((resolve) =>
					canvas.toBlob((blob) => resolve(blob!), 'image/png'),
				);
				const item = new ClipboardItem({ 'image/png': blob });
				await navigator.clipboard.write([item]);
				resolve();
			} catch (err) {
				console.error('Failed to copy PNG:', err);
				reject(err);
			}
		};
		img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
	});
}

export async function downloadIcon(
	name: string,
	svgData: string,
	format: 'svg' | 'png',
): Promise<void> {
	if (format === 'svg') {
		const blob = new Blob([svgData], { type: 'image/svg+xml' });
		const url = window.URL.createObjectURL(blob);
		const anchor = document.createElement('a');
		anchor.href = url;
		anchor.download = `${name}.svg`;
		anchor.click();
		window.URL.revokeObjectURL(url);
	} else if (format === 'png') {
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => {
				const canvas = document.createElement('canvas');
				canvas.width = img.width;
				canvas.height = img.height;
				const ctx = canvas.getContext('2d')!;
				ctx.drawImage(img, 0, 0);
				canvas.toBlob((blob) => {
					const url = window.URL.createObjectURL(blob!);
					const anchor = document.createElement('a');
					anchor.href = url;
					anchor.download = `${name}.png`;
					anchor.click();
					window.URL.revokeObjectURL(url);
					resolve();
				}, 'image/png');
			};
			img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
		});
	}
}
