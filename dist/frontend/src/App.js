"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles/output.css");
const Message_1 = __importDefault(require("./components/Message"));
function App() {
    return (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Message_1.default, {}) });
}
exports.default = App;
