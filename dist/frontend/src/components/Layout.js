"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("./Header"));
const Footer_1 = __importDefault(require("./Footer"));
const Layout = ({ children }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-screen flex flex-col", children: [(0, jsx_runtime_1.jsx)("header", { className: "flex justify-between h-[15vh] mt-[5vh] w-4/5 mx-auto border-b-2 border-white", children: (0, jsx_runtime_1.jsx)(Header_1.default, {}) }), (0, jsx_runtime_1.jsx)("main", { className: "flex-1 w-4/5 mx-auto flex flex-col justify-center items-center gap-12 border-b-2 border-white overflow-auto", children: children }), (0, jsx_runtime_1.jsx)("footer", { className: "h-[10vh] w-4/5 mx-auto border-t-2 border-white", children: (0, jsx_runtime_1.jsx)(Footer_1.default, {}) })] }));
};
exports.default = Layout;
