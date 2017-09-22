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
   },
   methods: {
       submit: function () {
           console.log('Enviado')
           console.log(this.cursos)
       }
   }
});