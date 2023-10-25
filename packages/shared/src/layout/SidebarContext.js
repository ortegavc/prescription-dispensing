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
exports.useSidebar = exports.SidebarProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SidebarContext = (0, react_1.createContext)(undefined);
var SidebarProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(false), expanded = _b[0], setExpanded = _b[1];
    var toggleSidebar = function () {
        setExpanded(!expanded);
    };
    var contextValue = {
        expanded: expanded,
        toggleSidebar: toggleSidebar
    };
    return ((0, jsx_runtime_1.jsx)(SidebarContext.Provider, __assign({ value: contextValue }, { children: children }), void 0));
};
exports.SidebarProvider = SidebarProvider;
var useSidebar = function () {
    var context = (0, react_1.useContext)(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};
exports.useSidebar = useSidebar;
