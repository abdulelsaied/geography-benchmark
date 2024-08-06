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
exports.startGame = exports.handleGuess = void 0;
const countryApi_1 = __importDefault(require("../services/countryApi"));
const handleGuess = (guess) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const country = yield countryApi_1.default.fetchRandomCountry();
        console.log(country);
    }
    catch (error) {
        console.log(error);
    }
});
exports.handleGuess = handleGuess;
const startGame = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const countryCode = yield countryApi_1.default.fetchRandomCountryCode();
        console.log(countryCode);
    }
    catch (error) {
        console.log(error);
    }
});
exports.startGame = startGame;
