const easings = {
  linear: (x: number) => x,
  easeIn: (x: number) => Math.pow(x, 3),
  easeOut: (x: number) => Math.pow(x - 1, 3) + 1,
  easeInOut: (x: number) => {
    if ((x /= 0.5) < 1) {
      return 0.5 * Math.pow(x, 3);
    }
    return 0.5 * (Math.pow(x - 2, 3) + 2);
  }
};

export default easings;
