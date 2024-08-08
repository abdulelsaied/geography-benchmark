"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header = ({ title, subtitle, icon, backgroundColor }) => {
    return ((0, jsx_runtime_1.jsx)("div", { style: { backgroundColor: backgroundColor || '#blue' }, children: (0, jsx_runtime_1.jsxs)("div", { children: [icon && (0, jsx_runtime_1.jsx)("span", { children: icon }), (0, jsx_runtime_1.jsx)("h1", { children: title }), subtitle && (0, jsx_runtime_1.jsx)("h2", { children: subtitle })] }) }));
};
exports.default = Header;
