import wrap from "./wrapper";
import { Options } from "./types";
import transform from "./morph";

export default function morph(
  from: HTMLElement,
  to: HTMLElement,
  options?: Options
) {
  // step-1: create clones
  const fromWrapper = wrap(from);
  const toWrapper = wrap(to);

  // step-2: insert clones
  from.parentNode.insertBefore(fromWrapper.clone, from.nextSibling);
  to.parentNode.insertBefore(toWrapper.clone, from.nextSibling);

  // step-3: hide originals
  from.style.visibility = "hidden";
  to.style.visibility = "hidden";

  // step-4: add transforms
  transform(fromWrapper, toWrapper, options);
}
