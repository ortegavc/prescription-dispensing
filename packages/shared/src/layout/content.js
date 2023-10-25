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
exports.CenterMain = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var SidebarContext_1 = require("./SidebarContext");
var Content = function (_a) {
    var children = _a.children;
    var expanded = (0, SidebarContext_1.useSidebar)().expanded;
    var margin = expanded ? 'ml-48' : 'ml-16';
    var width = expanded ? 'w-10/12' : 'w-11/12';
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "flex min-h-screen" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ className: "".concat(margin, " bg-gray-200 h-screen fixed ").concat(width, " transition-all duration-200 ease-in-out overflow-auto") }, { children: children }), void 0) }), void 0));
};
var CenterMain = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-200 mt-20" }, { children: children }), void 0));
};
exports.CenterMain = CenterMain;
exports["default"] = Content;
