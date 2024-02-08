"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const flag_memory_1 = __importDefault(require("./routes/flag-memory"));
const more_or_less_1 = __importDefault(require("./routes/more-or-less"));
const port = 8000;
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    res.send("HELLO FROM EXPRESS + TS!!!");
});
app.use("/flag-memory", flag_memory_1.default);
app.use("/more-or-less", more_or_less_1.default);
app.listen(port, () => {
    console.log("listening on port 8000");
});
