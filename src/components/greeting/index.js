import { cube } from "../../modules/math";

function component() {
  const element = document.createElement("div");

  element.innerHTML = ["Hello js-tdd-kit TEST!", `5 cubed is equal to ${cube(5)}`].join("\n\n");

  return element;
}

document.body.appendChild(component());
