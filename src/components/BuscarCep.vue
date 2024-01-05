<template>
    <div>  
        <p>feito: acessando a api e está retornando os dados do cep digitado (por hora no console)</p>
        <p>a fazer: exibir os resultados</p>
        <Form class="form-wrapper" @submit="fetchCep">
            <div class="input-wrapper">
                <Field class="field" name="cep" type="text" :rules="validateCEP" v-mask="['#####-###']" placeholder="00000-000"/>
                <ErrorMessage class="error-msg" name="cep"/><br>
            </div>
            <button class="btn-padrao" @click="fetchCep">Buscar CEP</button>
        </Form>

        <!-- <div class="resultado-cep" v-if="cepPesquisado.value">
            <div v-for="(value, key) in cepPesquisado.value" :key="value">
            {{key}}: {{value}}
            </div>
        </div>
        <div v-else class="erro-enviar">
            <p>Erro ao enviar.</p>
            <p>Preencha o formulário corretamente.</p>
        </div> -->
    </div>
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

let cepPesquisado = ref()

async function fetchCep(value) {
    cepPesquisado.value = value;

    // isso aqui resolveu o problema abaixo (da busca estar enviando o cep + undefined)
    await new Promise(resolve => setTimeout(resolve, 100));

    // checar no console se o cep foi (estava enviando undefined E o cep)
    console.log(cepPesquisado.value.cep);

    try {
        // Realize a chamada à API do ViaCEP
        let response = await fetch(`https://viacep.com.br/ws/${cepPesquisado.value.cep}/json`);
        let json = await response.json();
        
        // Atribua o resultado da API a cepPesquisado.value
        cepPesquisado.value = json;

        console.log(cepPesquisado.value);
        return cepPesquisado.value;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        return null; // ou trate o erro de outra forma, conforme necessário
    }
}
</script>

<style scoped>

</style>

