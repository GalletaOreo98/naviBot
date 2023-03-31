import { Context } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";
import { elegirEntre, mezclar, pptGame, randomBetween, repartirEntre, sendMessage } from "../util";

const comandoIniciador = 'nv';

const textController = (text: String, ctx:Context<Update>) => {

    try {
        const partesDelComando = text.split(' -', 2);

        if (partesDelComando[0].toLowerCase() === comandoIniciador) {

            const restoDelComando = partesDelComando[1];
            
            if (!restoDelComando) {
                console.log('Comando invalido: restoDelComando');
                return;
            }
            const subComando = restoDelComando.split(' ', 1)[0];

            const restoDelSubComando = restoDelComando.replace(subComando + ' ', '');
            switch (subComando.toLowerCase()) {
                case 'nr':
                case 'numrand':
                    const limitesNumero = restoDelSubComando.split(" ", 2);
                    const numeroRandom = randomBetween(parseInt(limitesNumero[1]), parseInt(limitesNumero[0]));
                    ctx.reply(numeroRandom.toString());
                    break;
                case 'ppt':
                    ctx.reply(pptGame(restoDelSubComando));
                    break;
                case 'ee':
                case 'elegirentre':
                    const elementos = restoDelSubComando.split(", ");
                    ctx.reply(elegirEntre(elementos));
                    break;
                case 'mz':
                case 'mezclar':
                    const elementosAMezclar = restoDelSubComando.split(", ");
                    ctx.reply(mezclar(elementosAMezclar));
                    break;
                case 're':
                case 'repartirentre':
                    const elementosARepartir = restoDelSubComando.split(" : ");
                    ctx.reply(repartirEntre(elementosARepartir[0].split(', '), elementosARepartir[1].split(', ')),
                        { parse_mode: "HTML" } );
                    break;
                case 'test':
                    console.log(ctx);                    
                    break;
                case 'talk': 
                    ctx.replyWithChatAction('typing');
                    const userID = ctx.message?.from.id || "ANONIMO";
                    const formattedMessage = "USER-"+ userID + ": "+ restoDelSubComando;
                    console.log(formattedMessage);
                    sendMessage(formattedMessage)
                        .then((res)=> {
                            const respuesta = res.substring(6);
                            console.log(res);
                            ctx.reply(respuesta || "...");
                        })
                        .catch((err)=> {
                            console.log("No puedo responder"); 
                            console.log(err);
                            ctx.reply("Tengo problemas técnicos...");
                        });

                    break;
                default:
                    break;
            }
        }

    } catch (error) {
        console.log(error);
        console.log('##############################\nError Inesperado\n##############################');
        return;
    }
}

export { textController };
