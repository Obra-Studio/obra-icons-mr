/**
 * ? Turns arrow-left -> ArrowLeft
 */
export function icon_name_to_pascal(name: string) {
	return name
		.split('-')
		.map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
		.join('');
}
