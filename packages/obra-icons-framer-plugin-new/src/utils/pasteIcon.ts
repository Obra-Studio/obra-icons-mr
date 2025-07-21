import { framer } from "framer-plugin";

// function prepareSvg(svg: string, strokeWeight: number, color: string) {
//   // … do things like set stroke-width and stroke-color on every path …
//   return svg;
// }

function formatIconName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export async function pasteIcon({
  iconName,
  svgString,
  strokeWeight,
  iconSize,
  iconColor,
}: {
  iconName: string;
  svgString: string;
  strokeWeight?: number;
  iconSize?: number;
  iconColor?: string;
}) {
  await framer.addSVG({
    svg: svgString,
    name: `${formatIconName(iconName)}.svg`,
  });
}
