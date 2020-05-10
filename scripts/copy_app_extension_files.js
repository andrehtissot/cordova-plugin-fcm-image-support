#!/usr/bin/env node
"use strict";

var fs = require("fs");
var helpers = require("./helpers");

var IOS_DIR = "platforms/ios";
var SERVICE_SRC_DIR = "plugins/cordova-plugin-fcm-image-support/src/ios";
var FILE_NAME_LIST = ["Info.plist", "NotificationService.h", "NotificationService.m"];
var SERVICE_DEST_DIR = `${IOS_DIR}/FCMNotificationService`;

function copyFiles() {
  for (var f = FILE_NAME_LIST.length - 1; f > -1; f--) {
    try {
      fs.copyFileSync(
        `${SERVICE_SRC_DIR}/${FILE_NAME_LIST[f]}`,
        `${SERVICE_DEST_DIR}/${FILE_NAME_LIST[f]}`
      );
    } catch (error) {
      helpers.logError(
        `Error on trying to copy ${FILE_NAME_LIST[f]} from ${SERVICE_SRC_DIR} => ${SERVICE_DEST_DIR}`,
        error
      );
    }
  }
}

function ensureDirExistance(dirPath) {
  if (!fs.existsSync(dirPath)) {
    dirPath.split("/").reduce(function (currentPath, folder) {
      currentPath += folder + "/";
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);
      }
      return currentPath;
    }, "");
  }
}
function main() {
  try {
    ensureDirExistance(SERVICE_DEST_DIR);
    copyFiles();
  } catch (error) {
    helpers.logError(error);
  }
}

if (helpers.directoryExists(IOS_DIR)) {
  main();
}
