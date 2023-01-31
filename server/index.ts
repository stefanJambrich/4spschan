import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

const db = require('./db.connector');
const threadRouter = require('./route/thread.route');
const replyRouter = require('./route/reply.route');

app.use('/api/thread', threadRouter);
app.use('/api/reply', replyRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});