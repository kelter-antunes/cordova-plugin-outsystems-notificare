Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var notificare_1 = require("./notificare");
var events_1 = require("./events");
(0, tslib_1.__exportStar)(require("./models/notificare-application"), exports);
(0, tslib_1.__exportStar)(require("./models/notificare-device"), exports);
(0, tslib_1.__exportStar)(require("./models/notificare-do-not-disturb"), exports);
(0, tslib_1.__exportStar)(require("./models/notificare-notification"), exports);
exports.default = notificare_1.Notificare;
(0, events_1.bootstrap)();
//# sourceMappingURL=index.js.map