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