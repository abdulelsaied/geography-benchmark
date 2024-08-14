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
            res.status(200).json({ message: 'Added score to database!' });
        } catch (error) {
            console.log(error);
        }
    }, 

    getScores: async (req: Request, res: Response): Promise<void> => {
        try {
            const game_title = req.query.game_title as string;
            if (!game_title) {
                res.status(400).json({ error: 'Game title is required' });
                return;
            }
            const scores = await scoresModel.getScores(game_title);
            res.json(scores);
        } catch(error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        } 
    }
}

export default scoresController;