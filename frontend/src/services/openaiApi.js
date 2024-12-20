import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
});

const completion = openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  store: true,
  messages: [
    {"role": "user", "content": "give me hints about egypt, ranging from difficult hints to easier"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));