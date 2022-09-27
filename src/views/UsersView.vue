<template>
  <div class="users">
    
    <p>Teste cadastro</p>
    <p>objetivos: guardar os cadastros enviados em um estado global ✓ /<br> listar os cadastros enviados ✓ (ainda está duplicado, resolver..) /<br> editar essas informaçoes cadastradas</p>
    <ListaCadastros></ListaCadastros>
  </div>
</template>


<script>
import ListaCadastros from "@/components/ListaCadastros.vue"

export default {
  name: 'UsersView',
  components: {
    ListaCadastros
  }
}
</script>