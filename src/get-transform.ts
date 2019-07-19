export default function getTransform(dx: number, dy: number, ratio: number) {
  return `translate(${dx * ratio}px, ${dy * ratio}px)`;
}
