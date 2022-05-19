const obj1 = {
    a: "a",
    b: "b",
    c: {
       d: "d",
       e: "e", 
    },
    editA() {
        this.a = "AAAAA";
    }
}; 
//lo de aca arriba es el objeto a copiar

function isObject(subject) {
    return typeof subject == "object"
}
function esUnArray(subject) {
    return Array.isArray(subject);
}
//estas 2 funciones son funciones de validacion de datos, estan seran llamads y se les pasaran un parametro, la mayoria de datos se puede validar con typeof, ergo, los arrays son los unicos que tienen un metodo espacial = Array.isArray(objetoAsaberSiEsUnArray)

function deepCopy(subject) {
    let copySubject;
//dentro de sta funcion sucedera todo,el copysubject guardara los datos, este esta esperando a saber si los datos son objetos,arrays u otras cosas como strings
    const subjectIsArray = esUnArray(subject);
    const subjectIsObject = isObject(subject);

//con las constantes subjectIsArray,   subjectIsObject trabajere los datos,  estas son las encargadas de llamar a  las funciones que hicimos fuera de la funcion deepCopy.
  

  if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

//por ultimo empezamos a trabajar con los datos ya validados, segun el dato que sea correspondiente, trbajaremos objeto,arrays u otros valores.
//2da parte del algoritmo
for(key in subject) {
    //Creamos un bucle for, este bucle (a in b)se puede ejecutar en una estructura de datos como arrays, objetos. Este loop signfica que el elemento a pasara por TODA la estructura de datos de b, y claro, dependieno la posicion de a,este tendra el valor de donde este parado encima. ejemplo: 
    //let array = [52,42,56];
    //for(a in array) {
        //console.log(array[a]);
    //}
            const keyIsObject = isObject(subject[key]);
    //con keyIsObject VUELVO a validar si los datos DENTRO de la estructura de datos YA VALIDADA son objetos o datos. 
    
            if(keyIsObject) {
                copySubject[key] = deepCopy(subject[key]);
    // si resulta que son objetos, entonces iremos copiando y pegando los datos en copySubject, y estos datos se iran copiando de manera identica y exitosa gracias la recursividad deepCopy(subject[key]);
    
    } else {
                if(subjectIsArray) {
                    copySubject.push(subject[key]);
                } else {
                    copySubject[key] = subject[key]
                }
            }
        }
     //estos 2 ultimos casos son mas sencillos ya que simplemente se basa en arrays u elementos que no sean ni arrays ni objetos   
     
        return copySubject;
    // Y al final de todo, la funcion debe devolver algo,verdad? en este caso, quien es el que almaceno todos los datos de el objeto que copiamos? el copySubject, bien, ese es quien retornamos.
    } 

    /* const obj2 = deepCopy(obj1); */