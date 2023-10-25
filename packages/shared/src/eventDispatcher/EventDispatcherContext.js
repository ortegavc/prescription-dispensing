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
exports.__esModule = true;
exports.EventDispatcherContextProvider = exports.useEventDispatcher = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var EventDispatcher_1 = require("./EventDispatcher");
var eventDispatcher = new EventDispatcher_1["default"]();
var EventDispatcherContext = (0, react_1.createContext)(eventDispatcher);
function useEventDispatcher() {
    return (0, react_1.useContext)(EventDispatcherContext);
}
exports.useEventDispatcher = useEventDispatcher;
function EventDispatcherContextProvider(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)(EventDispatcherContext.Provider, __assign({ value: eventDispatcher }, { children: children }), void 0));
}
exports.EventDispatcherContextProvider = EventDispatcherContextProvider;
