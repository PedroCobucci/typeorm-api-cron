import { Request, Response } from 'express'
import path from 'path'
export class kesyaController{
    async execute(req: Request, res: Response){
        return res.sendFile(path.join(__dirname, '../../teste.html'))
        // return res.status(200).json({message: "oi amor, to pensando em vc. E morrendo de saudade de te ver :)"})
    }
}