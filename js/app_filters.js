/*
    Para probarlo en la consola de Chrome:
        app_v_if.mostrar = false        
*/
/*
    HTML: 
        <div id="app_filters">
            <h1>{{ titulo | uppercase }}</h1>
            <h2>{{ subtitulo | capitalize }}</h2>
        </div>
*/
let app_filters = new Vue({
    el: '#app_filters',
    data: {
        titulo: 'Estás en Platzi',
        subtitulo: 'Estás viendo el curso de Vue.js'
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
        }
    }

})