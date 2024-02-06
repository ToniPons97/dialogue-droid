import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.warn('Warning: OPENAI_API_KEY is not defined.');
}

const systemMessage = {
    role: "system",
    content:
        "You are a helpful assistant. You are supposed to answer the questions asked by the users. Give funky responses.",
};

const app = express();
app.use(express.json());

const openai = new OpenAI({
    apiKey: openaiApiKey
});

const port = 5000;
const basePath = '/api/v1';


const openaiApiUrl = 'https://api.openai.com/v1/chat/completions';




app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Working fine!' });
});

app.post(`${basePath}/chat`, async (req: Request, res: Response) => {
    try {
        const userPrompt: string = req.body.userPrompt;

        const stream = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userPrompt }],
            stream: true,
            n: 1
        });

        for await (const part of stream) {
            res.write(part.choices[0]?.delta.content || "");
        }

        res.end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
