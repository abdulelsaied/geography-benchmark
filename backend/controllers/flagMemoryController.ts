import { Request, Response } from "express"
import countryModel from '../models/countryModel'

const flagMemoryController = {
    startGame: async (req: Request, res: Response): Promise<void> => {
        try {
            const startingCountry = await countryModel.getCountryCode()
            req.session.seenCountries = []
            req.session.lastCountry = startingCountry
            req.session.lives = 3;
            req.session.score = 0;
            req.session.highScore = 0;
            res.json(req.session) 
        } catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory/start");
        }
    },

    submitGuess: async (req: Request, res: Response): Promise<void> => {
        try {
            const guess: string = req.body.guess
            if (!req.session.lastCountry || !guess || !["seen", "new"].includes(guess) || req.session.lives <= 0) {
                res.send("invalid post req");
                return
            }
            let hasSeen: boolean = req.session.seenCountries.includes(req.session.lastCountry);
            if ((hasSeen && guess === "seen") || (!hasSeen && guess == "new")){
                req.session.score += 1
            } else { 
                req.session.lives -= 1
                if (req.session.lives === 0) {
                    req.session.highScore = Math.max(req.session.highScore, req.session.score)
                    res.send("you lost!")
                    return
                }
            }
            req.session.seenCountries.push(req.session.lastCountry)
            const randomNumber: number = Math.random()
            if (randomNumber < 0.5) {
                req.session.lastCountry = await countryModel.getCountryCode()
            } else {
                const randomIndex = Math.floor(Math.random() * req.session.seenCountries.length)
                req.session.lastCountry = req.session.seenCountries[randomIndex]
            }
            res.json(req.session);
            return
        } catch (error) {
            console.log(error);
            res.send("error handling POST /flag-memory");
            return
        }
    }
}

export default flagMemoryController;