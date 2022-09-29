<template>
  <div class="users">
    
    <p>Teste cadastro</p>
    <p>objetivos: guardar os cadastros enviados em um estado global ✓ /<br>
     listar os cadastros enviados ✓ /<br>
     editar as informaçoes cadastradas (abrir um input nos campos assim que o user apertar em editar, e aparecer as informações que estão no store)
     </p>
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