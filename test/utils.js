export default function isNodeEnvironment() {
  // Check if current environment is Node, or other CommonJS-like environment
  // Source: lodash codebase
  // https://raw.githubusercontent.com/lodash/lodash/4.17.4/dist/lodash.core.js

  if (
    typeof global === "object" &&
    global &&
    global.Object === Object &&
    global &&
    typeof exports === "object" &&
    exports &&
    !exports.nodeType &&
    exports
  ) {
    return true;
  }
  return false;
}
