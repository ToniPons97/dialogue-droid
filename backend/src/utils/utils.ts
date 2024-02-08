import { Response } from "express";
import OpenAI from "openai";
import * as dotenv from 'dotenv';
import { ChatCompletionMessage } from "openai/resources";

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.warn('Warning: OPENAI_API_KEY is not defined.');
    process.exit(1)
}

const openai = new OpenAI({
    apiKey: openaiApiKey
});

const completionResponse = async (prompt: string, res: Response): Promise<string | undefined> => {
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            n: 1
        });

        const message = response.choices[0].message.content;
    


        return message || '';
    } catch (e) {
        console.error('Error streaming completion:', e);
        res.status(500).json({
            status: 'failed',
            message: 'An error occurred while processing the request'
        });
    }
}

export { completionResponse };