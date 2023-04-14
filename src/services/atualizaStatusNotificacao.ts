import { Equal } from "typeorm";
import { NotificacaoRepository } from "../repositories/notificacao.repository";


export async function updateStatusNotificacao(idNotificacao: Number){
    const notificacaoUpdate = await NotificacaoRepository.findOneBy({id: Equal(idNotificacao)})

    if(notificacaoUpdate){

        notificacaoUpdate.status = 'notificado'
        notificacaoUpdate.data_contato = new Date()
        await NotificacaoRepository.save(notificacaoUpdate)

    }

   
}
