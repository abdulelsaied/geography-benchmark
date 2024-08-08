"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MenuButtons = ({ text, buttonFunction }) => {
    return ((0, jsx_runtime_1.jsx)("button", { className: "bg-transparent hover:bg-blue-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded", onClick: () => buttonFunction(), children: text }));
};
exports.default = MenuButtons;
