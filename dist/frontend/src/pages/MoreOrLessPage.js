"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Layout_1 = __importDefault(require("../components/Layout"));
const MoreOrLessPage = () => {
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsx)("div", { children: "more or less" }) }));
};
exports.default = MoreOrLessPage;
