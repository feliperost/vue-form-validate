<template>
    <div>
      <h2>Cadastros registrados:</h2>
      <div class="cadastro" v-for="registro in this.$store.state.listaCadastros" :key="registro.email">
        <p>Nome: {{registro.nome}}</p>
        <p>Email: {{registro.email}}</p>
        <p>CPF ou CNPJ: {{registro.cpf}}</p>
        <p>Telefone: {{registro.telefone}}</p>   
        {{registro}}   
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
    },
}
</script>


<style scoped>
.cadastro {
    display: inline-block;
    justify-content: center;
    border: 1px solid;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 7px;
    border-radius: 2px;
    background: #fff;
}
</style>