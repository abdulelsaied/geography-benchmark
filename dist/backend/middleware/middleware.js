"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Middleware function to exclude 'seenCountries' from req.session
const excludeSeenCountries = (req, res, next) => {
    if (res && res.locals.seenCountries) {
        delete res.locals.seenCountries;
    }
    next();
};
exports.default = excludeSeenCountries;
