import express from "express";
import flagMemoryController from "../controllers/flagMemoryController"

const router = express.Router();

router.get("/", flagMemoryController.showHomepage);
router.post("/", flagMemoryController.checkGuess);

export default router;

