import pool from '../database';

class ScoresModel {

    async addScore(game_title: string, score: number) {
        try {
            const result = await pool.query('INSERT INTO scores (game_title, score) VALUES ($1, $2)', [game_title, score]);
            console.log(result);
        } catch(error) {
            console.log(error);
        } 
    }
}

const scoresModel = new ScoresModel();

export default scoresModel;