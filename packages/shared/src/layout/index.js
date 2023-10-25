"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.RequireAuth = exports.onEvent = exports.onTokens = exports.Main = void 0;
var main_1 = require("./main");
__createBinding(exports, main_1, "Main");
var layoutServices_1 = require("./services/layoutServices");
__createBinding(exports, layoutServices_1, "onTokens");
__createBinding(exports, layoutServices_1, "onEvent");
var requireAuth_1 = require("./requireAuth");
exports.RequireAuth = requireAuth_1["default"];
