Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificareEventsModule = void 0;
var tslib_1 = require("tslib");
var NotificareEventsModule = /** @class */ (function () {
    function NotificareEventsModule() {
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    NotificareEventsModule.prototype.logCustom = function (event, data) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cordova.exec(resolve, reject, 'Notificare', 'logCustom', [event, data]);
                    })];
            });
        });
    };
    return NotificareEventsModule;
}());
exports.NotificareEventsModule = NotificareEventsModule;
//# sourceMappingURL=notificare-events-module.js.map