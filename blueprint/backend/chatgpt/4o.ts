import OpenAI from 'openai';
import dotenv from "dotenv";



export async function requestGpt4oChat(question : string) {
    try {
        dotenv.config();

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const chatCompletion = await openai.chat.completions.create({
            messages: [{role: 'user', content: question}],
            model: 'gpt-4o-2024-05-13',
        });

        return chatCompletion.choices[0].message.content;
    } catch (err) {
        console.error(err);
        return null;
    }
}