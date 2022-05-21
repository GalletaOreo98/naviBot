import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
const comandoIniciador = 'nv'

const textController = (text: String, ctx:Context<Update>) => {
    text = text.toLowerCase()
    const partesDelComando = text.split(' -', 2)
    const restoDelComando = partesDelComando[1]
    const subComando = restoDelComando.split(' ', 1)[0]
    console.log(partesDelComando);
    console.log(restoDelComando);
    console.log(subComando);

    if (partesDelComando[0] === comandoIniciador) {
        const restoDelSubComando = restoDelComando.replace(subComando + ' ', '')
        console.log(restoDelSubComando);
        switch (subComando) {
            case 'nr':
            case 'numrand':
                const limitesNumero = restoDelSubComando.split(" ", 2)
                console.log(limitesNumero);
                const numeroRandom = Math.round(Math.random() * ( parseInt(limitesNumero[1]) - parseInt(limitesNumero[0])) + parseInt(limitesNumero[0]))
                ctx.reply(numeroRandom.toString())
                break;
        
            default:
                break;
        }
    }
}

export { textController }
