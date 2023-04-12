import { Request, Response } from 'express'

export class WebHookController{
    async execute(req: Request, res: Response){
        return res.status(200).json({message: "oi"})
    }

    async execute2(req: Request, res: Response){
        return res.status(200).json({message: "oi"})
    }
}