import express from "express";
import flagMemoryController from "../controllers/flagMemoryController"

const router = express.Router();

router.post("/start", flagMemoryController.startGame);
router.post("/submit-guess", flagMemoryController.submitGuess);

export default router;

