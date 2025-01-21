import { TodosRequest } from '../models/requestModels.js';
import { registerUser, verifyToken } from '../utils/user/user.js';
import { Request, RequestHandler, Response } from 'express';

export const login = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'POST login' });
};

export const register = async (req: Request, res: Response) => {
    registerUser(req, res);
};

export const getUser = async (req: Request, res: Response) => {
    res.status(200).json({ message: 'GET user' });
}