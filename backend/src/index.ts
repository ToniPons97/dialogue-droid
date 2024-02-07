import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import cors from 'cors';

dotenv.config();
const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.warn('Warning: OPENAI_API_KEY is not defined.');
}

const app = express();

app.use(express.json());
app.use(cors());

const openai = new OpenAI({
    apiKey: openaiApiKey
});

const port = 5000;
const basePath = '/api/v1';


// Endpoints
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
