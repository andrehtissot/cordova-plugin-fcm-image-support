#!/usr/bin/env node
"use strict";

var fs = require("fs");
var CONFIGURATION_DATA = require("./configure_main_project_pbxproj.data").DATA;
var getFilePath = require("./main_project_pbxproj.helpers").getFilePath;
var extractValueFromProjectFile = require("./main_project_pbxproj.helpers")
  .extractValueFromProjectFile;
var helpers = require("./helpers");

var IOS_DIR = "platforms/ios";

function getMaxIndex(text, within) {
  var maxIndex = text.length - 1;
  if (!within) {
    return maxIndex;
  }
  for (var w = 0; w < within.length; w++) {
    maxIndex = text.lastIndexOf(within[w][1], maxIndex);
    if (maxIndex === -1) {
      throw new Error("maxIndex not found");
    }
  }
  return maxIndex;
}

function getMinIndex(text, within) {
  var minIndex = 0;
  if (!within) {
    return minIndex;
  }
  for (var w = 0; w < within.length; w++) {
    minIndex = text.indexOf(within[w][0], minIndex);
    if (minIndex === -1) {
      throw new Error("minIndex not found");
    }
  }
  return minIndex;
}

function getPosition(text, substring, minIndex, maxIndex) {
  var position = text.indexOf(substring, minIndex);
  if (position === -1) {
    throw new Error("position not found");
  }
  if (maxIndex && position > maxIndex) {
    throw new Error("position found was higher than the substring limit");
  }
  return position;
}

function extractValueFromProjectFile(fileText, key) {
  var keyPosition = fileText.indexOf(key);
  if (keyPosition === -1) {
    throw new Error("keyPosition not found");
  }
  var startPosition = fileText.indexOf(" = ", keyPosition) + 3;
  if (startPosition === -1) {
    throw new Error("startPosition not found");
  }
  var endPosition = fileText.indexOf(";\n", startPosition);
  if (endPosition === -1) {
    throw new Error("endPosition not found");
  }
  return fileText.substring(startPosition, endPosition);
}

function getApplicationConfiguration(fileText) {
  return {
    mainProductBundleIdentifier: extractValueFromProjectFile(fileText, "PRODUCT_BUNDLE_IDENTIFIER")
  };
}

function processInsertable(fileText, insertable) {
  var minIndex;
  var maxIndex;
  var position;
  try {
    minIndex = getMinIndex(fileText, insertable.within);
    maxIndex = getMaxIndex(fileText, insertable.within);
    position = getPosition(fileText, insertable.prependAt, minIndex, maxIndex);
    if (helpers.substringIncludes(fileText, insertable.text, minIndex, position)) {
      return fileText;
    }
    return helpers.insertText(fileText, position, insertable.text);
  } catch (e) {
    e.extras = { insertable, minIndex, maxIndex, position };
    throw e;
  }
}

function main() {
  var appConfig;
  try {
    var filePath = getFilePath();
    var fileText = fs.readFileSync(filePath).toString();
    var originalFileText = fileText;
    appConfig = getApplicationConfiguration(fileText);
    for (var i = CONFIGURATION_DATA.length - 1; i > -1; i--) {
      fileText = processInsertable(fileText, CONFIGURATION_DATA[i](appConfig));
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
