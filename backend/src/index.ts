import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { createChat, getAllChats } from './controllers/chat';



const app = express();


app.use(express.json());
app.use(cors());



const port = 5000;
const basePath = '/api/v1';

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Working fine!' });
});

// Chat endpoints

// Get all chats
app.get(`${basePath}/chat`, getAllChats);

// Create new chat
app.post(`${basePath}/chat`, createChat);



app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
