/*
    Para probarlo en la consola de Chrome:
        app_v_if.mostrar = false        
*/
/*
    HTML: 
        <div id="app_v_if">
            <template v-if="mostrar">
                    <a :href="url" target="_blank">{{enlace}}</a>
            </template>
        </div>
*/
let app_conditional = new Vue({
    el: '#app_conditional',
    data: {
        url: 'https://google.com',
        enlace: 'Ir a Google',
        mostrar: true, //Según el valor de esta variable se mostrará o no.
    }
});