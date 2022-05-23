import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { elegirEntre, mezclar, pptGame, randomBetween, repartirEntre } from "../util";

const comandoIniciador = 'nv'

const textController = (text: String, ctx:Context<Update>) => {
    //text = text.toLowerCase()
    try {
        const partesDelComando = text.split(' -', 2)
        const restoDelComando = partesDelComando[1]
        const subComando = restoDelComando.split(' ', 1)[0]
    
        if (partesDelComando[0].toLowerCase() === comandoIniciador) {
            const restoDelSubComando = restoDelComando.replace(subComando + ' ', '')
            switch (subComando.toLowerCase()) {
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
                case 'mezclar':
                    const elementosAMezclar = restoDelSubComando.split(", ")
                    ctx.reply(mezclar(elementosAMezclar))
                    break
                case 're':
                case 'repartirentre':
                    const elementosARepartir = restoDelSubComando.split(" : ")
                    console.log(elementosARepartir);
                    console.log(elementosARepartir[0].split(', '))
                    console.log(elementosARepartir[1].split(', '))
                    ctx.reply(repartirEntre(elementosARepartir[0].split(', '), elementosARepartir[1].split(', ')),
                        { parse_mode: "HTML" } )
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
