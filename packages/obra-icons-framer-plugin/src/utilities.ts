export function iconNamePascal(name: string): string {
  const pascal = name
    .split('-')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join('')

  return `${pascal}`
}

export function toUpperCase(string: string): string {
  return string.toUpperCase()
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function formatIconName(name: string): string {
  return name
    .split(/(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join(' ')
    .trim()
}

export function prepareSvg(svgString: string, strokeWeight: number, color: string): string {
  return svgString
    .replace(/<g class="[^"]*">([\s\S]*?)<\/g>/g, '$1')
    .replace(/stroke-width="2"/g, `stroke-width="${strokeWeight}"`)
    .replace(/stroke="[^"]*"/g, `stroke="${color}"`)
    .replace(/fill="[^"]*"(?!.*<\/svg>)/g, `fill="${color}"`)
} 