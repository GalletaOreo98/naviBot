export const randomBetween = (min:number, max:number):number => {
    return Math.round(Math.random() * (max - min) + min)
}

export const elegirEntre = (elementos:string[]):string => {
    const eleccion = elementos[Math.round(Math.random() * ((elementos.length - 1) - 0) + 0)] || 'Error: sintaxis'
    return eleccion
}

const mezclarPrivate = (elementos:string[]):string[] => {
    
    let currentIndex = elementos.length  
    let randomIndex:number
  
    //While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      //Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
  
      //And swap it with the current element.
      [elementos[currentIndex], elementos[randomIndex]] = [elementos[randomIndex], elementos[currentIndex]]
    }
    return elementos
}

export const mezclar = (elementos:string[]):string => {
        elementos = mezclarPrivate(elementos)

        //Dar formato de salida
        let lista = ''
        elementos.forEach((elemento, index) => {
            lista += `${index + 1}.  ${elemento}\n`
        })

        return lista
}

export const repartirEntre = (elementos:string[], elementosARepartir:string[]):string => {
    //Mezclar ambos arreglos
    elementos = mezclarPrivate(elementos)
    elementosARepartir = mezclarPrivate(elementosARepartir)

    //Dar formato de lista numerada
    elementos.forEach((elemento, index) => {
        elementos[index] = `<strong>${index + 1}. ${elemento}:</strong>`
    })

    //Repartir
    let lista = ''
    let contador = 0
    while (contador < elementosARepartir.length) {
        for (let i = 0; i < elementos.length; i++) {
            elementos[i] += ` ${elementosARepartir[contador] || ''}`
            contador++
            if (contador > elementosARepartir.length) break
        }
    }
    
    //Dar formato de salida
    lista = elementos.join('\n')

    return lista
}