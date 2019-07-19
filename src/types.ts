import wrap from "./wrapper";

export type Options = {
  duration: number;
};

export type Wrapped = ReturnType<typeof wrap>;
