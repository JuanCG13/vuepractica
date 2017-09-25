# Curso básico de Vue.js
Apuntes del curso de [Platzi](https://platzi.com/).

Curso básico en el que veremos, condicionales, filtro de datos, control de eventos, manejo de formularios, listar elementos y ver una pequeña introducción a la creación de componentes con vue.js

## **Condicionales** 
```javascript
let app = new Vue({
    el: '#app'
    data: {
        url: 'https://google.com',
        enlace: 'Ir a Google',
        mostrar: true //Según el valor de esta variable se mostrará o no.
    }
})

```
### **v-if**: 
Añade o elimina un elemento del DOM en función del valor de la variable tomada por **v-if="variable"**

En el momento de hacer la instacia del elemento vue, le pasamos como parametro si mostrar está en true o false. 

```html
<div id="app">
    <template v-if="mostrar">
            <a :href="url" target="_blank">{{enlace}}</a>
    </template>
</div>
```

### **v-show**: 

La principal diferencia con **v-if** es que **v-show** mantiene el elemento en el DOM aunque no este visible. 

Esta propiedad no se le puede aplicar a un template ya que los templates no son elementos HTML y no puede aplicarle la propiedad display:none

```html
<div id="app">
    <div v-show="!mostrar" >
        Si mostrar es true, Vue le añadira la propiedad display:none a este elemento
    </div>
</div>
```
## **Filtros** 
```javascript
let app_filters = new Vue({
    el: '#app_filters',
    data: {
        titulo: 'Estás en Platzi', 
        subtitulo: 'Estás viendo el curso de Vue.js',
        willchange: 'Texto que cambiara.'
    },
    filters: {
        uppercase: function(str) {
            return str.toUpperCase()
        },
        lowercase: function(str) {
            return str.toLowerCase()
        },
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        },
        rename: function(str) {
            str = 'Texto cambiado';
            return str;
        }
    }

})
```
Vue.js nos permite que una variable pase por un filtro antes de aparecer por pantalla. Primero de todo debemos definir el filtro y luego aplicarlo en el HTML. 

```html
<div id="app_filters">
    <h1>{{ titulo | uppercase }}</h1>
    <h2>{{ subtitulo | capitalize }}</h2>
    <h3>{{ willchange | rename }}</h3>
</div>
```
## **Eventos** 
Otra de las cosas que Vue.js nos permite hacer es el manejo de eventos, es decir, reaccionar ante la interacción de los usuarios con los elementos de un sitio web.

```javascript
let app_events = new Vue({
    el: '#app_events',
    data: {
        contador: 0
    },
    methods: {
        sumar: function(){
            this.contador++;
        },
        restar: function(){
            this.contador--;
        }
    }

})
```
En este caso no podemos utilizar una arrow function ya que estaría haciendo referencia al objeto window. 

### **v-on**:
Debemos pasarle el evento al que tiene que reaccionar, en nuestro caso es *click* 

```html
<div id="app_events">
    <button v-on:click="sumar">Sumar 1</button>
    <button v-on:click="restar">Restar 1</button>
    El contador esta en {{ contador }}
</div>

<!-- También se puede escribir de la siguiente manera: -->

<div id="app_events">
    <button @click="contador++">Sumar 1</button>
    <button @click="contador--">Restar 1</button>
    El contador esta en {{ contador }}
</div>

<!-- En caso de no querer definir un método de este tipo podemos modificar el valor de la variable directamente -->
```
## **Formularios** 
Filtros y manejo de eventos para crear una interacción de usuario a través de un formulario en un sitio web.

**V-MODEL**:

Utilizaremos v-model para sincronizar un input con un valor recibido a través de data.
```html
<div id="app_forms">
    <input type="text" name="nombre" placeholder="Introduce tu nombre" v-model="nombre">
    <p>Tu nombre en mayúscula es: {{ nombre | uppercase }}</p>
</div>
```

```javascript
let app_forms = new Vue({
   el: '#app_forms',
   data: {
      nombre: '',
      cursos: []
   },
   filters: {
       uppercase: function (str) {
           return str.toUpperCase()
       }
   }
});
```
Para evitar que cuando hagamos submit del formulario se recargue la página, añadimos un evento al formulario para cuando se haga submit. 
```html
<!-- 
    - @: sustituye a v-on, que lo utilizamos para detectar un evento 
    - submit: es el evento que queremos detectar
    - prevent: para prevenir la recarga automática de la página
    - "submit": Método que queremos que se ejecute en lugar de la recarga.
-->
 <form @submit.prevent="submit" action="" method="">
```
Ahora vemos un ejemplo con un formulario. En este caso guardaremos los valores seleccionados en el array definido como cursos. 

Para acceder a estos datos desde el método invocado lo haremos a través de *this.cursos*

```html
<form @submit.prevent="submit" action="" method="">
    <h2>¿Cuales son tus cursos favoritos?</h2>
    <input v-model="cursos" type="checkbox" id="vue" value="vue">
    <label for="vue">Curso de Vue.js</label>

    <input v-model="cursos" type="checkbox" id="seo" value="seo">
    <label for="seo">Curso de SEO</label>

    <input v-model="cursos" type="checkbox" id="react" value="react">
    <label for="react">Curso de React y Redux</label>

    <input v-model="cursos" type="checkbox" id="growth" value="growth">
    <label for="growth">Curso de Growth Marketing</label>

    <button type="submit">Enviar</button>
</form>
```
## **Listas** 
Recibimos un array de objetos cursos. Vamos a ver como iteramos por el array para imprimir cada opción.

```javascript
let app_lists = new Vue({
   el: '#app_lists',
   data: {
      cursos: [
        { nombre: 'Curso de Vue.js', value: 'vue'},
        { nombre: 'Curso de Seo', value: 'seo'},
        { nombre: 'Curso de React', value: 'react'},
        { nombre: 'Curso de Marketing', value: 'growth'}
      ],
      cursosSeleccionados: []
   },
   methods: {
       submit: function () {
           console.log('Enviado')
           console.log(this.cursosSeleccionados)
       }
   }
});
```
### **V-FOR**
Declaramos una variable *curso* y recorremos el array recibido *cursos*. Por cada elemento del array se ejecutará un input. 

Necesitamos bindear los atributos al valor que tenga cada uno de los cursos. Para ello hacemos uso de **v-bind:**. 

Cambiaremos el **v-model** para guardar los resultados de los checkbox en el array *cursosSeleccionados*.

```html
<template v-for="curso in cursos">
    <input v-model="cursosSeleccionados" type="checkbox" v-bind:id="curso.value" v-bind:value="curso.value">
    <label v-bind:for="curso.value">{{curso.nombre}}</label>
</template>
```
## **Componentes**
Ejemplo de como crear un componente reutilizable. 

Primero de todo definimos en nuestro html dónde queremos utilizar el componente. 

Para obtener el valor de las variables de cada curso, necesitamos bindear el valor de cada curso al componente. 

Definimos el evento al que atenderá nuestro componente padre *app_components* e indicamos el método donde recibiremos la respuesta.
 ```html
<template v-for="c in cursos">
    <curso v-bind:curso="c" @checked="SelectCurso"></curso>
</template>
```
Debemos crear un div que englobe nuestro componente, ya que no podemos utilizar la etiqueta *template* al no ser interpretada por los navegadores. 

El array *props* lo recibimos de nuestro componente padre *app_components* e indica que propiedades necesita este componente para dibujarse. En este caso necesita acceder a los valores del curso. 

```javascript
Vue.component('curso',{
    props: ['curso'],
    methods: {
        //
        onchange: function(ev){
            this.$emit('checked', this.curso.value, ev.target.checked)
        }
    },
    template: `
        <div>
            <input type="checkbox" @change="onchange" v-bind:id="curso.value" v-bind:value="curso.value">
            <label v-bind:for="curso.value">{{curso.nombre}}</label>
        </div>` 
});

<!-- $emit('nombre del evento', 'que curso se checkeó', 'true o false si esta check')  -->
```

El componente padre *app_components* le pasa las propiedades al componente hijo *curso* a través de *props*. En caso que cambien estan propiedades, es una mala práctica cambiar directamente los atributos del padre (v-model). El componente hijo debe emitir eventos para que el padre responda a estos eventos. 

Definiremos tambien el método que atenderá al evento de si ha cambiado algún valor en nuestro componente hijo *curso*. Este método recibe como parámetros los valores enviados en nuestro método *onchange* del componente *curso*. 

```javascript

let app_components = new Vue({
   el: '#app_components',
   data: {
      cursos: [
        { nombre: 'Curso de Vue.js', value: 'vue'},
        { nombre: 'Curso de Seo', value: 'seo'},
        { nombre: 'Curso de React', value: 'react'},
        { nombre: 'Curso de Marketing', value: 'growth'}
      ],
      cursosSeleccionados: []
   },
   methods: {
       submit: function () {
           console.log('Enviado');
           console.log(this.cursosSeleccionados);
       },
       selectCurso: function (curso, ischecked) {
            if(checked){
                //En caso que este checked añadimos el curso a cursosSeleccionados
                this.cursosSeleccionados.push(curso)
            } else  {
                //Si esta unchecked quitamos al curso de cursosSeleccionados      
                let index = this.cursosSeleccionados.indexOf(curso) //Declaramos un indice de la posición del curso en el array 

                //Sacamos curso
                this.cursosSeleccionados.splice(index, 1)//splice recibe el indice y cuantas posiciones vamos a sacar a partir del indice. 
            }
       }
   }
});
```