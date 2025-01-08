import { Request, Response } from "express"
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: "",
  });

const aiController = {
    generateHint: async (req: Request, res: Response): Promise<void> => {
        try {
            const { country, difficulty } = req.body;
            const userMessage = {
                role: "user" as const,
                content: `${country}, difficulty ${difficulty}`,
            };
            const completion = await openai.chat.completions.create({
                model: "ft:gpt-3.5-turbo-0125:personal:versus-ai:AnCiMtPG",
                messages: [userMessage],
            });
            const choice = completion.choices[0];
            if (!choice?.message?.content) {
                throw new Error("No valid response from OpenAI.");
            }
            const hint =  choice.message.content.trim();
            console.log(hint);
            res.json({hint});
        } catch (error) {
            console.log(error);
            res.status(500).send("Error handling POST request for generating hint");
        }
    },
}

export default aiController;