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