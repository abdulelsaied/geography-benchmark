import express from "express";
import session from "express-session";

import indexRouter from "./routes/index";
import flagMemoryRouter from "./routes/flagMemory";
import moreOrLessRouter from "./routes/moreOrLess";

const port = 8000;

const app = express();

declare module 'express-session' {
    export interface SessionData {
        lives: number;
        score: number;
        highScore: number;
        seenCountries: string[];
        lastCountry: string;
    }
}

app.use(express.json());
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use("/", indexRouter);
app.use("/flag-memory", flagMemoryRouter);
app.use("/more-or-less", moreOrLessRouter);

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("listening on port 8000");
});

export default app;