<template>
  <div>
      <h2>Cadastros registrados:</h2>
      <p>objetivo 1: edição só funcionar se estiver dentro das regras, esperar para submeter a alteração no state com o botão (como no form)</p>
      <p>objetivo 2: refatorar para composition api, p/ treinar script setup</p>
      <p>ideia paralela: focar em uma criação de login, e estando dentro do login, vc consegue editar as infos (como no curso da origamid)</p>
        <div v-for="(cadastro, index) in this.$store.state.listaCadastros" :key="index">
          <div v-if="cadastro.email != null">
            <div class="cadastro">
              <p>Nome: {{cadastro.nome}}</p>
              <p>Email: {{cadastro.email}}</p>
              <p>CPF ou CNPJ: {{cadastro.cpf}}</p>
              <p>Telefone: {{cadastro.telefone}}</p>     
              <button type="button" @click="showModal(index)" class="btn-padrao">Editar</button>

              <ModalEditarCadastro v-show="isModalVisible" @close="closeModal"></ModalEditarCadastro>

              <button @click.prevent="deletarCadastro(cadastro, index)" class="btn-padrao-red">Remover</button>
            </div>
          </div>
        </div>  
    </div>
</template>


<script>
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
  methods: {
    deletarCadastro(cadastro, index) {
      this.$store.commit('DELETAR_CADASTRO', cadastro, index)
    },
    closeModal() {
      this.isModalVisible = false
    },
    showModal(index) {
      this.isModalVisible = true
      this.cadastroIndex = index
      this.$store.commit('PEGAR_INDEX_CADASTRO', index)
    },
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
  margin-top: 10px;
}
</style>