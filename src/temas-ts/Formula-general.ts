//Formula General
class FormulaGeneral {
    a:number;
    b:number;
    c:number;
    constructor(a:number, b:number, c:number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }


    calculo() {
        return this.b ** 2 - 4 * this.a * this.c;
    }


    calcularRaiz() {
        const d = this.calculo();
        if (d < 0) {
            return "Las raíces son complejas";
        } else if (d === 0) {
            const x = -this.b / (2 * this.a);
            return `Raíz única: x1 = x2 = ${x}`;
        } else {
            const x1 = (-this.b + Math.sqrt(d)) / (2 * this.a);
            const x2 = (-this.b - Math.sqrt(d)) / (2 * this.a);
            return `Raíces: x1 = ${x1}, x2 = ${x2}`;
        }
    }
}

const a = 1;
const b = -3;
const c = 2;

const ecuacion = new FormulaGeneral(a, b, c);

console.log(ecuacion.calcularRaiz());