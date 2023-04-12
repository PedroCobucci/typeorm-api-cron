import { Request, Response } from 'express'
import { Notificacao } from '../entities/notificacao'
import { NotificacaoRepository } from '../repositories/notificacao.repository'

export class NotificacaoController{
    async cadastrar(req: Request, res: Response){

        try{

            const NovaNotificacao = new Notificacao()
            Object.assign(NovaNotificacao, req.body)

            if( await NotificacaoRepository.findOneBy({data_notificacao: NovaNotificacao.data_notificacao}) ){
                return res.status(409).json({message: 'Já existe uma notificação para este dia'})
            }


            const notificacao = NotificacaoRepository.create(NovaNotificacao)
    
            NotificacaoRepository.save(notificacao)
    
            return res.status(200).json({message: `cadastrado nova notificacao!`})

        }catch (error){
            return res.status(500).json({message: `internal server error`})
        }

        

    }
    async execute(req: Request, res: Response){
        return res.status(200).json({message: "oi"})
    }
}