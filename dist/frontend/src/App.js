"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./styles/output.css");
require("./styles/tailwind.css");
const react_router_dom_1 = require("react-router-dom");
const HomePage_1 = __importDefault(require("./pages/HomePage"));
const FlagMemoryPage_1 = __importDefault(require("./pages/FlagMemoryPage"));
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(HomePage_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/flag-memory", element: (0, jsx_runtime_1.jsx)(FlagMemoryPage_1.default, {}) })] }) }));
}
exports.default = App;
