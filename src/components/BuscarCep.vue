<template>
    <p>desenvolvendo esse desafio: https://github.com/petlove/vagas/tree/master/frontend</p>

    <Form class="form-wrapper" @submit="fetchCep">
        <div class="input-wrapper">
            <Field class="field" name="cep" type="text" :rules="validateCEP" v-mask="['#####-###']" placeholder="00000-000"/>
            <ErrorMessage class="error-msg" name="cep"/><br>
        </div>
        <button class="btn-padrao" @click="fetchCep">Buscar CEP</button>
    </Form>

    <!-- <div class="input-wrapper">
        <input class="field" v-model="cep" name="cep" type="text" :rules="validateCEP" v-mask="['#####-###']" placeholder="00000-000"/>
        <button class="btn-padrao" @click="fetchCep">Buscar CEP</button>
        <ErrorMessage class="error-msg" name="cep"/><br>
    </div> -->

    <!-- <div class="resultado">
        <ul>
            <li>CEP: {{cepPesquisado.cep}}</li>
            <li>Estado: {{cepPesquisado.uf}}</li>
            <li>Cidade: {{cepPesquisado.localidade}}</li>
            <li>Endereço: {{cepPesquisado.logradouro}}</li>
        </ul>
    </div> -->

</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue'

function validateCEP(value) {
    // checar se o campo está vazio
    if (!value) {
      return 'Campo obrigatório';
    }
    // checa se é um cep válido
    const regex = /^([\d]{2})\.?([\d]{3})-?([\d]{3})/;
    if (!regex.test(value)) {
      return 'Insira um CEP válido';
    }
    // se estiver ok...
    return true;
}

const cepPesquisado = ref([])

async function fetchCep(value){
    cepPesquisado.value = value
    console.log(cepPesquisado)
    // let response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    // let json = await response.json();
    // cep.value = await json;
}
</script>

<style scoped>


</style>