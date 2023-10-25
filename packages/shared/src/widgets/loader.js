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
exports.Loader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
function Loader(_a) {
    var isHtml = _a.isHtml;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "grid place-items-center py-24" }, { children: (0, jsx_runtime_1.jsxs)("svg", __assign({ className: "".concat(isHtml ? "text-pink-500" : "text-blue-500", " mr-3 -ml-1 h-8 w-8 animate-spin"), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" }, { children: [(0, jsx_runtime_1.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }, void 0)] }), void 0) }), void 0));
}
exports.Loader = Loader;
exports["default"] = Loader;
