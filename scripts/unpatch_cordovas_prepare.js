#!/usr/bin/env node
"use strict";

var fs = require("fs");
var helpers = require("./helpers");

var REPLACE = [
  ["!origPkg.startsWith(pkg)", "origPkg !== pkg"],
  ["origPkg.startsWith(pkg)", "origPkg === pkg"]
];
var FILES = [
  "platforms/ios/cordova/lib/prepare.js",
  "node_modules/cordova-ios/bin/templates/scripts/cordova/lib/prepare.js"
];

function main() {
  try {
    for (var f = FILES.length - 1; f > -1; f--) {
      if (helpers.fileExists(FILES[f])) {
        helpers.replaceContentInFile(FILES[f], REPLACE);
      }
    }
  } catch (e) {
    helpers.logError(e);
  }
}

main();
