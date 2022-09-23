export default class Tipos {
    numero1: number;
    numero2: number;
    //propiedades de la clase-son globales

    constructor(numero1: number, numero2:number){
        //variables locales del metodo constructor
        this.numero1 = numero1;
        this.numero2 = numero2;
        //console.log(`Suma de ${this.numero1} y ${this.numero2} es : ${this.resultado}`);
    }

    sumar(numero1: number, numero2:number){
        return numero1 + numero2;
    }

    restar(numero1: number, numero2:number){
        return numero1 - numero2;
    }

    multiplicar(numero1: number, numero2:number){
        return numero1 * numero2;
    }

    dividir(numero1: number, numero2:number){
        return numero1 / numero2;
    }
}