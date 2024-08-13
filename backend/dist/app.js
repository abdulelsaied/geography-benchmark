"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const country_1 = __importDefault(require("./routes/country"));
const scores_1 = __importDefault(require("./routes/scores"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use("/country", country_1.default);
app.use("/scores", scores_1.default);
app.set("view engine", "ejs");
app.listen(port, () => {
    console.log("listening on port 8000");
});
exports.default = app;
