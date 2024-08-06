import express from "express";
import cors from "cors";
import countryRouter from "./routes/country";

const port = 8000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}))

app.use("/country", countryRouter);

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("listening on port 8000");
});

export default app;