import express, { Request, Response } from 'express';
import {todosRouter} from './routes/todosRoutes.js';
import { userRouter } from './routes/userRoutes.js';
import mongoose from 'mongoose';
const app = express();
const port = 3100;

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017/Users')
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Error connecting to MongoDB: ', error.message));

app.use(express.json());

app.use('/api/v1/todos', todosRouter);
app.use('/api/v1/user', userRouter);

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log(`App is running at: ${port}`);
});