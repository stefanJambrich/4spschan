import { Request, Response } from "express";

const Reply = require('../model/reply.model');

interface Reply {
    description: string,
    img: string,
    number: number,
    threadId: string
}

export const createReply = async (req: Request, res: Response) => {
    const reply = req.body as Reply;
    if(!reply) return res.status(400).send('Missing body');

    await Reply.create({
        description: reply.description,
        img: reply.img,
        number: reply.number,
        threadTableId: reply.threadId
    })

    await Reply.sync();
    return res.send(200).send('Reply created successfully');
}