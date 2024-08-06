import { Request, Response } from "express"
import countryModel from '../models/countryModel'

const countryController = {
    getCountryCode: async (req: Request, res: Response): Promise<void> => {
        try {
            const countryCode = await countryModel.getCountryCode();
            res.json(countryCode) 
        } catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory/start");
        }
    },

    getCountry: async (req: Request, res: Response): Promise<void> => {
        try {
            const country = await countryModel.getCountry();
            res.json(country) 
        } catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory/start");
        }
    },
}

export default countryController;