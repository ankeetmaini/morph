export default function getTransform(
  dx: number,
  dy: number,
  sx: number,
  sy: number,
  ratio: number
) {
  return `translate(${dx * ratio}px, ${dy * ratio}px) scale(${1 +
    sx * ratio}, ${1 + sy * ratio})`;
}
