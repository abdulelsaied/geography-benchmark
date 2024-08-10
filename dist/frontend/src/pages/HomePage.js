"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const fa_1 = require("react-icons/fa");
const fa6_1 = require("react-icons/fa6");
const MenuCard_1 = __importDefault(require("../components/MenuCard"));
const Layout_1 = __importDefault(require("../components/Layout"));
const HomePage = () => {
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-12", children: [(0, jsx_runtime_1.jsx)(MenuCard_1.default, { title: "Flag Memory", subtitle: "Remember as many flags as possible", icon: (0, jsx_runtime_1.jsx)(fa_1.FaFlag, {}), to: "/flag-memory" }), (0, jsx_runtime_1.jsx)(MenuCard_1.default, { title: "More or Less", subtitle: "Choose the country with the higher statistic", icon: (0, jsx_runtime_1.jsx)(fa6_1.FaArrowDownUpAcrossLine, {}), to: "/more-or-less" })] }) }));
};
exports.default = HomePage;
