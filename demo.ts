import morph from "./src/index";

const one = document.getElementById("one");
const two = document.getElementById("two");
morph(one, two, {
  duration: 5000,
  easing: "easeOut"
});
