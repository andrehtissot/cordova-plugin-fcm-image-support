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

exports.logError = function (message, obj) {
  if (typeof message === "object") {
    console.error("\x1b[1m\x1b[31m%O\x1b[0m", message);
    return;
  }
  if (obj) {
    console.error("\x1b[1m\x1b[31m%s\n%O\x1b[0m", message, obj);
  } else {
    console.error("\x1b[1m\x1b[31m%s\x1b[0m", message);
  }
};
