import express, { Request, Response } from 'express';
import cors from 'cors';
import { 
    createChat, 
    deleteChatById, 
    getAllChats, 
    updateFavoriteById 
} from './controllers/chat';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.EXPRESS_PORT;
const basePath = '/api/v1';

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Working fine!' });
});

// Chat Endpoint

// Get all chats
app.get(`${basePath}/chat`, getAllChats);

// Create new chat
app.post(`${basePath}/chat`, createChat);

// Delete chat by id
app.delete(`${basePath}/chat`, deleteChatById);

// Update favorite attribute
app.put(`${basePath}/chat`, updateFavoriteById);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});