Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificare = void 0;
var tslib_1 = require("tslib");
var notificare_device_module_1 = require("./notificare-device-module");
var notificare_events_module_1 = require("./notificare-events-module");
var events_1 = require("./events");
var Notificare = /** @class */ (function () {
    function Notificare() {
    }
    //
    // Modules
    //
    Notificare.device = function () {
        return this.deviceModule;
    };
    Notificare.events = function () {
        return this.eventsModule;
    };
    //
    // Methods
    //
    Notificare.isConfigured = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'isConfigured', []);
                    })];
            });
        });
    };
    Notificare.isReady = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'isReady', []);
                    })];
            });
        });
    };
    Notificare.launch = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'launch', []);
                    })];
            });
        });
    };
    Notificare.unlaunch = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'unlaunch', []);
                    })];
            });
        });
    };
    Notificare.getApplication = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'getApplication', []);
                    })];
            });
        });
    };
    Notificare.fetchApplication = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchApplication', []);
                    })];
            });
        });
    };
    Notificare.fetchNotification = function (id) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchNotification', [id]);
                    })];
            });
        });
    };
    //
    // Events
    //
    Notificare.onReady = function (callback) {
        return new events_1.EventSubscription('ready', callback);
    };
    Notificare.onUnlaunched = function (callback) {
        return new events_1.EventSubscription('unlaunched', callback);
    };
    Notificare.onDeviceRegistered = function (callback) {
        return new events_1.EventSubscription('device_registered', callback);
    };
    Notificare.onUrlOpened = function (callback) {
        return new events_1.EventSubscription('url_opened', callback);
    };
    Notificare.deviceModule = new notificare_device_module_1.NotificareDeviceModule();
    Notificare.eventsModule = new notificare_events_module_1.NotificareEventsModule();
    return Notificare;
}());
exports.Notificare = Notificare;
//# sourceMappingURL=notificare.js.map