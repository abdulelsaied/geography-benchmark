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
const COUNTRY_API_BASE_URL = "http://localhost:8000/country";
const countryApi = {
    fetchRandomCountry: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(COUNTRY_API_BASE_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`status: ${response.status}`);
            }
            const countryData = yield response.json();
            return countryData;
        }
        catch (error) {
            console.log(error);
        }
    }),
    fetchRandomCountryCode: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch(COUNTRY_API_BASE_URL + "/country-code", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`status: ${response.status}`);
            }
            const countryCodeData = yield response.json();
            return countryCodeData.toLowerCase();
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    })
};
exports.default = countryApi;
