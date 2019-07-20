export default function wrap(el: HTMLElement) {
  const clone = el.cloneNode(true) as HTMLElement;
  const bcr = el.getBoundingClientRect();
  const style = window.getComputedStyle(el);

  clone.style.position = "fixed";
  clone.style.top = `${bcr.top - parseInt(style.marginTop, 10)}px`;
  clone.style.left = `${bcr.left - parseInt(style.marginLeft, 10)}px`;

  return {
    originalNode: el,
    clone,
    style,
    bcr,
    cx: (bcr.left + bcr.right) / 2,
    cy: (bcr.top + bcr.bottom) / 2,
    width: bcr.width,
    height: bcr.height
  };
}
