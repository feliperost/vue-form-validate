<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Editar cadastro
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
        
      </header>

      <section class="modal-body" v-if="this.$store.state.listaCadastros[this.$parent.cadastroIndex]">
        <slot name="body">
          <Form class="form-wrapper" @submit="updateCadastro">

            <div class="input-wrapper">
              <label for="nome">Nome cadastrado:</label>
              <input class="field" type="text" v-model="nome" :rules="validateNome" name="nome">
              <ErrorMessage class="error-msg" name="nome" /><br>
            </div>

            <div class="input-wrapper">
              <label for="nome">Email cadastrado:</label>
              <input class="field" type="email" v-model="email" :rules="validateEmail" name="email">
              <ErrorMessage class="error-msg" name="email" /><br>
            </div>

            <div class="input-wrapper">
              <label for="nome">CPF/CNPJ cadastrado:</label>
              <input class="field" type="text" v-model="cpf" :rules="validateCPF" name="cpf">
              <ErrorMessage class="error-msg" name="cpf" /><br>
            </div>

            <div class="input-wrapper">
              <label for="nome">Telefone cadastrado:</label>
              <input class="field" type="text" v-model="telefone" :rules="validateTel" name="cpf">
              <ErrorMessage class="error-msg" name="telefone" /><br>
            </div>

            <!-- <div class="input-wrapper">
              <label for="nome">Nome cadastrado:</label>
              <span>{{this.$store.state.listaCadastros[this.$parent.cadastroIndex].nome}}</span>
              <Field class="field" name="nome" type="text" :rules="validateNome" placeholder="Novo nome completo"/>
              <ErrorMessage class="error-msg" name="nome" /><br>
            </div>

            <div class="input-wrapper">
              <label for="email">Email cadastrado:</label>
              <span>{{this.$store.state.listaCadastros[this.$parent.cadastroIndex].email}}</span>
              <Field class="field" name="email" type="email" :rules="validateEmail" placeholder="Novo email"/>
              <ErrorMessage class="error-msg" name="email" /><br>
            </div>
          
            <div class="input-wrapper">
              <label for="cpf">CPF/CNPJ cadastrado:</label>
              <span>{{this.$store.state.listaCadastros[this.$parent.cadastroIndex].cpf}}</span>
              <Field class="field" name="cpf" type="text" :rules="validateCPF" v-mask="['###.###.###-##', '##.###.###/####-##']" placeholder="Novo CPF/CNPJ"/>
              <ErrorMessage class="error-msg" name="cpf" /><br>
            </div>

            <div class="input-wrapper">
              <label for="telefone">Telefone cadastrado:</label>
              <span>{{this.$store.state.listaCadastros[this.$parent.cadastroIndex].telefone}}</span>
              <Field class="field" name="telefone" type="text" :rules="validateTel" v-mask="['(##) ####-####', '(##) #####-####']" placeholder="Novo telefone"/>
              <ErrorMessage class="error-msg" name="telefone" /><br>
            </div>       -->

            <button type="button" class="btn-padrao" @click="updateCadastro">Atualizar</button>
          </Form>          
        </slot>
      </section>
      
        <button type="button" class="btn-padrao-red" @click="close">
          Cancelar
        </button>
      
    </div>
  </div>
</template>


<script>
// import { mapFields } from '@/helpers.js'
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  name: 'ModalEditarCadastro',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: ['cadastroIndex'],
  data() {
    return {
      showModal: false,
      dadosFormAtualizar: [],
    }
  },
  computed: {
    // usando essas computed properties para aparecer o valor dinamicamente no campo de input... estudando se é a melhor opção...
    nome: {
      get(){
        return this.$store.state.listaCadastros[this.$parent.cadastroIndex].nome
      },
      set(value){
        this.$store.commit('UPDATE_CADASTRO', { nome: value })
      }},
    email: {
      get(){
        return this.$store.state.listaCadastros[this.$parent.cadastroIndex].email
      },
      set(value){
        this.$store.commit('UPDATE_CADASTRO', { email: value })
      }},
    cpf: {
      get(){
        return this.$store.state.listaCadastros[this.$parent.cadastroIndex].cpf
      },
      set(value){
        this.$store.commit('UPDATE_CADASTRO', { cpf: value })
      }},
    telefone: {
      get(){
        return this.$store.state.listaCadastros[this.$parent.cadastroIndex].telefone
      },
      set(value){
        this.$store.commit('UPDATE_CADASTRO', { telefone: value })
      }},
  },
  //   computed: {
  //   // utilizando a funçao mapfields, 'base' é o nome do objeto no store
  //   ...mapFields({
  //       fields: ["nome", "email", "cpf", "telefone"],
  //       base: "listaCadastros",
  //       mutation: "UPDATE_CADASTRO"
  //   })
  // },
  methods: {
    close() {
      this.$emit('close');
    },
    updateCadastro(values) {
      // this.dadosFormAtualizar = values
      // this.$parent.cadastroIndex = index
      this.$store.commit('UPDATE_CADASTRO', values)
      console.log(values)
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Campo obrigatório';
      }
      // checa se o email segue o padrão de emails
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'Insira um e-mail válido';
      }
      // All is good
      return true;
    },
    validateNome(value) {
      // if the field is empty
      if (!value) {
        return 'Campo obrigatório';
      }
      // if the field is not a valid name
      const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/i;
      if (!regex.test(value)) {
        return 'Insira um nome válido';
      }
      // All is good
      return true;
    },
    validateCPF(value) {
      // if the field is empty
      if (!value) {
        return 'Campo obrigatório';
      }
      // checa se é um cpf ou cnpj
      const regex = /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}-?[0-9]{2})$/;
      if (!regex.test(value)) {
        return 'Insira um CPF ou CNPJ válido';
      }
      // All is good
      return true;
    },
    validateTel(value) {
      // if the field is empty
      if (!value) {
        return 'Campo obrigatório';
      }
      // checa se o número é celular ou fixo, e se o primeiro dígito de um número de celular com 9 dígitos é 9
      const regex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
      if (!regex.test(value)) {
        return 'Insira um número de telefone válido';
      }
      // All is good
      return true;
    },
  }
}

</script>


<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #42b983;
  justify-content: space-between;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #b94256;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  border-radius: 2px;
}
  
label {
  font-weight: bold;
  color: #42b983;
}

p {
  margin: 0;
}

.form-wrapper {
  display: inline-block;
  justify-content: center;
  border: 1px solid;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 7px;
  border-radius: 2px;
  background: #fff;
  margin-top: 20px;
}

.error-msg {
  font-size: 1rem;
  color: red;
}

.erro-enviar {
  font-size: 1.1rem;
  color: red;
  margin-top: 10px;
}

.field {
  margin: 5px;
  width: 250px;
  height: 25px;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid;
  text-align: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.resultado-form {
  font-size: 1rem;
  padding: 10px;
  margin-top: 20px;
}

::placeholder {
  text-align: center; 
}
</style>