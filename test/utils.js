export default function isNodeEnvironment() {
  // Check if current environment is Node
  return new Function("try {return this===global;}catch(e){return false;}")(); // eslint-disable-line no-new-func
}
