"use strict";

function getCointainerItemProxy() {
  var text = `
		3E7143F724607362001886A3 /* PBXContainerItemProxy */ = {
			isa = PBXContainerItemProxy;
			containerPortal = 29B97313FDCFA39411CA2CEA /* Project object */;
			proxyType = 1;
			remoteGlobalIDString = 3E7143F024607362001886A3;
			remoteInfo = FCMNotificationService;
        };`;
  var prependAt = `
/* End PBXContainerItemProxy section */`;
  return { text, prependAt };
}

function getCopyFilesBuildPhase() {
  var text = `
/* Begin PBXCopyFilesBuildPhase section */
		3E7143FA24607362001886A3 /* Embed App Extensions */ = {
			isa = PBXCopyFilesBuildPhase;
			buildActionMask = 2147483647;
			dstPath = "";
			dstSubfolderSpec = 13;
			files = (
				3E7143F924607362001886A3 /* FCMNotificationService.appex in Embed App Extensions */,
			);
			name = "Embed App Extensions";
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXCopyFilesBuildPhase section */
`;
  var prependAt = `
/* Begin PBXFileReference section */`;
  return { text, prependAt };
}

function getNotificationServiceImplementation() {
  var text = `
  		3E7143F124607362001886A3 /* FCMNotificationService.appex */ = {isa = PBXFileReference; explicitFileType = "wrapper.app-extension"; includeInIndex = 0; path = FCMNotificationService.appex; sourceTree = BUILT_PRODUCTS_DIR; };
  		3E7143F324607362001886A3 /* NotificationService.h */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.c.h; path = NotificationService.h; sourceTree = "<group>"; };
 		3E7143F424607362001886A3 /* NotificationService.m */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.c.objc; path = NotificationService.m; sourceTree = "<group>"; };
 		3E7143F624607362001886A3 /* Info.plist */ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = "<group>"; };`;
  var prependAt = `
/* End PBXFileReference section */`;
  return { text, prependAt };
}

function getFrameworksBuildPhase() {
  var text = `
		3E7143EE24607362001886A3 /* Frameworks */ = {
			isa = PBXFrameworksBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			runOnlyForDeploymentPostprocessing = 0;
        };`;
  var prependAt = `
/* End PBXFrameworksBuildPhase section */`;
  return { text, prependAt };
}
function getProductGroupChildren() {
  var text = `
				3E7143F124607362001886A3 /* FCMNotificationService.appex */,`;
  var prependAt = `
			);
			name = Products;
			sourceTree = "<group>";`;
  var within = [["/* Begin PBXGroup section */", "/* End PBXGroup section */"]];
  return { text, prependAt, within };
}

function customTemplateGroupChildren() {
  var text = `
				3E7143F224607362001886A3 /* FCMNotificationService */,`;
  var prependAt = `
			);
			name = CustomTemplate;
			sourceTree = "<group>";`;
  var within = [["/* Begin PBXGroup section */", "/* End PBXGroup section */"]];
  return { text, prependAt, within };
}

function notificationServiceGroup() {
  var text = `
		3E7143F224607362001886A3 /* FCMNotificationService */ = {
			isa = PBXGroup;
			children = (
				3E7143F324607362001886A3 /* NotificationService.h */,
				3E7143F424607362001886A3 /* NotificationService.m */,
				3E7143F624607362001886A3 /* Info.plist */,
			);
			path = FCMNotificationService;
			sourceTree = "<group>";
		};`;
  var prependAt = `
/* End PBXGroup section */`;
  return { text, prependAt };
}

function nativeTargetBuildPhases() {
  var text = `
                3E7143FA24607362001886A3 /* Embed App Extensions */,`;
  var prependAt = `
			);`;
  var within = [["/* Copy www directory */", "/* End PBXNativeTarget section */"]];
  return { text, prependAt, within };
}

function nativeTargetDependencies() {
  var text = `
				3E7143F824607362001886A3 /* PBXTargetDependency */,`;
  var prependAt = `
			);`;
  var within = [
    ["/* Copy www directory */", "/* End PBXNativeTarget section */"],
    ["dependencies = (", ");"]
  ];
  return { text, prependAt, within };
}

function notificationServiceNativeTarget() {
  var text = `
		3E7143F024607362001886A3 /* FCMNotificationService */ = {
			isa = PBXNativeTarget;
			buildConfigurationList = 3E7143FE24607362001886A3 /* Build configuration list for PBXNativeTarget "FCMNotificationService" */;
			buildPhases = (
				3E7143ED24607362001886A3 /* Sources */,
				3E7143EE24607362001886A3 /* Frameworks */,
				3E7143EF24607362001886A3 /* Resources */,
			);
			buildRules = (
			);
			dependencies = (
			);
			name = FCMNotificationService;
			productName = FCMNotificationService;
			productReference = 3E7143F124607362001886A3 /* FCMNotificationService.appex */;
			productType = "com.apple.product-type.app-extension";
		};`;
  var prependAt = `
/* End PBXNativeTarget section */`;
  return { text, prependAt };
}

function appExtensionProvisioning() {
  var text = `
					3E7143F024607362001886A3 = {
						CreatedOnToolsVersion = 11.3.1;
						ProvisioningStyle = Automatic;
					};`;
  var prependAt = `
				};`;
  var within = [
    ["/* Begin PBXProject section */", "/* End PBXProject section */"],
    ["				TargetAttributes = {", "\n				};"]
  ];
  return { text, prependAt, within };
}

