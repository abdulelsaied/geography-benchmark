"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flagMemoryController_1 = __importDefault(require("../controllers/flagMemoryController"));
const router = express_1.default.Router();
router.post("/start", flagMemoryController_1.default.startGame);
router.post("/submit-guess", flagMemoryController_1.default.submitGuess);
exports.default = router;
