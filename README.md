

### Object.defineProperty

Con esta propiedad se pueden definir nuevas propiedades a nuestro objeto. Así mismo, se puede configurar ciertas características de la propiedad tales como:

* **Configurable:** Esta indica si la propiedad puede ser borrada o eliminada
* **Enumerable:** Indica si la propiedad puede ser mostrada en la enumeración de las mismas. Existen ciertos métodos que toman como referencia este valor para mostrar la propiedad
* **Writable:** Esta indica si la propiedad puede ser modificada con el operador de asignación (=)

Si queremos modificar un propiedad que tienen `writable: false` no permitirá que su valor sea modificado

`Object.keys` solo muestra las propiedades que tienen `enumerable: true`. A diferencia de `Object.getOwnPropertyNames` que muestra todas las propiedades

Si queremos eliminar propiedad que tienen `configurable: false` no permitirá que sea borrada del objeto.

**Object.freeze()**

Este método *congela* un objeto que sea pasado. Es decir:

* Impide que se le agreguen nuevas propiedades
* Impide que sean eliminas propiedades ya existentes
* Impide que sus las propiedades internas (`writable`, `enumerable` y `configurable`) sean modificadas

**Object.seal()**

Este método *sella* un objeto que sea pasada. Es decir:

* Impide que nuevas propiedades sean agregadas
* Cambia en todas las propiedades `configurable: false`, con lo que impide que sean borradas
* Las propiedades aún puede ser modificadas, ya que `writable` esta `true`

🎳 Las variables son referencias a un espacio en memoria.
🎩 Los navegadores web usan dos tipos de memorias: Stack y Heap.
📁 La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
🌪 La memoria Heap es más lenta, pero permite guardar enormes cantidades de información  *(son como los tornados: grandes, lentos y desordenados)* . En esta memoria guardamos los valores de los objetos `({...}`).

Ahora ya entiendo que cuando igualamos una variable a otra estamos igualando al apuntador, por lo tanto si una variable le cambiamos alguna valor de su objeto cambiara para las dos variables, y si esto no es lo que queremos tenemos un problema, pero esto se puede arreglar con shallow copy en JavaScript

### Shallow copy en JavaScript

#### Shallow copy

El **Shallow Copy** *(copia superficial)* es una copia bit a bit de un objeto. Se crea un nuevo objeto que tiene una copia exacta de los valores del objeto original. Si alguno de los campos del objeto son referencias a otros objetos, solo se copian las direcciones de referencia, es decir, solo se copia la dirección de memoria.

![alt text](./ShallowCopy.jpg)

#### [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

El método Object.assign () copia todas las propiedades propias enumerables de uno o más objetos de origen a un objeto de destino. Devuelve el objeto de destino modificado.

Las propiedades del objeto de destino se sobrescriben con las propiedades de los orígenes si tienen la misma clave. Las propiedades de las fuentes posteriores sobrescriben a las anteriores.

#### [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#specifications)

El método Object.create () crea un nuevo objeto, utilizando un objeto existente como prototipo del objeto recién creado.

#### [La diferencia entre Object.create y Object.assign](https://www.codecalls.com/javascript/difference-between-object-create-and-object-assign/)

La principal diferencia entre **Object.create()** y **Object.assign()** es que el método **Object.assign** crea un nuevo  **Object** . utiliza el objeto proporcionado como prototipo del Objeto recién creado. Mientras que el método **Object.assign()** copia todas las propiedades de los objetos de origen al objeto de destino, que es el primer parámetro de esta función y devuelve este Objeto de destino.

Por lo tanto, vemos que mientras **Object.create()** define propiedades en nuestro **Object** recién creado. **Object.assign()** simplemente asigna el valor de los objetos de origen de destino a nuestro Objeto de destino.

