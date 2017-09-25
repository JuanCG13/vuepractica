Vue.component('curso',{
    props: ['curso'],
    methods: {
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
            if(ischecked){
                this.cursosSeleccionados.push(curso)
            } else  {
                let index = this.cursosSeleccionados.indexOf(curso)
                this.cursosSeleccionados.splice(index, 1)
            }
       }
   }
});