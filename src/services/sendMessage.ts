import cron from 'node-cron'

cron.schedule('* * * * *', () => {
    console.log('Executando tarefa agendada a cada minuto');
});