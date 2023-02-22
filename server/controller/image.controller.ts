import { Request, Response } from "express"

export const uploadFile = (req: Request, res: Response) => {
    return res.status(200).send('File uploaded successfully');
}