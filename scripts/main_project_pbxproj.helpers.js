"use strict";

var fs = require("fs");
var helpers = require("./helpers");

var IOS_DIR = "platforms/ios";
var PROJECT_FILE_NAME = "project.pbxproj";
var MAIN_DIRECTORY_FILTER_SUFFIX = ".xcodeproj";

exports.getFilePath = function () {
  var iosChidrenDirectories = fs.readdirSync(IOS_DIR) || [];
  var possibleDirectories = iosChidrenDirectories.filter((dirName) =>
    dirName.endsWith(MAIN_DIRECTORY_FILTER_SUFFIX)
  );
  if (possibleDirectories.length === 0) {
    throw new Error(`${IOS_DIR} didn't contain the main project's directory!`);
  }
  if (possibleDirectories.length !== 1) {
    throw new Error(`${IOS_DIR} contains more than one ${MAIN_DIRECTORY_FILTER_SUFFIX} directory!`);
  }
  var filePath = `${IOS_DIR}/${possibleDirectories[0]}/${PROJECT_FILE_NAME}`;
  if (helpers.fileExists(filePath)) {
    return filePath;
  }
  throw new Error(`${filePath} not found!`);
};

exports.extractValueFromProjectFile = function (fileText, key) {
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
};
