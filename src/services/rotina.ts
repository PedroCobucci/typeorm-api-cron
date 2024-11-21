import cron from 'node-cron'
import { sendTemplate } from './sendMessage';
import { ClienteRepository } from '../repositories/cliente.repository';
import moment from 'moment'
import { Equal, Not } from 'typeorm';



cron.schedule('* * * * *', async () => {

    const clientes = await ClienteRepository
        .createQueryBuilder('cliente')
        .innerJoinAndSelect('cliente.notificacoes', 'notificacao')
        .where('cliente.status = :clienteStatus', { clienteStatus: 1 })
        .andWhere('DATE(notificacao.data_contato) <> DATE(:data)', {data: new Date()})
        .getMany();

        // .andWhere('notificacao.status = :notificacaoStatus', { notificacaoStatus: 'n enviado' })



    clientes.forEach(cliente => {

            cliente.notificacoes.forEach(notificacao => {

                const dataVencimento = moment(notificacao.data_vencimento)

                const diferenca = Number(dataVencimento.diff(moment(), 'days'))

                console.log(notificacao)

                if(diferenca == 29 || diferenca == 14 || diferenca == 0){

                    sendTemplate(
                        Number(cliente.telefone),
                        'Nucleovet',
                        notificacao.atributo_notificacao,
                        cliente.atributo_cliente,
                        moment(notificacao.data_vencimento, 'YYYY-MM-DD').format('DD/MM/YYYY'),
                        notificacao.id,
                        'token'
                    )

                }
            });
        }); 
    });

    console.log('fim')
