"use strict";

var fs = require("fs");

exports.fileExists = function (path) {
  try {
    return fs.statSync(path).isFile();
  } catch (e) {
    return false;
  }
};

exports.insertText = function (text, position, textToInsert) {
  return text.slice(0, position) + textToInsert + text.slice(position);
};

exports.substringIncludes = function (text, substring, minIndex, maxIndex) {
  return text.substring(minIndex, maxIndex).includes(substring);
};

exports.directoryExists = function (path) {
  try {
    return fs.statSync(path).isDirectory();
  } catch (e) {
    return false;
  }
};

function logAs(message, obj, color) {
  if (typeof message === "object") {
    console.error("\x1b[1m\x1b[" + color + "m%O\x1b[0m", message);
    return;
  }
  if (obj) {
    console.error("\x1b[1m\x1b[" + color + "m%s\n%O\x1b[0m", message, obj);
  } else {
    console.error("\x1b[1m\x1b[" + color + "m%s\x1b[0m", message);
  }
}

exports.logError = function (message, obj) {
  logAs(message, obj, "31");
};

exports.logWarning = function (message, obj) {
  logAs(message, obj, "33");
};

exports.replaceContentInFile = function (filePath, fromToArray) {
  var currentContent = "" + fs.readFileSync(filePath);
  var newContent = currentContent;
  for (var r = fromToArray.length - 1; r > -1; r--) {
    if (!newContent.includes(fromToArray[r][0]) && !newContent.includes(fromToArray[r][1])) {
      throw new Error(`Unable to patch ${filePath}`);
    }
    newContent = newContent.replace(fromToArray[r][0], fromToArray[r][1]);
  }
  if (newContent === currentContent) {
    return;
  }
  fs.writeFileSync(filePath, newContent);
};
