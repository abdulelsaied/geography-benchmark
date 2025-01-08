import express from "express";
import aiController from "../controllers/aiController"

const router = express.Router();

router.post("/generateHint", aiController.generateHint);

export default router;
