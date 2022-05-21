import { Telegraf } from 'telegraf'
import 'dotenv/config'

const bot = new Telegraf(process.env.BOT_TOKEN!)

//Exporta la instancia del bot a los controladores que lo usaran
export { bot }

/*Obtiene los controladores que se usan en el bot 
(Incrusta todas las funcionalidades a la instancia local 'const bot')*/
require('./eventos/on-text')

bot.start( ctx => {
    ctx.reply('Bienvenido usuario')
}) 

bot.launch().then( () => {
    console.log('Bot iniciado')
})
