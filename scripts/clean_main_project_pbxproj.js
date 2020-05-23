#!/usr/bin/env node
"use strict";

var fs = require("fs");
var CONFIGURATION_DATA = require("./configure_main_project_pbxproj.data").DATA;
var getFilePath = require("./main_project_pbxproj.helpers").getFilePath;
var extractValueFromProjectFile = require("./main_project_pbxproj.helpers")
  .extractValueFromProjectFile;
var helpers = require("./helpers");

var IOS_DIR = "platforms/ios";

function getApplicationConfiguration(fileText) {
  return {
    mainProductBundleIdentifier: extractValueFromProjectFile(fileText, "PRODUCT_BUNDLE_IDENTIFIER")
  };
}

function main() {
  var appConfig;
  try {
    var filePath = getFilePath();
    var fileText = "" + fs.readFileSync(filePath);
    var originalFileText = fileText;
    appConfig = getApplicationConfiguration(fileText);
    for (var i = CONFIGURATION_DATA.length - 1; i > -1; i--) {
      fileText = fileText.replace(CONFIGURATION_DATA[i](appConfig).text, "");
    }
    if (originalFileText !== fileText) {
      fs.writeFileSync(filePath, fileText);
    }
  } catch (e) {
    e.extras = e.extras || {};
    e.extras.appConfig = appConfig;
    helpers.logError(e);
  }
}

if (helpers.directoryExists(IOS_DIR)) {
  main();
}
