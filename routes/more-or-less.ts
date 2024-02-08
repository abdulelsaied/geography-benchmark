import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("more or less")
})

export default router;
