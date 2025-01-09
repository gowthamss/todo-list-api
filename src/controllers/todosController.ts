import { Request, Response } from 'express';

export const getToDos = (req: Request, res: Response) => {
    res.status(200).json({ message: 'GET todo' });
};

export const createToDo = (req: Request, res: Response) => {
    res.status(200).json({ message: 'POST todos' });
};

export const updateToDo = (req: Request, res: Response) => {
    res.status(200).json({ message: 'PUT todos' });
};

export const deleteToDo = (req: Request, res: Response) => {
    res.status(200).json({ message: 'DELETE todos' });
};