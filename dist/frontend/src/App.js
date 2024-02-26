"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles/output.css");
const GameButtons_1 = __importDefault(require("./components/GameButtons"));
const GameButtonFunctions_1 = require("./utils/GameButtonFunctions");
function App() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(GameButtons_1.default, { text: "seen", buttonFunction: () => (0, GameButtonFunctions_1.handleGuess)("seen") }), (0, jsx_runtime_1.jsx)(GameButtons_1.default, { text: "new", buttonFunction: () => (0, GameButtonFunctions_1.handleGuess)("new") })] });
}
exports.default = App;
