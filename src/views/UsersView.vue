<template>
  <div class="users">
    
    <p>Teste cadastro</p>
    <p>objetivos: guardar os cadastros enviados em um estado global ✓ / listar os cadastros enviados / editar essas informaçoes cadastradas</p>
    
    <div>
      <h2>Cadastros registrados:</h2>
      <p>Nome: {{this.$store.state.cadastro.nome}}</p>
      <p>Email: {{this.$store.state.cadastro.email}}</p>
      <p>CPF / CNPJ: {{this.$store.state.cadastro.cpf}}</p>
      <p>Telefone: {{this.$store.state.cadastro.telefone}}</p>
    </div>
  </div>
</template>


<script>
import { mapFields } from "@/helpers.js"

export default {
  name: 'UsersView',
  computed: {
        // utilizando a funçao mapfields, 'base' é o nome do objeto no store
        ...mapFields({
            fields: ["nome", "email", "cpf", "telefone"],
            base: "cadastro",
            mutation: "UPDATE_CADASTRO"
        }),
  }
}
</script>