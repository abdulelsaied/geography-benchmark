"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StatusBar = ({ lives, score }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("p", { children: ["lives: ", lives] }), (0, jsx_runtime_1.jsxs)("p", { children: ["score: ", score] })] }));
};
exports.default = StatusBar;
