import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));
app.use(express.static('public'));

const db = require('./db.connector');
const threadRouter = require('./route/thread.route');
const replyRouter = require('./route/reply.route');
const imageRouter = require('./route/image.route');

app.use('/api/thread', threadRouter);
app.use('/api/reply', replyRouter);
app.use('/api/image', imageRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});