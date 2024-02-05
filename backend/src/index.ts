import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());

const port = 5000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({message: 'Working fine'});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
