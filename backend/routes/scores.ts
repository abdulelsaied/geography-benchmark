import express from "express";
import scoresController from "../controllers/scoresController"

const router = express.Router();

router.post("/", scoresController.addScore);

export default router;
