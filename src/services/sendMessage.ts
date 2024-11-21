import cron from 'node-cron'
import axios from 'axios'
import { updateStatusNotificacao } from './atualizaStatusNotificacao';

export function sendTemplate(
    numero: Number, 
    empresa: string, 
    descricaoNotificacao: string, 
    atributoCliente: string, 
    dataNoticacao: string, 
    idNotificacao: Number,
    token: string) 
    {

    const url = 'https://graph.facebook.com/v16.0/112916698335944/messages';
    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
    const data = {
        "messaging_product": "whatsapp",
        "to": `${numero}`,
        "type": "template",
        "template":
        {
            "name": "mensagem_teste_vacina",
            "language": { "code": "pt_BR" },
            "components": [
                {
                    "type": "body",
                    "parameters": [
                        {
                            "type": "text",
                            "text": `${empresa}`
                        },
                        {
                            "type": "text",
                            "text": `${descricaoNotificacao}`
                        },
                        {
                            "type": "text",
                            "text": `${atributoCliente}`
                        },
                        {
                            "type": "text",
                            "text": `${dataNoticacao}`
                        }
                    ]
                }
            ]
        }
    };

    axios.post(url, data, { headers })
        .then(response => {
            console.log('enviado')
            updateStatusNotificacao(idNotificacao)
        })
        .catch(error => {
            console.error('Erro');
        });
}

export async function sendCustom(numero: number, texto: string) {
    console.log('Enviando mensagem');

    const url = 'https://graph.facebook.com/v16.0/112916698335944/messages';

    const data = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": `${numero}`,
        "type": "text",
        "text": {
            "body": `${texto}`
        }
    };
    const headers = { Authorization: 'Bearer token', 'Content-Type': 'application/json' };

    axios.post(url, data, { headers })
        .then(response => {
            console.log('Enviada!');
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}



