const nombres:string[] = [];

const imprimirNombre = () => {   
    console.log('Impresion de nombres...');
    nombres.push('Marvin');
    nombres.push('Pedro');

    for (let index = 0; index < nombres.length; index++) {
        console.log(`Nombre: ${nombres[index]}`)
    }
}

const contarPosiciones = () => {
    console.log(`Nombres almacenados: ${nombres.length}`)
}

export {imprimirNombre, contarPosiciones};