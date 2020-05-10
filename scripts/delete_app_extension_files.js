#!/usr/bin/env node
"use strict";

var fs = require("fs");
var helpers = require("./helpers");

var IOS_DIR = "platforms/ios";
var FILE_NAME_LIST = ["Info.plist", "NotificationService.h", "NotificationService.m"];
var SERVICE_DEST_DIR = `${IOS_DIR}/FCMNotificationService`;

function deleteFiles() {
  for (var f = FILE_NAME_LIST.length - 1; f > -1; f--) {
    var filePath = `${SERVICE_DEST_DIR}/${FILE_NAME_LIST[f]}`;
    try {
      fs.unlinkSync(filePath);
    } catch (error) {
      helpers.logWarning(`Error on trying to delete ${filePath}`, error);
    }
  }
}

function deleteDir() {
  try {
    fs.rmdirSync(SERVICE_DEST_DIR);
  } catch (error) {
    helpers.logWarning(`Error on trying to delete ${SERVICE_DEST_DIR}`, error);
  }
}
function main() {
  deleteFiles();
  deleteDir();
}

if (helpers.directoryExists(IOS_DIR)) {
  main();
}
