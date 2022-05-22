import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { elegirEntre, mezclar, pptGame, randomBetween } from "../util";

const comandoIniciador = 'nv'

const textController = (text: String, ctx:Context<Update>) => {
    text = text.toLowerCase()
    try {
        const partesDelComando = text.split(' -', 2)
        const restoDelComando = partesDelComando[1]
        const subComando = restoDelComando.split(' ', 1)[0]
    
        if (partesDelComando[0] === comandoIniciador) {
            const restoDelSubComando = restoDelComando.replace(subComando + ' ', '')
            switch (subComando) {
                case 'nr':
                case 'numrand':
                    const limitesNumero = restoDelSubComando.split(" ", 2)
                    const numeroRandom = randomBetween(parseInt(limitesNumero[1]), parseInt(limitesNumero[0]))
                    ctx.reply(numeroRandom.toString())
                    break
                case 'ppt':
                    ctx.reply(pptGame(restoDelSubComando))
                    break
                case 'ee':
                case 'elegirEntre':
                    const elementos = restoDelSubComando.split(", ")
                    ctx.reply(elegirEntre(elementos))
                    break
                case 'mz':
                    const elementosAMezclar = restoDelSubComando.split(", ")
                    ctx.reply(mezclar(elementosAMezclar))
                    break
            
                default:
                    break
            }
        }

    } catch (error) {
        console.log(error)
        return
    }
}

export { textController }
