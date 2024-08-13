export const saveHighScore = (game: string, score: number) => {
    const currentHighScore = localStorage.getItem(`${game}-high-score`);
    if (currentHighScore === null || score > parseInt(currentHighScore, 10)) {
      localStorage.setItem(`${game}-high-score`, score.toString());
    }
  };
  
export const getHighScore = (game: string) => {
    const highScore = localStorage.getItem(`${game}-high-score`);
    return highScore ? parseInt(highScore) : 0;
};

