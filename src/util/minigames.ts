import { randomBetween } from "./random";

export const pptGame = (userSelection: string): string => {

    // piedra = 1, papel = 2, tijera = 3
    let userSelectionRef: number = 0;

    // Formateo seleccion a un numero
    if (userSelection === "piedra") {
        userSelectionRef = 1;
    } else {
        if (userSelection === "papel") {
            userSelectionRef = 2;
        } else {
            if (userSelection === "tijera" || userSelection === "tijeras") {
                userSelectionRef = 3;
            }
        }
    }

    //Genera eleccion del bot + emonji
    const botSelection = randomBetween(1, 3);
    let emoticonBotSelection = ''
    switch (botSelection) {
        case 1:
            emoticonBotSelection = "👊🏼";
            break;
        case 2:
            emoticonBotSelection = "✋🏼";
            break;
        case 3:
            emoticonBotSelection = "✌🏼";
            break;
        default:
            break;
    }

    // p = String sobre lo que elije + emonji
    const p = `Elijo: ${emoticonBotSelection}\n`;
    //Procesa el ganador y retorna un el mensaje
    if (botSelection == userSelectionRef) return `${p}Hemos elegido lo mismo. ^^`;
    if (userSelectionRef == 1 && botSelection == 2) return `${p}Es hora de documentar tu derrota. ^^`;
    if (userSelectionRef == 2 && botSelection == 3) return `${p}A que he cortado tu racha, espera... ¿Siquiera tenias una?`;
    if (userSelectionRef == 3 && botSelection == 1) return `${p}Una dura derrota ¿no? ^^`;
    if (userSelectionRef < 1 || userSelectionRef > 3) return `${p}Estamos jugando piedra, papel o tijeras... ¿no?`;
    return `${p}Tu ganas.`;
}