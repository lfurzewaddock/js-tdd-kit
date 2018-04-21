import * as greeting from "./components/greeting";
import { cube } from "./modules/math";

const cubed = cube(5);
const html = greeting.generateHtml`Hello js-tdd-kit TEST!, 5 cubed is equal to ${cubed}`;
if (typeof window.document !== "undefined") {
  const element = greeting.getElement(window.document);
  const mutateEl = greeting.component(element, html);
  greeting.default(mutateEl, window.document);
}
