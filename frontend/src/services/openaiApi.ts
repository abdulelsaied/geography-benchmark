const OPENAI_API_BASE_URL = "https://geography-benchmark.vercel.app/ai/generateHint";

const openaiApi = {
    generateHint: async (country: string, difficulty: number) => {
        try {
            const response = await fetch(OPENAI_API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "country": country,
                    "difficulty": difficulty
                }),
            });

            if (!response.ok) {
                throw new Error(`status: ${response.status}`);
            }

            const data = await response.json();
            return data.hint; 
        } catch (error) {
            console.log("Error fetching hint:", error);
            return '';
        }
    }
};

export default openaiApi;