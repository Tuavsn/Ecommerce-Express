import express, { Request, Response } from 'express'
import userRouter from './user.route';
import blogRouter from './blog.route';

const api = express.Router();

api.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Welcome to Blog API'})
});

api.use('/users', userRouter)
    .use('/blogs', blogRouter);

export default api;