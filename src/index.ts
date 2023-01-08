import express from 'express';
import { Telegraf } from 'telegraf';
import 'dotenv/config';

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
    res.send('Hello world!');
});

const bot = new Telegraf(process.env.BOT_TOKEN!);

//Exporta la instancia del bot a los controladores que lo usaran
export { bot };

/*Obtiene los controladores que se usan en el bot 
(Incrusta todas las funcionalidades a la instancia local 'const bot')*/
import './events/index';

bot.start( ctx => {
    ctx.reply('¡Bienvenido!');
});

bot.launch().then( () => {
    console.log('Bot iniciado');
});

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
});
