import { resolveAny } from "dns";
import { Request, Response } from "express";

const Thread = require('../model/thread.model');

interface Thread {
    category: string,
    title: string,
    description: string,
    img?: string,
    number: number
}

export const getThreads = async (req: Request, res: Response) => {
    const { category } = req.body;
    if (!category) return res.status(400).send('Missing body');

    const threads = await Thread.findAll({ where: { category: category }});
    res.status(200).send(threads);
}

export const createThread = async (req: Request, res: Response) => {
    const threadData = req.body as Thread;
    if(!(threadData instanceof Thread)) return res.status(400).send('Missing body');

    await Thread.create({
        category: threadData.category,
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