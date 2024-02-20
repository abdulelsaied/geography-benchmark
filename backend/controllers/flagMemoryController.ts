import { Request, Response } from "express"
import countryModel from '../models/countryModel'

const flagMemoryController = {
    showHomepage: async (req: Request, res: Response): Promise<void> => {
        try {
            const country = await countryModel.getCountry();
            res.send(country);
        } catch(error) {
            console.log(error);
            res.send("error making a db query");
        }
    },
    checkGuess: (req: Request, res: Response): void => {
        res.send("guessing");
    }
}

export default flagMemoryController;