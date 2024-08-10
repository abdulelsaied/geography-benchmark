"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const NavButton = ({ text, icon }) => {
    return ((0, jsx_runtime_1.jsxs)("button", { className: "\n        flex flex-col items-center justify-center \n        border-[3px] border-r-[6px] border-b-[6px] border-black \n        bg-[#E6D3A3] rounded-xl p-2 m-2 \n        transition-transform duration-200 ease-in-out \n        hover:bg-[#d4a738] hover:translate-y-1 hover:translate-x-1 \n        active:translate-y-0 active:translate-x-0 active:shadow-inner\n      ", children: [icon && (0, jsx_runtime_1.jsx)("span", { className: "text-4xl", children: icon }), " ", (0, jsx_runtime_1.jsx)("h1", { className: "text-lg font-bold mt-auto", children: text }), " "] }));
};
exports.default = NavButton;
