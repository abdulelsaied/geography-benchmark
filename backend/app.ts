import express from "express";

import indexRouter from "./routes/index";
import flagMemoryRouter from "./routes/flagMemory";
import moreOrLessRouter from "./routes/moreOrLess";

const port = 8000;

const app = express();

app.use(express.json());

app.use("/", indexRouter);
app.use("/flag-memory", flagMemoryRouter);
app.use("/more-or-less", moreOrLessRouter);

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("listening on port 8000");
});

export default app;