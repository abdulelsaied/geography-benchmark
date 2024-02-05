import express from "express";
const port = 8000;

const app = express();

app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!");
})

app.get("/hi", (req, res) => {
    res.send("BBYYE");
})

app.listen(port, () => {
    console.log("listening on port 8000");
});