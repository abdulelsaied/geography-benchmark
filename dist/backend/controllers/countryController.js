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
const countryController = {
    getCountryCode: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const countryCode = yield countryModel_1.default.getCountryCode();
            res.json(countryCode);
        }
        catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory/start");
        }
    }),
    getCountry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const country = yield countryModel_1.default.getCountry();
            res.json(country);
        }
        catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory/start");
        }
    }),
};
exports.default = countryController;
