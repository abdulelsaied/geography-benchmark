import express from "express";
import cors from "cors";
import aiRouter from "./routes/ai";
import scoresRouter from "./routes/scores";

const port = 8000;

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use(express.json());


app.use("/ai", aiRouter);
app.use("/scores", scoresRouter);

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("listening on port 8000");
});

export default app;