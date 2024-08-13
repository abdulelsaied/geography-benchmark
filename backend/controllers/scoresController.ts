import { Request, Response } from "express"
import scoresModel from '../models/scoresModel'

const scoresController = {
    addScore: async (req: Request, res: Response): Promise<void> => {
        try {
            const { game_title, score } = req.body;
            if (!game_title || !score) {
                console.log('Game title and score are required.');
            }
            await scoresModel.addScore(game_title, score);
        } catch (error) {
            console.log(error);
        }
    }
}

export default scoresController;