<template>
  <div>
      <h2>Cadastros registrados:</h2>
      <p>objetivo atual: botão submeter as informações do modal atualizar as informações do item em questão</p>
      <p>problemas: o usuário ainda precisa digitar todas as informações novamente, mesmo que só queira alterar 1 campo</p>
        <div v-for="(cadastro, index) in this.$store.state.listaCadastros" :key="index">
          <div v-if="cadastro.email != null">
            <div class="cadastro">
              <p>Nome: {{cadastro.nome}}</p>
              <p>Email: {{cadastro.email}}</p>
              <p>CPF ou CNPJ: {{cadastro.cpf}}</p>
              <p>Telefone: {{cadastro.telefone}}</p>     
              <button type="button" @click="showModal(), storeIndex(index)" class="btn-padrao">Editar</button>

              <ModalEditarCadastro v-show="isModalVisible" @close="closeModal"></ModalEditarCadastro>

              <button @click.prevent="deletarCadastro(cadastro, index)" class="btn-padrao-red">Remover</button>
            </div>
          </div>
        </div>  
    </div>
</template>


<script>
import { mapFields } from '@/helpers.js'
import ModalEditarCadastro from "@/components/ModalEditarCadastro.vue"

export default {
  name: 'UsersView',
  components: {
    ModalEditarCadastro
  },
  data() {
    return {
      isModalVisible: false,
      cadastroIndex: Number
    }
  },
  computed: {
    // utilizando a funçao mapfields, 'base' é o nome do objeto no store
    ...mapFields({
        fields: ["nome", "email", "cpf", "telefone"],
        base: "listaCadastros",
        mutation: "CREATE_CADASTRO"
    })
  },
  methods: {
    deletarCadastro(cadastro, index) {
      this.$store.commit('DELETAR_CADASTRO', cadastro, index)
    },
    editarCadastro() {
      this.$store.commit('SHOW_MODAL', ModalEditarCadastro)
    },
    closeModal() {
      this.isModalVisible = false
    },
    showModal() {
      this.isModalVisible = true
    },
    storeIndex(index) {
      this.cadastroIndex = index
    }
  }
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