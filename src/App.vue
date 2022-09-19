<template>
  <div>
    <VeeValidateForm/>
  </div>
</template>

<script>
import VeeValidateForm from './components/VeeValidateForm.vue'

export default {
  name: 'App',
  components: {
    VeeValidateForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn-padrao {
  border: none;
  background: #42b983;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
</style>
