import wrap from "./wrapper";
import { Options } from "./types";
import change from "./change";

export default function morph(
  from: HTMLElement,
  to: HTMLElement,
  options?: Options
) {
  // step-1: create clones
  const fromWrapper = wrap(from);
  const toWrapper = wrap(to);

  // step-2: add transforms
  return change(fromWrapper, toWrapper, options);
}
