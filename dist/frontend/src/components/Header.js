"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header = ({ title, subtitle, icon, backgroundColor }) => {
    return ((0, jsx_runtime_1.jsx)("header", { className: "h-1/4", style: { backgroundColor: backgroundColor }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center h-full text-center", children: [icon && (0, jsx_runtime_1.jsx)("span", { className: "text-3xl mb-2", children: icon }), (0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold mb-1", children: title }), subtitle && (0, jsx_runtime_1.jsx)("h2", { className: "text-lg text-gray-600", children: subtitle })] }) }));
};
exports.default = Header;
