"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = __importDefault(require("../components/Header"));
const fa_1 = require("react-icons/fa");
const Footer_1 = __importDefault(require("../components/Footer"));
const HomePage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "h-screen flex flex-col", children: [(0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Header_1.default, { title: "Geography Benchmark", subtitle: "Test your geo skills with mini games", icon: (0, jsx_runtime_1.jsx)(fa_1.FaGlobe, {}), backgroundColor: "#F6FEDB" }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-auto", children: (0, jsx_runtime_1.jsx)(Footer_1.default, {}) })] }));
};
exports.default = HomePage;