function projectTarget() {
  var text = `
				3E7143F024607362001886A3 /* FCMNotificationService */,`;
  var prependAt = `
			);`;
  var within = [
    ["/* Begin PBXProject section */", "/* End PBXProject section */"],
    ["\n			targets = (", "			);"]
  ];
  return { text, prependAt, within };
}

function resourceBuildPhase() {
  var text = `
		3E7143EF24607362001886A3 /* Resources */ = {
			isa = PBXResourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			runOnlyForDeploymentPostprocessing = 0;
		};`;
  var prependAt = `
/* End PBXResourcesBuildPhase section */`;
  return { text, prependAt };
}

function sourceBuildPhase() {
  var text = `
		3E7143ED24607362001886A3 /* Sources */ = {
			isa = PBXSourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
				3E7143F524607362001886A3 /* NotificationService.m in Sources */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};`;
  var prependAt = `
/* End PBXSourcesBuildPhase section */`;
  return { text, prependAt };
}

function targetDependency() {
  var text = `
		3E7143F824607362001886A3 /* PBXTargetDependency */ = {
			isa = PBXTargetDependency;
			target = 3E7143F024607362001886A3 /* FCMNotificationService */;
			targetProxy = 3E7143F724607362001886A3 /* PBXContainerItemProxy */;
		};`;
  var prependAt = `
/* End PBXTargetDependency section */`;
  return { text, prependAt };
}

function buildConfiguration(appConfig) {
  var text = `
		3E7143FB24607362001886A3 /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_ANALYZER_NONNULL = YES;
				CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION = YES_AGGRESSIVE;
				CLANG_CXX_LANGUAGE_STANDARD = "gnu++14";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_OBJC_WEAK = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_UNGUARDED_AVAILABILITY = YES_AGGRESSIVE;
				CODE_SIGN_STYLE = Automatic;
				COPY_PHASE_STRIP = NO;
				DEBUG_INFORMATION_FORMAT = dwarf;
				GCC_C_LANGUAGE_STANDARD = gnu11;
				GCC_DYNAMIC_NO_PIC = NO;
				GCC_OPTIMIZATION_LEVEL = 0;
				GCC_PREPROCESSOR_DEFINITIONS = (
					"DEBUG=1",
					"$(inherited)",
				);
				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
				INFOPLIST_FILE = FCMNotificationService/Info.plist;
				IPHONEOS_DEPLOYMENT_TARGET = 13.2;
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @executable_path/../../Frameworks";
				MTL_ENABLE_DEBUG_INFO = INCLUDE_SOURCE;
				MTL_FAST_MATH = YES;
				PRODUCT_BUNDLE_IDENTIFIER = ${appConfig.mainProductBundleIdentifier}.FCMNotificationService;
				PRODUCT_NAME = "$(TARGET_NAME)";
				SKIP_INSTALL = YES;
				TARGETED_DEVICE_FAMILY = "1,2";
			};
			name = Debug;
		};
		3E7143FC24607362001886A3 /* Release */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_ANALYZER_NONNULL = YES;
				CLANG_ANALYZER_NUMBER_OBJECT_CONVERSION = YES_AGGRESSIVE;
				CLANG_CXX_LANGUAGE_STANDARD = "gnu++14";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_OBJC_WEAK = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_UNGUARDED_AVAILABILITY = YES_AGGRESSIVE;
				CODE_SIGN_STYLE = Automatic;
				COPY_PHASE_STRIP = NO;
				DEBUG_INFORMATION_FORMAT = "dwarf-with-dsym";
				ENABLE_NS_ASSERTIONS = NO;
				GCC_C_LANGUAGE_STANDARD = gnu11;
				GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
				GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
				INFOPLIST_FILE = FCMNotificationService/Info.plist;
				IPHONEOS_DEPLOYMENT_TARGET = 13.2;
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @executable_path/../../Frameworks";
				MTL_ENABLE_DEBUG_INFO = NO;
				MTL_FAST_MATH = YES;
				PRODUCT_BUNDLE_IDENTIFIER = ${appConfig.mainProductBundleIdentifier}.FCMNotificationService;
				PRODUCT_NAME = "$(TARGET_NAME)";
				SKIP_INSTALL = YES;
				TARGETED_DEVICE_FAMILY = "1,2";
				VALIDATE_PRODUCT = YES;
			};
			name = Release;
		};`;
  var prependAt = `
/* End XCBuildConfiguration section */`;
  return { text, prependAt };
}

function configurationList() {
  var text = `
		3E7143FE24607362001886A3 /* Build configuration list for PBXNativeTarget "FCMNotificationService" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				3E7143FB24607362001886A3 /* Debug */,
				3E7143FC24607362001886A3 /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};`;
  var prependAt = `
/* End XCConfigurationList section */`;
  return { text, prependAt };
}

exports.DATA = [
  getCointainerItemProxy,
  getCopyFilesBuildPhase,
  getNotificationServiceImplementation,
  getFrameworksBuildPhase,
  getProductGroupChildren,
  customTemplateGroupChildren,
  notificationServiceGroup,
  nativeTargetBuildPhases,
  nativeTargetDependencies,
  notificationServiceNativeTarget,
  appExtensionProvisioning,
  projectTarget,
  resourceBuildPhase,
  sourceBuildPhase,
  targetDependency,
  buildConfiguration,
  configurationList
];
