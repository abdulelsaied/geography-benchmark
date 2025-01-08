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
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: "",
});
const aiController = {
    generateHint: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const { country, difficulty } = req.body;
            const userMessage = {
                role: "user",
                content: `${country}, difficulty ${difficulty}`,
            };
            const completion = yield openai.chat.completions.create({
                model: "ft:gpt-3.5-turbo-0125:personal:versus-ai:AnCiMtPG",
                messages: [userMessage],
            });
            const choice = completion.choices[0];
            if (!((_a = choice === null || choice === void 0 ? void 0 : choice.message) === null || _a === void 0 ? void 0 : _a.content)) {
                throw new Error("No valid response from OpenAI.");
            }
            const hint = choice.message.content.trim();
            console.log(hint);
            res.json({ hint });
        }
        catch (error) {
            console.log(error);
            res.status(500).send("Error handling POST request for generating hint");
        }
    }),
};
exports.default = aiController;
