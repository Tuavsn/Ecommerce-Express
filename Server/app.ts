import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import apiRouter from './routes/api.route';
import { connectDB } from './configs/db';
import { Logger } from './utils/logger';

const app: Express = express();

dotenv.config();

/**
 * Connect to MongoDB
 */
connectDB();

/**
 * App Configuration
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/', apiRouter);

/**
 * Server health check
 */
app.get('/', (req: Request, res: Response) => {
  res.json({ status: '>>> API is running'});
})

/**
 * Server Activation
 */
const PORT = process.env.PORT || 8080;
const welcomeMessage = `
###################################################
##                                               ##
##        WELCOME TO BLOG SYSTEM API             ##                                       
##                                               ##
###################################################
`;
app.listen(PORT, () => {
    console.warn(welcomeMessage);
    Logger.warn(`Server running on port: ${PORT}`);
})