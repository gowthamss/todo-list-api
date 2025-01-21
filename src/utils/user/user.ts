import User from '../../models/User.js';
import { ApiErrors } from '../../exceptions/ApiErrors.js';
import { TodosRequest } from '../../models/requestModels.js';
import { BAD_REQUEST, UNAUTHORIZED } from '../errorCodes.js';
import { httpStatusCodes } from '../httpStatusCodes.js';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

interface CustomRequest extends Request {
    user?: string;
    user_type?: string;
};

export const registerUser = async (req: Request, res: Response) => {
    const registrationError = new ApiErrors();
    try {
        const { email, username, password } = req.body;
        // Find if user is existing
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            registrationError.setError('User with email already exists', BAD_REQUEST);
            return res.status(httpStatusCodes.BAD_REQUEST).json(registrationError.toApiFormat());
        }

        // If not, hash the password and store the detail in db
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a user
        const newUser = new User({
            email,
            username,
            password: hashedPassword
        });

        // Save user
        await newUser.save();
        res.status(httpStatusCodes.CREATED).json({ message: 'Registration is successful.' });
    } catch (error: any) {
        registrationError.setError(error.message, BAD_REQUEST);
        res.status(httpStatusCodes.BAD_REQUEST).json(registrationError.toApiFormat());
    }
};

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const unauthorizedError = new ApiErrors();

    // Verify if token is present, if not throw error
    let token = req.headers.authorization;
    if (!token) {
        unauthorizedError.setError('Access Denied / Unauthorized request', UNAUTHORIZED);
        return res.status(httpStatusCodes.UNAUTHORIZED).json(unauthorizedError.toApiFormat())
    }

    // if token is present, then verify the token
    token = token.split(' ')[1];
    const verifiedUser = jwt.verify(token, 'secret');
    if (!verifiedUser) {
        unauthorizedError.setError('Unauthorized request', UNAUTHORIZED);
    }
    req.user = verifiedUser;
    next()
};