// CODIGO DE AREA DE LAS FIGURAS
export class Area {
    protected base: number;
    protected altura: number;
    protected lado: number;
    protected apotema: number;
    protected radio: number;

    constructor(base: number, altura: number, lado: number, apotema: number, radio: number) {
        this.base = base;
        this.altura = altura;
        this.lado = lado;
        this.apotema = apotema;
        this.radio = radio;
    }

    calcularARectangulo(): number {
        return this.base * this.altura;
    }

    calcularAPentagono(): number {
        return (5 * this.lado * this.apotema) / 2;
    }

    calcularACilindro(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
