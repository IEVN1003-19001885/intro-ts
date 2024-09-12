// CODIGO DE VOLUEMEN DE LAS FIGURAS
import { Area } from './areas';

class Volumen extends Area {
    constructor(base: number, altura: number, lado: number, apotema: number, radio: number) {
        super(base, altura, lado, apotema, radio);
    }

    calcularVRectangular(profundidad: number): number {
        const Base = this.calcularARectangulo();
        return Base * profundidad;
    }

    calcularVPrisma(): number {
        const Base = this.calcularAPentagono();
        return Base * this.altura; 
    }

    calcularVCilindro(): number {
        const Base = this.calcularACilindro();
        return Base * this.altura; 
    }
}

const volumen = new Volumen(5, 10, 6, 4, 7);

console.log("Área del prisma rectangular:", volumen.calcularARectangulo());
console.log("Volumen del prisma rectangular:", volumen.calcularVRectangular(8));

console.log("Área del prisma pentagonal:", volumen.calcularAPentagono());
console.log("Volumen del prisma pentagonal:", volumen.calcularVPrisma());

console.log("Área del cilindro:", volumen.calcularACilindro());
console.log("Volumen del cilindro:", volumen.calcularVCilindro());
