import { Request, Response } from 'express';

export const getToDos = (req: Request, res: Response) => {
    return { message: 'GET todos' };
};

export const createToDo = (req: Request, res: Response) => {
    return { message: 'POST todos' };
};

export const updateToDo = (req: Request, res: Response) => {
    return { message: 'PUT todos' };
};

export const deleteToDo = (req: Request, res: Response) => {
    return { message: 'DELETE todos' };
};