![alt text](./cambiosProperty.png)


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
