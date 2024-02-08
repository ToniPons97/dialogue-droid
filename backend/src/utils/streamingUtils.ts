import { Response } from "express";
import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.warn('Warning: OPENAI_API_KEY is not defined.');
    process.exit(1)
}

const openai = new OpenAI({
    apiKey: openaiApiKey
});

const streamCompletionRes = async (prompt: string, res: Response): Promise<string | undefined> => {
    try {
        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            stream: true,
            n: 1
        });
    
        let response = '';
        for await (const part of stream) {
            const chunk = part.choices[0]?.delta.content || "";
            response += chunk;
            res.write(chunk);
        }
    
        res.end();
        return response;
    } catch (e) {
        console.error('Error streaming completion:', e);
        res.status(500).json({
            status: 'Failed',
            message: 'An error occurred while processing the request'
        });
    }
}

export { streamCompletionRes };