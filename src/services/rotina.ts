import cron from 'node-cron'
import { sendTemplate } from './sendMessage';
import { ClienteRepository } from '../repositories/cliente.repository';



cron.schedule('* * * * *', async () => {

    const clientes = await ClienteRepository.find({where: {status: true}})

    console.log(clientes)

    clientes.forEach(element => {
        sendTemplate(Number(element.telefone))    
    });
     
});