POR LO TANTO Y EN RESUMEN NO FUNCIONAN MUY BIEN DEL TODO CUANDO EN UN OBJETO TIENE OTROS OBJETOS DENTRO Y ESTO LO VAMOS A SOLUCIONAR CON  JSON.parse y JSON.stringify

#### [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

* [**Descripción**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#descripci%C3%B3n)
  * Los objetos  **Boolean** ,  **Number** , and **String** se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
  * Si durante la conversión se encuentra un  **undefined** , una  **Function** , o un **Symbol** se omite (cuando se encuentra en un objeto) o se censura a **null** (cuando se encuentra en un array). **JSON.stringify()** puede devolver **undefined** cuando se pasan valores “puros” como  **JSON.stringify(function(){}** ) o  **JSON.stringify(undefined)** .
  * Todas las propiedades que utilicen **Symbol** en los nombres de la clave se ignoran por completo, incluso si utilizan una función  **replacer** .
  * Las instancias de **Date** implementan la función **toJSON()** devolviendo una cadena de texto (igual que  **date.toISOString()** ). Por lo que son tratadas como strings.
  * Los números **Infinity** y  **NaN** , así como el valor  **null** , se consideran  **null** .
  * El resto de instancias de **Object** (incluyendo  **Map** ,  **Set** ,  **WeakMap** , y  **WeakSet** ) sólo tendrán serializadas sus propiedades enumerables.

JSON.stringify () convierte un valor en notación JSON que lo representa:

#### [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

#### [Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript](https://medium.com/@pmzubar/why-json-parse-json-stringify-is-a-bad-practice-to-clone-an-object-in-javascript-b28ac5e36521)

* Puedes perder tipos de datos.
* JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey
* Convierte tipos de datos no soportados en soportados, como **`infinity`** y **`NaN`** en **`null`**
* Los tipos de datos **`Date`** serán parseados como **`strings`,** no como **`Date`**
* No es tan rápido y eficiente.

Y ESTA ES LA SOLUCION PARA NUESTRO PROBLEMA DE COPIAR UN OBJETO CON MAS OBJETOS DENTRO. SIN EMBARGO ESTO NO SIRVE CUANDO TENEMOS FUNCIONES O METODOS EN NUESTRO OBJETO. Por ello necesitamos trabajar con recursividad

### ¿Por qué escribir programas recursivos?

* Son mas cercanos a la descripción matemática.
* Generalmente mas fáciles de analizar
* Se adaptan mejor a las estructuras de datos recursivas.
* Los algoritmos recursivos ofrecen soluciones estructuradas, modulares y elegantemente simples.

### Factible de utilizar recursividad

* Para simplificar el código.
* Cuando la estructura de datos es recursiva
  ejemplo : árboles.

### No factible utilizar recursividad

* Cuando los métodos usen arreglos largos.
* Cuando el método cambia de manera impredecible de campos.
* Cuando las iteraciones sean la mejor opción.

#### Conclusiones

* La recursividad consume mucha memoria y tiempo de ejecución.
* La recursividad puede dar lugar a la redundancia (resolver el mismo problema más de una vez)
* A veces es más sencillo encontrar una solución recursiva que una iterativa

Es perfecto cuando buscamos copiar objetos en otros objetos que estos tengan metodos, atributos y objetos dentro. la recursividad es maravillosa.

checar deepCopy.js

TE AMO RECURSIVIDAD

### Abstracción con objetos literales y deep copy

#### [Object.isSealed()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed)

El método `**Object.isSealed()**` si el objeto está sellado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

#### [Object.isFrozen()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen)

El método `**Object.isFrozen()**` determina si un objeto está congelado.

Devuelve true si el objeto está sellado, de lo contrario devuelve false. Un objeto está sellado si no es extensible y si todas sus propiedades no se pueden configurar y por lo tanto no removibles (pero no necesariamente no modificables).

Un objeto está congelado si y solo si no es extendible, todas sus propiedades son no-configurables, y todos los datos de sus propiedades no tienen capacidad de escritura.
