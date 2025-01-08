"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aiController_1 = __importDefault(require("../controllers/aiController"));
const router = express_1.default.Router();
router.post("/generateHint", aiController_1.default.generateHint);
exports.default = router;
