const jsdom = require("jsdom");

// Add 'jsdom' to global object under 'kitTddJsLfurzewaddockComGithub' namespace
const kitTddJsLfurzewaddockComGithub = global.kitTddJsLfurzewaddockComGithub || {};
kitTddJsLfurzewaddockComGithub.jsdom = jsdom;
global.kitTddJsLfurzewaddockComGithub = kitTddJsLfurzewaddockComGithub;

require("./app.bundle.js"); // eslint-disable-line import/no-unresolved

