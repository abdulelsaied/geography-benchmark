"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const index_1 = __importDefault(require("./routes/index"));
const flagMemory_1 = __importDefault(require("./routes/flagMemory"));
const moreOrLess_1 = __importDefault(require("./routes/moreOrLess"));
const port = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
}));
app.use((0, express_rate_limit_1.default)({
    windowMs: 24 * 60 * 60 * 10000,
    max: 5,
    message: 'You have exceeded 5 requests per day!',
    standardHeaders: true,
    legacyHeaders: false,
}));
app.use("/", index_1.default);
app.use("/flag-memory", flagMemory_1.default);
app.use("/more-or-less", moreOrLess_1.default);
app.set("view engine", "ejs");
app.listen(port, () => {
    console.log("listening on port 8000");
});
exports.default = app;
