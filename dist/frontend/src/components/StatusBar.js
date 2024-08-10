"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const StatusBar = ({ lives, score }) => {
    // Set the number of hearts to display as 3 in this case
    const maxHearts = 3;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row items-center justify-center space-x-6 p-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-bold text-2xl", children: "Lives |" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-row items-center space-x-2", children: [...Array(maxHearts)].map((_, index) => ((0, jsx_runtime_1.jsx)(fa_1.FaHeart, { className: `text-2xl ${index < lives ? 'text-black' : 'text-gray-400'}` }, index))) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("span", { className: "font-bold text-2xl", children: "Score |" }), (0, jsx_runtime_1.jsx)("span", { className: "text-2xl", children: score })] })] }));
};
exports.default = StatusBar;
