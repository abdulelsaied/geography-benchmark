"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const NavButton_1 = __importDefault(require("./NavButton"));
const io_1 = require("react-icons/io");
const Header = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row text-white pr-4 items-end mb-2", children: [(0, jsx_runtime_1.jsxs)("div", { className: "pl-4 pr-4 border-r-2 border-white cursor-pointer", onClick: () => navigate('/'), children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold", children: "GE\uD83C\uDF0EGRAPHY" }), (0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold", children: "BENCHMARK" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "ml-4", children: [(0, jsx_runtime_1.jsx)("h4", { className: "text-xl", children: "test your geo skills" }), (0, jsx_runtime_1.jsx)("h4", { className: "text-xl", children: "inspired by HumanBenchmark" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row", children: [(0, jsx_runtime_1.jsx)(NavButton_1.default, { text: "help", icon: (0, jsx_runtime_1.jsx)(io_1.IoMdHelp, {}) }), (0, jsx_runtime_1.jsx)(NavButton_1.default, { text: "stats", icon: (0, jsx_runtime_1.jsx)(io_1.IoIosStats, {}) }), (0, jsx_runtime_1.jsx)(NavButton_1.default, { text: "about", icon: (0, jsx_runtime_1.jsx)(io_1.IoIosInformationCircle, {}) })] })] }));
};
exports.default = Header;
