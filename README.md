# Curso básico de Vue.js

## Directivas
 
### **V-IF**: Condiciona un elemento. 

```dos
<a v-if="mostrar" :href="url" >{{enlace}}</a>
```
En el momento de hacer la instacia del elemento vue, le pasamos como parametro si mostrar está en true o false. 

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
### Cosas que hay que tener en cuenta
1. Los Template no son elementos HTML, por lo tanto no son archivos que el navegador pueda interpretar.
1. No se puede poner un atributo de CSS a un elemento que el navegador no entiende.
1. Template es un englobador de objetos que Vue.js puede interpretar.

