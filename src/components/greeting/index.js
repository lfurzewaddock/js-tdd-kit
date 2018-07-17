"use strict";

export function component(el, htmlString) {
  if (typeof el.innerHTML === "undefined") {
    throw new Error("DOM element required!");
  }
  el.innerHTML = htmlString;
  return el;
}

export function generateHtml(htmlStrings, calcResult) {
  const htmlString = htmlStrings[0] + calcResult;
  const htmlString2 = htmlString.split([","]);
  return htmlString2.join(",\n\n");
}

export function getElement(doc) {
  if (typeof doc.body === "undefined") {
    throw new Error("Web Browser DOM required to run this code!!!");
  }
  const document = doc;
  return document.createElement("div");
}

export default function render(element, doc) {
  if (typeof doc.body === "undefined") {
    throw new Error("Web Browser DOM required to run this code!!!");
  }
  const document = doc;
  document.body.appendChild(element);
}
