#!/usr/bin/env node
"use strict";

var fs = require("fs");
var helpers = require("./helpers");

var REPLACE = [
  ["origPkg !== pkg", "!origPkg.startsWith(pkg)"],
  ["origPkg === pkg", "origPkg.startsWith(pkg)"]
];
var FILES = [
  "platforms/ios/cordova/lib/prepare.js",
  "node_modules/cordova-ios/bin/templates/scripts/cordova/lib/prepare.js"
];

function patchFile(filePath) {
  var fileText = "" + fs.readFileSync(filePath);
  for (var r = REPLACE.length - 1; r > -1; r--) {
    if (!fileText.includes(REPLACE[r][0]) && !fileText.includes(REPLACE[r][1])) {
      throw new Error(`Unable to patch ${filePath}`);
    }
    fileText = fileText.replace(REPLACE[r][0], REPLACE[r][1]);
  }
  fs.writeFileSync(filePath, fileText);
}

function main() {
  try {
    for (var f = FILES.length - 1; f > -1; f--) {
      if (helpers.fileExists(FILES[f])) {
        patchFile(FILES[f]);
      }
    }
  } catch (e) {
    helpers.logError(e);
  }
}

main();
