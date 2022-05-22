export const randomBetween = (min:number, max:number):number => {
    return Math.round(Math.random() * (max - min) + min)
}

export const elegirEntre = (elementos:string[]):string => {
    const eleccion = elementos[Math.round(Math.random() * ((elementos.length - 1) - 0) + 0)] || 'Error: sintaxis'
    return eleccion
}

export const mezclar = (elementos:string[]):string => {
    
        let currentIndex = elementos.length,  randomIndex
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [elementos[currentIndex], elementos[randomIndex]] = [
            elementos[randomIndex], elementos[currentIndex]];
        }
        let lista = ''

        elementos.forEach((elemento, index)=> {
            lista += `${index + 1}.  ${elemento}\n`
        })
        console.log(lista);
        
        return lista
}