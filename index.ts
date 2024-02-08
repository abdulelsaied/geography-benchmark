import express from "express";
import flagMemoryRouter from "./routes/flag-memory";
import moreOrLessRouter from "./routes/more-or-less";

const port = 8000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!");
})

app.use("/flag-memory", flagMemoryRouter);
app.use("/more-or-less", moreOrLessRouter);


app.listen(port, () => {
    console.log("listening on port 8000");
});