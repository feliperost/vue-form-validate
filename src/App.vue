<template>
  <div class="nav">
    <router-link to="/form">Form</router-link> |
    <router-link to="/cadastros">Cadastros</router-link> |
    <router-link to="/cep">Cep</router-link>

  </div>
  
  <router-view></router-view>
</template>

<script setup>
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
  margin: 10px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
.btn-padrao:hover {
  background: #5bd39d;
}
.btn-padrao-red {
  border: none;
  background: #b94256;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1rem;
  margin: 10px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}
.btn-padrao-red:hover {
  background: #ce4f64;
}
div a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
div a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid currentColor;
}
</style>