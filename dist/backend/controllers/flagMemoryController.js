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
const countryModel_1 = __importDefault(require("../models/countryModel"));
const flagMemoryController = {
    startGame: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const startingCountry = yield countryModel_1.default.getCountryCode();
            req.session.seenCountries = [];
            req.session.lastCountry = startingCountry;
            req.session.lives = 3;
            req.session.score = 0;
            req.session.highScore = 0;
            res.json(req.session);
        }
        catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory/start");
        }
    }),
    submitGuess: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const guess = req.body.guess;
            if (!req.session.lastCountry || !guess || !["seen", "new"].includes(guess) || req.session.lives <= 0) {
                res.send("invalid post req");
                return;
            }
            let hasSeen = req.session.seenCountries.includes(req.session.lastCountry);
            if ((hasSeen && guess === "seen") || (!hasSeen && guess == "new")) {
                req.session.score += 1;
            }
            else {
                req.session.lives -= 1;
                if (req.session.lives === 0) {
                    req.session.highScore = Math.max(req.session.highScore, req.session.score);
                    res.send("you lost!");
                    return;
                }
            }
            req.session.seenCountries.push(req.session.lastCountry);
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                req.session.lastCountry = yield countryModel_1.default.getCountryCode();
            }
            else {
                const randomIndex = Math.floor(Math.random() * req.session.seenCountries.length);
                req.session.lastCountry = req.session.seenCountries[randomIndex];
            }
            res.json(req.session);
            return;
        }
        catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory");
            return;
        }
    })
};
exports.default = flagMemoryController;
