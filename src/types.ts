import wrap from "./wrapper";
import easings from "./easings";

export type Options = {
  duration: number;
  easing?: keyof typeof easings;
};

export type Wrapped = ReturnType<typeof wrap>;

export type PromiseHandler = (value?: unknown) => void;
