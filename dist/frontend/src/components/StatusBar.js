"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const StatusBar = ({ lives, score }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-center space-x-4 p-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-bold text-lg", children: "Lives |" }), (0, jsx_runtime_1.jsx)("span", { className: "text-lg", children: '❤️'.repeat(lives) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-bold text-lg", children: "Score |" }), (0, jsx_runtime_1.jsx)("span", { className: "text-lg", children: score })] })] }));
};
exports.default = StatusBar;
