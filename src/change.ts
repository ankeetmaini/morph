import { Options, Wrapped } from "./types";
import getTransform from "./get-transform";

export default function transform(
  from: Wrapped,
  to: Wrapped,
  options: Options
) {
  const { duration } = options;

  const startTime = Date.now();

  const tick = () => {
    const elapsed = Date.now() - startTime;

    // this ratio increases gradually from 0 to 1
    // and finishes when it reaches to 1
    const ratio = elapsed / duration;

    // opacity to make first element fade and second element show
    // gradually as time passes
    from.clone.style.opacity = (1 - ratio).toString();
    to.clone.style.opacity = ratio.toString();

    const dx = to.cx - from.cx;
    const dy = to.cy - from.cy;

    // subtracting 1 from below scale ratios
    // as we'll add in the get-transform function
    // otherwise if the ratio is 0, they start from 0
    // which we don't want, elements should start at their
    // size and then grow or shrink
    const fromSX = to.width / from.width - 1;
    const fromSY = to.height / from.height - 1;
    const toSX = from.width / to.width - 1;
    const toSY = from.height / to.height - 1;

    // transform
    from.clone.style.transform = getTransform(dx, dy, fromSX, fromSY, ratio);
    to.clone.style.transform = getTransform(-dx, -dy, toSX, toSY, 1 - ratio);

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
