import { randomBetween } from "./random";

export const pptGame = (userSelection:string):string => {

    // piedra = 1, papel = 2, tijera = 3
    let userSelectionRef:number = 0 

    // Formateo seleccion a un numero
    if (userSelection === "piedra") {
        userSelectionRef = 1
    } else {
        if (userSelection === "papel") {
            userSelectionRef = 2
        } else {
            if (userSelection === "tijera" || userSelection === "tijeras") {
                userSelectionRef = 3
            }
        }
    }

    //Genera eleccion del bot + emonji
    const eleccionBot = randomBetween(1, 3)
    let emoticonEleccionBot = ''
    switch (eleccionBot) {
        case 1:
            emoticonEleccionBot = "👊🏼"
            break
        case 2:
            emoticonEleccionBot = "✋🏼"
            break
        case 3:
            emoticonEleccionBot = "✌🏼"
            break
        default:
            break
    }

    //Procesa el ganador y retorna un el mensaje
    if (eleccionBot == userSelectionRef) {
        return `Elijo: ${emoticonEleccionBot}\nHemos elegido lo mismo. ^^`
    } else {
        if (userSelectionRef == 1 && eleccionBot == 2) {
            return `Elijo: ${emoticonEleccionBot}\nEs hora de documentar tu derrota. ^^`
        } else {
            if (userSelectionRef == 2 && eleccionBot == 3) {
                return `Elijo: ${emoticonEleccionBot}\nA que he cortado tu racha, espera... ¿Siquiera tenias una?`
            } else {
                if (userSelectionRef == 3 && eleccionBot == 1) {
                    return `Elijo: ${emoticonEleccionBot}\nUna dura derrota ¿no? ^^`
                } else {
                    if (userSelectionRef < 1 || userSelectionRef > 3) {
                        return `Elijo: ${emoticonEleccionBot}\nEstamos jugando piedra, papel o tijeras... ¿no?`
                    } else {
                        return `Elijo: ${emoticonEleccionBot}\nTu ganas.`
                    }
                }
            }
        }
    }
}