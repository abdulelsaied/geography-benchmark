const SCORES_API_BASE_URL = "https://geography-benchmark.vercel.app/scores";

const scoresApi = {
    addScore: async (game_title: string, score: number) => {
        try {
            const response = await fetch(SCORES_API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ game_title, score }),
            })
    
            if (!response.ok) {
                throw new Error(`status: ${response.status}`)
            }
            console.log("added score of ${score} to game ${game_title}", score, game_title);
        }
        catch (error) {
            console.log(error);
        }
    },
    getScores: async (game_title: string) => {
        try {
            const response = await fetch(`${SCORES_API_BASE_URL}?game_title=${encodeURIComponent(game_title)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`status: ${response.status}`)
            }

            const scores: number[] = await response.json();
            return scores;      
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}

export default scoresApi;
