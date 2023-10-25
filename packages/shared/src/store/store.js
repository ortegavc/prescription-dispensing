"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var shared_1 = require("@store/slices/shared");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        action: shared_1.actionSlice.reducer
    },
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware({ serializableCheck: false }); }
});
