<template>
  <div>
    <p class="mensaje">{{ msg }}</p>
    este es un componente en vue cñores
  </div>
</template>

<script>
export default {
  name: 'primercomponente',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mensaje{
    color: rgb(56, 172, 56);
  }
</style>
