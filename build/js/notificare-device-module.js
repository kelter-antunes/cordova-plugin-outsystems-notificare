Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificareDeviceModule = void 0;
var tslib_1 = require("tslib");
var NotificareDeviceModule = /** @class */ (function () {
    function NotificareDeviceModule() {
    }
    NotificareDeviceModule.prototype.getCurrentDevice = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'getCurrentDevice', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.getPreferredLanguage = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'getPreferredLanguage', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.updatePreferredLanguage = function (language) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'updatePreferredLanguage', [language]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.register = function (userId, userName) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'register', [userId, userName]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.fetchTags = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchTags', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.addTag = function (tag) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'addTag', [tag]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.addTags = function (tags) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'addTags', [tags]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.removeTag = function (tag) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'removeTag', [tag]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.removeTags = function (tags) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'removeTags', [tags]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.clearTags = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'clearTags', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.fetchDoNotDisturb = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchDoNotDisturb', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.updateDoNotDisturb = function (dnd) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'updateDoNotDisturb', [dnd]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.clearDoNotDisturb = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'clearDoNotDisturb', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.fetchUserData = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchUserData', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.updateUserData = function (userData) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'updateUserData', [userData]);
                    })];
            });
        });
    };
    return NotificareDeviceModule;
}());
exports.NotificareDeviceModule = NotificareDeviceModule;
//# sourceMappingURL=notificare-device-module.js.map