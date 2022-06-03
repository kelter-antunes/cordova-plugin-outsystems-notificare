'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var NotificareDeviceModule = /** @class */ (function () {
    function NotificareDeviceModule() {
    }
    NotificareDeviceModule.prototype.getCurrentDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'getCurrentDevice', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.getPreferredLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'getPreferredLanguage', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.updatePreferredLanguage = function (language) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'updatePreferredLanguage', [language]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.register = function (userId, userName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'register', [userId, userName]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.fetchTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchTags', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.addTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'addTag', [tag]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.addTags = function (tags) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'addTags', [tags]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.removeTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'removeTag', [tag]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.removeTags = function (tags) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'removeTags', [tags]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.clearTags = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'clearTags', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.fetchDoNotDisturb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchDoNotDisturb', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.updateDoNotDisturb = function (dnd) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'updateDoNotDisturb', [dnd]);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.clearDoNotDisturb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'clearDoNotDisturb', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.fetchUserData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchUserData', []);
                    })];
            });
        });
    };
    NotificareDeviceModule.prototype.updateUserData = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'updateUserData', [userData]);
                    })];
            });
        });
    };
    return NotificareDeviceModule;
}());

var NotificareEventsModule = /** @class */ (function () {
    function NotificareEventsModule() {
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NotificareEventsModule.prototype.logCustom = function (event, data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'logCustom', [event, data]);
                    })];
            });
        });
    };
    return NotificareEventsModule;
}());

var EVENT_SUBSCRIPTIONS = [];
function bootstrap() {
    document.addEventListener('deviceready', function onDeviceReady() {
        cordova.exec(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function onSuccess(event) {
            EVENT_SUBSCRIPTIONS.filter(function (sub) { return sub.event === event.name; }).forEach(function (sub) { return sub.callback(event.data); });
        }, function onFailure(error) {
            console.error('Failed to register event listener.', error);
        }, 'Notificare', 'registerListener', []);
    }, false);
}
var EventSubscription = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function EventSubscription(event, callback) {
        this.event = event;
        this.callback = callback;
        EVENT_SUBSCRIPTIONS.push(this);
    }
    EventSubscription.prototype.remove = function () {
        var index = EVENT_SUBSCRIPTIONS.indexOf(this);
        if (index >= 0) {
            EVENT_SUBSCRIPTIONS.splice(index, 1);
        }
    };
    return EventSubscription;
}());

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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'isConfigured', []);
                    })];
            });
        });
    };
    Notificare.isReady = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'isReady', []);
                    })];
            });
        });
    };
    Notificare.launch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'launch', []);
                    })];
            });
        });
    };
    Notificare.unlaunch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'unlaunch', []);
                    })];
            });
        });
    };
    Notificare.getApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'getApplication', []);
                    })];
            });
        });
    };
    Notificare.fetchApplication = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'fetchApplication', []);
                    })];
            });
        });
    };
    Notificare.fetchNotification = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return new EventSubscription('ready', callback);
    };
    Notificare.onUnlaunched = function (callback) {
        return new EventSubscription('unlaunched', callback);
    };
    Notificare.onDeviceRegistered = function (callback) {
        return new EventSubscription('device_registered', callback);
    };
    Notificare.onUrlOpened = function (callback) {
        return new EventSubscription('url_opened', callback);
    };
    Notificare.deviceModule = new NotificareDeviceModule();
    Notificare.eventsModule = new NotificareEventsModule();
    return Notificare;
}());

bootstrap();

module.exports = Notificare;
//# sourceMappingURL=notificare.bundle.js.map
