import { Request, Response } from 'express'
import { ClienteRepository } from '../repositories/cliente.repository'
import { sendCustom } from '../services/sendMessage'

export class WebHookController {
    async execute(req: Request, res: Response) {

        try {
            for (var i = 0; req.body.messages.length; i++) {
                if (req.body.messages[i].text.body.includes("Cancelar")) {
                    var cancelarSubscricao = await ClienteRepository.findOneBy({ telefone: req.body.messages[i].from })
                    console.log(req.body.messages[i].from)
                    console.log(cancelarSubscricao)
                    if (cancelarSubscricao) {
                        cancelarSubscricao.status = false
                        await ClienteRepository.save(cancelarSubscricao)
                        return res.status(200).json({message: 'cliente cancelado'})
                    }
                } else {
                    await sendCustom(5531971414707, req.body.messages[i].text.body)
                }
            }


            return res.status(200)
        } catch (error) {
            return res.status(500).json({ message: `${req.body.messages[0].text.body}` })
        }


    }

    async execute2(req: Request, res: Response) {

        try {

            const challenge = req.query["challenge"];
            const mode = req.query["mode"];
            const token = req.query["hub.verify_token"];

            if (mode && token) {
                if (mode === "subscribe" && token === 'va1234') {

                    return res.status(200).json(challenge)
                } else {
                    return res.status(500).json({ message: 'error' })
                }
            } else {
                return res.status(500).json({ message: `${token} : ${challenge} : ${mode}` })
            }

        } catch (error) {
            return res.status(500).json({ message: 'error' })
        }
    }
}