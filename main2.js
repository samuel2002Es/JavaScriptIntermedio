const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    },
};

/* copiamos el primer objeto de uno por uno para que no nos afecte, no funciona con el segundo objeto c */
const obj2 = {};
for (prop in obj1) {
    obj2[prop] = obj1[prop];
}

/* vamos a utilizar un metodo de nuestra clase madre */
/* se le pasa por parametros dos cosas una es la variable pendiente , y el otro es el objeto a copiar */
/* con este metodo nos ocurre exactamente lo mismo que con la primera opcion */
const obj3 = Object.assign({}, obj1);

/*  utilizamos el metodo create*/
/* solo se le pasa el objeto a copiar */
/* lo heredado esta en proto y por ello pareceria que estamos heredando, sin embargo ya todo es un nuevo objeto el cual ya no va afectar nada si cambiamos algo al original */
const obj4 = Object.create(obj1)