import express, { Request, Response } from 'express';
import cors from 'cors';
import { 
    createChat, 
    deleteChatById, 
    getAllChats, 
    updateFavoriteById 
} from './controllers/Chats/chats';
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

// Chats Endpoint

// Get all chats
app.get(`${basePath}/chats`, getAllChats);

// Create new chat
app.post(`${basePath}/chats/create`, createChat);

// Delete chat by id
app.delete(`${basePath}/chats/delete`, deleteChatById);

// Update favorite attribute
app.put(`${basePath}/chats/favorite`, updateFavoriteById);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});