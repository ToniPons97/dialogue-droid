import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { completionResponse } from '../utils/utils';

const prisma = new PrismaClient();

enum ResponseStatus {
    SUCCESS = 'success',
    ERROR = 'error'
}

// Get all chats
const getAllChats = async (req: Request, res: Response) => {
    try {
        const data = await prisma.chat.findMany();
        res.status(200).json({
            status: ResponseStatus.SUCCESS,
            data
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ status: ResponseStatus.ERROR, message: 'Internal server error.' });
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
                status: ResponseStatus.SUCCESS,
                data: messagePair
            });
        } else {
            res.status(400).json({ status: ResponseStatus.ERROR, message: 'Invalid request.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: ResponseStatus.ERROR, message: 'Internal server error.' });
    }
}

// Delete chat by id
const deleteChatById = async (req: Request, res: Response) => {
    try {
        const id: string = req.body.id;

        if (id) {
            const chat = await prisma.chat.findUnique({
                where: {
                    id
                }
            });

            if (chat) {
                const deletedChat = await prisma.chat.delete({
                    where: {
                        id
                    }
                });
                res.status(200).json({ status: ResponseStatus.SUCCESS, data: deletedChat });
            } else {
                res.status(404).json({ status: ResponseStatus.ERROR, message: 'Not found.' });
            }
        } else {
            res.status(400).json({ status: ResponseStatus.ERROR, message: 'Invalid request.' });
        }

    } catch (e) {
        console.error(e);
        res.status(500).json({ status: ResponseStatus.ERROR, message: 'Internal server error.' });
    }
}

export { getAllChats, createChat, deleteChatById };