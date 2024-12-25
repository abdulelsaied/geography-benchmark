import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  store: true,
  messages: [
    {"role": "user", "content": "give me hints about egypt, ranging from difficult hints to easier"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));