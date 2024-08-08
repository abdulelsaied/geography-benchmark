"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const MenuButton_1 = __importDefault(require("../components/MenuButton"));
const HomePage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Geography Benchmark" }), (0, jsx_runtime_1.jsx)(MenuButton_1.default, { text: "Flag Memory Game", buttonFunction: () => window.location.href = '/flag-memory' })] }));
};
exports.default = HomePage;
