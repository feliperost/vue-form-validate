<template>
  <div>

    <h2>Formulário com validação e input mask.</h2>
    <p>Todos os campos são obrigatórios.</p>

    <Form class="form-wrapper" @submit="onSubmit">
      <div class="input-wrapper">
        <label for="nome">Nome</label>
        <Field class="field" name="nome" type="text" :rules="validateNome" placeholder="Nome Completo"/>
        <ErrorMessage class="error-msg" name="nome" /><br>
      </div>

      <div class="input-wrapper">
        <label for="email">E-mail</label>
        <Field class="field" name="email" type="email" :rules="validateEmail" placeholder="email@email.com"/>
        <ErrorMessage class="error-msg" name="email" /><br>
      </div>
    
      <div class="input-wrapper">
        <label for="cpf">CPF ou CNPJ</label>
        <Field class="field" name="cpf" type="text" :rules="validateCPF" v-mask="['###.###.###-##', '##.###.###/####-##']" placeholder="000.000.000-00"/>
        <ErrorMessage class="error-msg" name="cpf" /><br>
      </div>

      <div class="input-wrapper">
        <label for="telefone">Telefone</label>
        <Field class="field" name="telefone" type="text" :rules="validateTel" v-mask="['(##) ####-####', '(##) #####-####']" placeholder="(00) 0 0000-0000"/>
        <ErrorMessage class="error-msg" name="telefone" /><br>
      </div>      

      <button class="btn-padrao" @click="onSubmit()">Enviar</button>
    </Form>

    <div class="resultado-form" v-if="dadosForm">
        <div v-for="(value, key) in dadosForm" :key="value">{{key}}: {{value}}</div>
    </div>
    <div v-else class="erro-enviar">
        <p>Erro ao enviar.</p>
        <p>Preencha o formulário corretamente.</p>
    </div>

  </div>
</template>


<script>
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      dadosForm: {},
    }
  },
  methods: {
    onSubmit(values) {
      this.dadosForm = values
      this.$store.commit('UPDATE_CADASTRO', this.dadosForm)
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
  },
};
</script>


<style scoped>
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