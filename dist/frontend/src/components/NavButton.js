"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NavButton = ({ text, icon }) => {
    return ((0, jsx_runtime_1.jsxs)("button", { className: "flex flex-col border-[3px] border-r-[6px] border-b-[6px] border-black bg-[#E6D3A3] rounded-xl p-2 m-2 transition-transform duration-200 ease-in-out hover:bg-[#d4a738] hover:translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-inner", children: [icon && (0, jsx_runtime_1.jsx)("span", { className: "text-xl mb-2", children: icon }), (0, jsx_runtime_1.jsx)("h1", { className: "text-lg font-bold mb-1", children: text })] }));
};
exports.default = NavButton;
