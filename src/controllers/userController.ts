import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    res.status(200).json({ message: 'POST login' });
};

export const register = (req: Request, res: Response) => {
    res.status(200).json({ message: 'POST register' });
};

export const getUser = (req: Request, res: Response) => {
    res.status(200).json({ message: 'GET user' });
}