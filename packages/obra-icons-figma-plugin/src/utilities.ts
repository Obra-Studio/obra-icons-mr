
export function iconNamePascal(name: string) {
    const pascal = name
        .split('-')
        .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
        .join('')

    return `Icon${pascal}`
}

export function toUpperCase(string) {
    return string.toUpperCase();
}