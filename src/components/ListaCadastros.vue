<template>
    <div>
      <h2>Cadastros registrados:</h2>
        <div class="cadastro" v-for="(cadastro, index) in this.$store.state.listaCadastros" :key="index">
          <div v-if="cadastro.email != null">
            <p>Cadastro {{index}}</p>
            <p>Nome: {{cadastro.nome}}</p>
            <p>Email: {{cadastro.email}}</p>
            <p>CPF ou CNPJ: {{cadastro.cpf}}</p>
            <p>Telefone: {{cadastro.telefone}}</p>     
            <button @click.prevent="deletarCadastro(cadastro, index)">Remover</button>
          </div>
        </div>  
    </div>
</template>


<script>
import { mapFields } from '@/helpers.js'

export default {
  name: 'UsersView',
  computed: {
        // utilizando a funçao mapfields, 'base' é o nome do objeto no store
        ...mapFields({
            fields: ["nome", "email", "cpf", "telefone"],
            base: "listaCadastros",
            mutation: "UPDATE_CADASTRO"
        })
  },
  methods: {
    deletarCadastro(cadastro, index) {
      this.$store.commit('DELETAR_CADASTRO', cadastro, index)
    }
  }
}
</script>


<style scoped>
.cadastro {
    display: grid;
    justify-content: center;
    width: 400px;
    border: 1px solid;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    padding: 7px;
    border-radius: 2px;
    background: #fff;
}
</style>