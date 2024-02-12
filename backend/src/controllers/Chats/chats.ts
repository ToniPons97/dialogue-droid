import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { completionResponse } from '../../utils/utils';

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
            res.status(400).json({
                status: ResponseStatus.ERROR,
                message: 'Invalid request.'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: ResponseStatus.ERROR,
            message: 'Internal server error.'
        });
    }
}

// Delete chat by id
const deleteChatById = async (req: Request, res: Response) => {
    try {
        // Get id from request body.
        const id: string = req.body.id;

        // Checking if id is not falsy.
        if (id) {
            // Attempting to retrieve chat with valid id.
            const chat = await prisma.chat.findUnique({
                where: { id }
            });

            // If no chat was found return 404.
            if (!chat) {
                res.status(404).json({
                    status: ResponseStatus.ERROR,
                    message: 'Not found.'
                });
            } else {
                // Delete chat using id.
                const deletedChat = await prisma.chat.delete({
                    where: { id }
                });

                // Return deleted chat with status code 200.
                res.status(200).json({
                    status: ResponseStatus.SUCCESS,
                    data: deletedChat
                });
            }

            // Return status code 400 (bad request).
        } else {
            res.status(400).json({
                status: ResponseStatus.ERROR,
                message: 'Invalid request.'
            });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({
            status: ResponseStatus.ERROR,
            message: 'Internal server error.'
        });
    }
}

// Update favorite attribute by id
const updateFavoriteById = async (req: Request, res: Response) => {
    try {
        // Get values from request body.
        const id: string = req.body.data.id;
        const value: boolean = req.body.data.favorite;

        // Checking if id is not falsy 
        // and explicitly checking if value is a string and equal to "true" or "true".
        if (!id ) {
            console.error({ id, value });
            res.status(400).json({
                status: ResponseStatus.ERROR,
                message: 'Bad request.'
            });
        } else {
            // Attempt to find Find chat with valid id.
            const chat = await prisma.chat.findUnique({
                where: { id }
            });

            // If there's a chat with that id
            // then update favorite and then return the new chat.
            if (chat) {
                const chat = await prisma.chat.update({
                    where: { id },
                    data: { favorite: value}
                });
                res.status(200).json({ status: ResponseStatus.SUCCESS, data: chat });
            } else {
                console.error('No data found with provided id.');
                res.status(404).json({
                    status: ResponseStatus.ERROR,
                    message: 'Chat not found.'
                });
            }
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({
            status: ResponseStatus.ERROR,
            message: 'Internal server error.'
        });
    }
}

export { getAllChats, createChat, deleteChatById, updateFavoriteById };