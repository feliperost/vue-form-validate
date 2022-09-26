<template>
  <div class="nav">
    <router-link to="/form">Form</router-link> |
    <router-link to="/users">Cadastros</router-link>
  </div>
  
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
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
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.1);
}

.btn-padrao:hover {
  background: #5bd39d;
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
/* 
.chevron::before {
    color: #42b983;
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    top: 0.15em;
    vertical-align: top;
    width: 0.45em;
    transform: rotate(135deg);
} */

</style>