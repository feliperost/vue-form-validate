<template>
  <div id="form-wrapper">

    <Form class="form" @submit="onSubmit">
      <label for="email">E-mail:</label>
      <Field class="field" name="email" type="email" :rules="validateEmail" placeholder="seu_email@email.com"/>
      <ErrorMessage class="error-msg" name="email" />
    </Form>

    <Form class="form" @submit="onSubmit">
      <label for="name">Nome completo:</label>
      <Field class="field" name="name" type="text" :rules="validateName" placeholder="Nome Completo"/>
      <ErrorMessage class="error-msg" name="name" />
    </Form>

    <Form class="form" @submit="onSubmit">
      <label for="cpf">CPF ou CNPJ:</label>
      <Field class="field" name="cpf" type="text" :rules="validateCPF" v-mask="['###.###.###-##', '##.###.###/####-##']" placeholder="000.000.000-00"/>
      <ErrorMessage class="error-msg" name="cpf" />
    </Form>

    <button class="btn-padrao" @click="onSubmit()">Enviar</button>
    <!-- :mask="['###.###.###-##', '##.###.###/####-##']"
    v-mask="'##/##/####'" placeholder="DD/MM/AAAA" -->

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

    }
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'Campo obrigatório';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'Insira um e-mail válido';
      }
      // All is good
      return true;
    },
    validateName(value) {
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
      // if the field is not a valid email
      const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (!regex.test(value)) {
        return 'Insira um CPF válido';
      }
      // All is good
      return true;
    },
  },
};
</script>

<style scoped>
.form-wrapper {
  display: inline-block;
  justify-content: center;
  border: 1px solid;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 7px;
  border-radius: 2px;
  background: #fff;
}

.error-msg {
  color: red;
  text-decoration: underline;
}

.form {
  margin-top: 20px;
}

.field {
  margin-left: 10px;
}
</style>