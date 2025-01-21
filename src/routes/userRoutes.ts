import { verifyToken } from '../utils/user/user.js';
import { getUser, login, register } from '../controllers/userController.js';
import express from 'express';

const userRouter = express.Router();

userRouter.get('/', verifyToken, getUser);

userRouter.post('/register', register);
userRouter.post('/login', login);

export { userRouter };
