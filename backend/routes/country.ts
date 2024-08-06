import express from "express";
import countryController from "../controllers/countryController"

const router = express.Router();

router.get("/country-code", countryController.getCountryCode);
router.get("/", countryController.getCountry);

export default router;
