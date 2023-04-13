import { Request, Response } from 'express'

export class kesyaController{
    async execute(req: Request, res: Response){
        return res.status(200).json({message: "oi amor, to pensando em vc. E morrendo de saudade de te ver :)"})
    }
}