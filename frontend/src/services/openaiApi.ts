import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_API_KEY,
});

export type HintResponse = {
  hint: string;
};

export async function getHint(country: string, difficulty: number): Promise<HintResponse> {
  const systemMessage = {
    role: "system" as const,
    content: `You are generating clues about countries for users to guess. Hints vary in difficulty on a scale from 1 to 4. Hints should focus on aspects like geography, culture, history, landmarks. Difficult clues should be more obscure, avoiding well-known features or cultural references while focusing on unique and less obvious aspects of the country. Return JSON, key being "hint".`,
  };

  const userMessage = {
    role: "user" as const,
    content: `${country}, difficulty ${difficulty}`,
  };

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [systemMessage, userMessage],
    });

    const choice = completion.choices[0];
    if (!choice?.message?.content) {
      throw new Error("No valid response from OpenAI.");
    }

    const message = choice.message.content.trim();
    const hint: HintResponse = JSON.parse(message);

    return hint;
  } catch (error) {
    console.error("Error while fetching hint:", error);
    throw new Error("Failed to get a hint.");
  }
}
