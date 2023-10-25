"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.EventDispatcher = void 0;
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.listenersMap = {};
    }
    EventDispatcher.prototype.subscribe = function (eventType, listener) {
        var _a, _b;
        var _this = this;
        var listenersOfEvent = this.listenersMap[eventType];
        if (!listenersOfEvent) {
            this.listenersMap = __assign(__assign({}, this.listenersMap), (_a = {}, _a[eventType] = [listener], _a));
        }
        else {
            this.listenersMap = __assign(__assign({}, this.listenersMap), (_b = {}, _b[eventType] = __spreadArray(__spreadArray([], listenersOfEvent, true), [listener], false), _b));
        }
        return function () {
            var _a;
            var _b;
            _this.listenersMap = __assign(__assign({}, _this.listenersMap), (_a = {}, _a[eventType] = (_b = _this.listenersMap[eventType]) === null || _b === void 0 ? void 0 : _b.filter(function (l) { return l !== listener; }), _a));
        };
    };
    EventDispatcher.prototype.dispatch = function (type, event) {
        var listenersOfEvent = this.listenersMap[type];
        listenersOfEvent === null || listenersOfEvent === void 0 ? void 0 : listenersOfEvent.forEach(function (listener) { return listener(event); });
    };
    return EventDispatcher;
}());
exports.EventDispatcher = EventDispatcher;
exports["default"] = EventDispatcher;
