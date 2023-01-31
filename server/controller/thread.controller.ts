import { resolveAny } from "dns";
import { Request, Response } from "express";

const Thread = require('../model/thread.model');
const Reply = require('../model/reply.model');

interface Thread {
    board: string,
    title: string,
    description: string,
    img?: string,
    number: number
}

export const getThread = async (req: Request, res: Response) => {
    const { threadId } = req.body;
    if(!threadId) return res.status(400).send('Missing body');

    const thread = await Thread.findOne({ where: { id: threadId }, include: [Reply]});
    return res.status(200).send(thread);
}

export const getThreads = async (req: Request, res: Response) => {
    const { board } = req.body;
    if (!board) return res.status(400).send('Missing body');

    const threads = await Thread.findAll({ where: { board: board }});
    res.status(200).send(threads);
}

export const createThread = async (req: Request, res: Response) => {
    const threadData = req.body as Thread;  
    if(!threadData) return res.status(400).send('Missing body');

    await Thread.create({
        board: threadData.board,
        title: threadData.title,
        description: threadData.description,
        img: threadData.img,
        number: threadData.number
    });

    await Thread.sync();
    return res.status(200).send('Thread created successfully');
}

export const deleteThread = async (req: Request, res: Response) => {
    const { threadId } = req.body;
    if(!threadId) return res.status(400).send('Missing body');

    await Thread.destroy({ where: { id: threadId }});
    return res.status(200).send('Thread deleted successfully');
}