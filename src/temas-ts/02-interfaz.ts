
interface Alumno{
    nombre:string;
    edad:number;
    email:string;
    calificacion?:number; //el ? hace que el campo sea opcional en caso de que se ponga o no
}

//este seria el objeto y lo de adentro son su propiedades
const alumno:Alumno={ //al ponerle el :Alumno adelante le asignamos
    nombre:'mario',
    edad:23,
    email:'mario@gmail.com'
}
console.table(alumno);

let mascotas=['perro', 'gato', 'perico'];
mascotas[1]='Nuevo gato';
mascotas.push('leon');
console.log(mascotas);

let tem:(string|number)[]=[];
tem.push(11);
tem.push('hola');
console.log(tem);
