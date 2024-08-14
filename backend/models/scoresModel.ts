import pool from '../database';

class ScoresModel {

    async addScore(game_title: string, score: number) {
        try {
            await pool.query('INSERT INTO scores (game_title, score) VALUES ($1, $2)', [game_title, score]);
        } catch(error) {
            console.log(error);
        } 
    }

    async getScores(game_title: string) {
        try {
            const result = await pool.query('SELECT score FROM scores WHERE game_title = $1;', [game_title]);
            return result.rows.map(row => row.score);
        } catch(error) {
            console.log(error);
        }
    }
}

const scoresModel = new ScoresModel();

export default scoresModel;