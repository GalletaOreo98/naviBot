export const randomBetween = (min:number, max:number):number => {
    return Math.round(Math.random() * (max - min) + min)
}

export const elegirEntre = (elementos:string[]):string => {
    const eleccion = elementos[Math.round(Math.random() * ((elementos.length - 1) - 0) + 0)] || 'Error: sintaxis'
    return eleccion
}