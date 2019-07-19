import { Options, Wrapped } from "./types";
import getTransform from "./get-transform";

export default function transform(
  from: Wrapped,
  to: Wrapped,
  options: Options
) {
  const { duration } = options;

  const startTime = Date.now();

  // add transition

  const tick = () => {
    const elapsed = Date.now() - startTime;

    // this ratio increases gradually from 0 to 1
    // and finishes when it reaches to 1
    const ratio = elapsed / duration;

    // opacity
    from.clone.style.opacity = (1 - ratio).toString();
    to.clone.style.opacity = ratio.toString();

    const dx = to.cx - from.cx;
    const dy = to.cy - from.cy;

    // transform
    from.clone.style.transform = getTransform(dx, dy, ratio);
    to.clone.style.transform = getTransform(-dx, -dy, 1 - ratio);

    if (elapsed > duration) {
      // remove clones
      from.clone.parentNode.removeChild(from.clone);
      to.clone.parentNode.removeChild(to.clone);

      to.originalNode.style.visibility = "visible";
      return;
    }

    requestAnimationFrame(tick);
  };

  tick();
}
