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
### Cosas que hay que tener en cuenta
1. Los Template no son elementos HTML, por lo tanto no son archivos que el navegador pueda interpretar.
1. No se puede poner un atributo de CSS a un elemento que el navegador no entiende.
1. Template es un englobador de objetos que Vue.js puede interpretar.

---

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
### **Aplicando filtros**

Vue.js nos permite que una variable pase por un filtro antes de aparecer por pantalla. Primero de todo debemos definir el filtro y luego aplicarlo en el HTML. 

```html
<div id="app_filters">
    <h1>{{ titulo | uppercase }}</h1>
    <h2>{{ subtitulo | capitalize }}</h2>
    <h3>{{ willchange | rename }}</h3>
</div>
```
#### Resultado
<dl>
  <h2>ESTÁS EN PLATZI</h2>
  <h3>Estás viendo el curso de Vue.js</h3>
  <h4>Texto cambiado</h4>
</dl>