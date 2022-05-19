const juan ={
    name: 'juanito',
    age: 18,
    approvedCourses : ["Curso 1"],
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};
/* vamos a utilizar las propiedades estaticas de nuestro objeto madre object esto es asi por que un metodo estatico nos permite llamarlo sin siquiera tener alguna instancia de objeto. */
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
/* console.log(Object.entries(juan)[3][1].bind(juan)("curso 2")); 
se tiene que poner juan con .bind por que lo que sucedio esque ahora por el scope this ya no tiene el valor de juan sino que tiene el valor de approvedCourses*/

console.log(Object.getOwnPropertyDescriptors(juan));

/* para guardar un nuevo atributo */
/* de esta forma tenemos un nuevo atributo llamado pruebaNasa con un valor de Estraterrestres */
Object .defineProperty(juan, "PruebaNasa",{
    value: "extraterrestres",
    writable: false,
    enumerable: false,
    configurable: false,
});
Object .defineProperty(juan, "navigator",{
    value: "Chrome",
    writable: true,
    enumerable: false,
    configurable: true,
});
Object .defineProperty(juan, "editor",{
    value: "VSCode",
    writable: false,
    enumerable: true,
    configurable: true,
});
Object .defineProperty(juan, "terminal",{
    value: "WSL",
    writable: false,
    enumerable: true,
    configurable: false,
});

/* Object.seal(); */
/* no se puede borrar  pero si modificar */

Object.freeze();
/* no se puede borrar ni tampoco modificar */

/* estas propiedades se hacen automaticamente a todos nuestros atributos */
console.log(Object.getOwnPropertyDescriptors(juan));

/*  */