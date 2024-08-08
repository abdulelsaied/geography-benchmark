"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Flag = ({ countryCode }) => {
    const [flagUrl, setflagUrl] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setflagUrl(`../src/assets/flag-images/${countryCode}.webp`);
            }
            catch (err) {
                throw new Error(err.message);
            }
        }))();
        return () => {
            if (flagUrl) {
                URL.revokeObjectURL(flagUrl);
            }
        };
    }, [countryCode]);
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: flagUrl, alt: `Flag of ${countryCode}` }) }));
};
exports.default = Flag;
