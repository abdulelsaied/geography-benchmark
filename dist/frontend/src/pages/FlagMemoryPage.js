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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const GameButton_1 = __importDefault(require("../components/GameButton"));
const StatusBar_1 = __importDefault(require("../components/StatusBar"));
const Flag_1 = __importDefault(require("../components/Flag"));
const Layout_1 = __importDefault(require("../components/Layout"));
const countryApi_1 = __importDefault(require("../services/countryApi"));
const FlagMemoryPage = () => {
    const [gameStarted, setGameStarted] = (0, react_1.useState)(false);
    const [lives, setLives] = (0, react_1.useState)(3);
    const [seenCountries, setSeenCountries] = (0, react_1.useState)(new Set());
    const [currentCountryCode, setCurrentCountryCode] = (0, react_1.useState)('eg');
    const [previousCountryCode, setPreviousCountryCode] = (0, react_1.useState)("");
    const [score, setScore] = (0, react_1.useState)(0);
    const [showTitle, setShowTitle] = (0, react_1.useState)(true);
    const [showFinalScore, setShowFinalScore] = (0, react_1.useState)(false);
    const [finalScore, setFinalScore] = (0, react_1.useState)(0);
    const startGame = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const startingCountryCode = yield countryApi_1.default.fetchRandomCountryCode();
            setCurrentCountryCode(startingCountryCode);
            setPreviousCountryCode(startingCountryCode);
            setGameStarted(true);
            setLives(3);
            setSeenCountries(new Set());
            setShowTitle(false);
            setShowFinalScore(false);
        }
        catch (error) {
            console.log(error);
        }
    });
    const handleGuess = (guess) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const isGuessCorrect = (guess === 'seen' && seenCountries.has(currentCountryCode)) ||
                (guess === 'new' && !seenCountries.has(currentCountryCode));
            if (isGuessCorrect) {
                if (!seenCountries.has(currentCountryCode)) {
                    seenCountries.add(currentCountryCode);
                    setSeenCountries(new Set(seenCountries));
                }
                setScore(score + 1);
            }
            else {
                if (lives - 1 === 0) {
                    setLives(lives - 1);
                    setFinalScore(score);
                    setShowFinalScore(true);
                    setScore(0);
                    setGameStarted(false);
                    return;
                }
                setLives(lives - 1);
            }
            let nextCountryCode;
            do {
                nextCountryCode =
                    Math.random() < 0.5 && seenCountries.size > 0
                        ? Array.from(seenCountries)[Math.floor(Math.random() * seenCountries.size)]
                        : yield countryApi_1.default.fetchRandomCountryCode();
            } while (nextCountryCode === currentCountryCode);
            setPreviousCountryCode(currentCountryCode);
            setCurrentCountryCode(nextCountryCode);
        }
        catch (error) {
            console.log(error);
        }
    });
    return ((0, jsx_runtime_1.jsx)(Layout_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col gap-4 border-4 border-black bg-white rounded-3xl p-8 pb-4 text-center", children: [showTitle && !showFinalScore ?
                    ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl font-bold", children: "Flag Memory" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl", children: "remember as many flags as possible." })] })) : showFinalScore ?
                    ((0, jsx_runtime_1.jsxs)("h1", { className: "text-2xl font-bold", children: ["Final Score: ", finalScore] })) :
                    ((0, jsx_runtime_1.jsx)(StatusBar_1.default, { lives: lives, score: score })), (0, jsx_runtime_1.jsx)(Flag_1.default, { countryCode: currentCountryCode }), (0, jsx_runtime_1.jsx)("div", { id: "game-buttons", className: "flex items-center justify-center gap-6", children: !gameStarted ? ((0, jsx_runtime_1.jsx)(GameButton_1.default, { text: "start", buttonFunction: () => startGame() })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GameButton_1.default, { text: "new", buttonFunction: () => handleGuess('new') }), (0, jsx_runtime_1.jsx)(GameButton_1.default, { text: "seen", buttonFunction: () => handleGuess('seen') })] })) })] }) }));
};
exports.default = FlagMemoryPage;
