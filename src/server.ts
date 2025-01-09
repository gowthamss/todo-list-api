import express, { Request, Response } from 'express';
import {todosRouter} from './routes/todosRoutes.js';
import { userRouter } from './routes/userRoutes.js';
const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/todos', todosRouter);
app.use('/api/v1/user', userRouter);

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log(`App is running at: ${port}`);
});