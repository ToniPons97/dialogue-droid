import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const prisma = new PrismaClient();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.warn('Warning: OPENAI_API_KEY is not defined.');
}

const openai = new OpenAI({
    apiKey: openaiApiKey
});


// Get all chats
const getAllChats = async (req: Request, res: Response) => {
    try {
        const data = await prisma.chat.findMany();
        res.status(200).json({
            status: 'success',
            results: data.length,
            data: {chats: data}
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({message: '500: Internal server error.'});
    }
}

// Create new chat
const createChat = async (req: Request, res: Response) => {
    try {
        const prompt: string = req.body.prompt;

        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            stream: true,
            n: 1
        });

        let response = '';
        for await (const part of stream) {
            response += part.choices[0]?.delta.content || "";
        }

        await prisma.chat.create({
            data: {
                userPrompt: prompt,
                response
            }
        });

        res.status(201).json({
            status: 'success',
            data: {
                chat: response
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }
}


export { getAllChats, createChat };