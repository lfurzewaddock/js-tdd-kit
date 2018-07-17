"use strict";

import * as greeting from "./components/greeting";
import { cube } from "./modules/math";

function render(globalObj) {
  const element = greeting.getElement(globalObj.document);
  const mutateEl = greeting.component(element, html);
  greeting.default(mutateEl, globalObj.document);
}

const cubed = cube(5);
const html = greeting.generateHtml`Hello js-tdd-kit TEST!, 5 cubed is equal to ${cubed}`;
if (typeof window !== "undefined") {
  render(window);
}
