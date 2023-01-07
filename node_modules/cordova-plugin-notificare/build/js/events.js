Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubscription = exports.bootstrap = void 0;
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
exports.bootstrap = bootstrap;
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
exports.EventSubscription = EventSubscription;
//# sourceMappingURL=events.js.map