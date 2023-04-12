import axios from "axios";

const url = 'https://graph.facebook.com/v16.0/112916698335944/messages';
const data = { 
    "messaging_product": "whatsapp", 
    "to": "5531971414707", 
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
                        "text": "Nucleovet"
                    },
                                        {
                        "type": "text",
                        "text": "Vacina Vanguard-v10"
                    },
                                        {
                        "type": "text",
                        "text": "Mel"
                    },
                                        {
                        "type": "text",
                        "text": "27/01/2023"
                    }
                ]
            }
        ]
    } 
};
const headers = { Authorization: 'Bearer EAARWSWZCNeasBAMTkkypCeOVznJdy7LZB9I8ZBzG4onzJQysrVLK7AJA2880C609ZBlxKZCZCVrZBWTrEktoQwhxnzkGwQ0tBJB4M7ZCxwXxUkxIAF26FZA1o5GlwDsE20DETAjkiYs6wwYxCvODveEJXIsy6ZA4tiMGGE7boVF4h7wmxemyrOYchT8Fc7bcAIA1pjM8g47Wcf0wZDZD', 'Content-Type': 'application/json' };

axios.post(url, data, { headers })
.then(response => {
    console.log('Resposta:', response.data);
})
.catch(error => {
    console.error('Erro:', error);
});