import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { completionResponse } from '../utils/utils';


const prisma = new PrismaClient();

// Get all chats
const getAllChats = async (req: Request, res: Response) => {
    try {
        const data = await prisma.chat.findMany();
        res.status(200).json({
            status: 'success',
            results: data.length,
            chats: data
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: '500: Internal server error.' });
    }
}

// Create new chat
const createChat = async (req: Request, res: Response) => {
    try {
        const prompt: string = req.body.prompt;
        const response = await completionResponse(prompt, res);

        if (response) {
            const messagePair = await prisma.chat.create({
                data: {
                    userPrompt: prompt,
                    response
                }
            });


            res.status(200).json({
                ...messagePair
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }
}

export { getAllChats, createChat };