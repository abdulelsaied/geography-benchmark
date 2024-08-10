"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const MenuCard = ({ title, subtitle, icon, to }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleClick = () => {
        navigate(to);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-[250px] h-[250px] m-auto bg-[#E6D3A3] rounded-xl border-[3px] border-r-[6px] border-b-[6px] border-black shadow-xl transition-transform duration-200 ease-in-out transform hover:bg-[#d4a738] hover:scale-105 hover:shadow-2xl hover:translate-y-1 hover:translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-inner cursor-pointer", onClick: handleClick, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-center h-full text-center", children: [icon && (0, jsx_runtime_1.jsx)("span", { className: "text-3xl mb-2", children: icon }), (0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold mb-1", children: title }), subtitle && (0, jsx_runtime_1.jsx)("h2", { className: "text-lg text-gray-600", children: subtitle })] }) }));
};
exports.default = MenuCard;
