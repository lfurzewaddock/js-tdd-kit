"use strict";

const jsdom = require("jsdom");

// Add 'jsdom' to global object under 'jsTddKitLfurzewaddockComGithub' namespace
const jsTddKitLfurzewaddockComGithub =
  global.jsTddKitLfurzewaddockComGithub || {};
jsTddKitLfurzewaddockComGithub.jsdom = jsdom;
global.jsTddKitLfurzewaddockComGithub = jsTddKitLfurzewaddockComGithub;
