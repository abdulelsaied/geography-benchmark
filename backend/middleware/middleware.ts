import { Request, Response, NextFunction } from "express";

// Middleware function to exclude 'seenCountries' from req.session
const excludeSeenCountries = (req: Request, res: Response, next: NextFunction) => {
    if (res && res.locals.seenCountries) {
        delete res.locals.seenCountries;
    }
    next();
};

export default excludeSeenCountries