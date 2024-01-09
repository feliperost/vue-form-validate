<template>
    <div>  
        <p>fazer: estilizar melhor o resultado</p>
        <p>ideia a fazer: um botão no final do resultado que copie o endereço para a clipboard</p>
        <h2>Pesquise um CEP</h2>
        <Form class="form-wrapper" @submit="fetchCep" :validateOnMount="false">
            <div class="input-wrapper">
                <Field class="field" name="cep" type="text" :rules="validateCEP" v-mask="['#####-###']" placeholder="00000-000"/>
                <ErrorMessage class="error-msg" name="cep"/><br>
            </div>
            <button class="btn-padrao" @click="fetchCep">Buscar CEP</button>
        </Form>

        <div v-if="cepPesquisado">
            <h2>Dados do CEP pesquisado:</h2>
            <div class="resultado-form">
                <div v-for="(value, key) in cepPesquisado" :key="value">
                    <span class="resultado-key">{{key}}:</span>
                    <span class="resultado-value">{{value}}</span>
                </div>
                <button class="btn-padrao">Copiar para a área de transferência</button>
            </div>
        </div>
        <div v-else class="erro-enviar">
            <p>Erro ao enviar.</p>
            <p>Preencha o formulário corretamente.</p>
        </div>

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
        // fazer a chamada à API 
        let response = await fetch(`https://viacep.com.br/ws/${cepPesquisado.value.cep}/json`);
        let json = await response.json();
        
        cepPesquisado.value = json;

        console.log(cepPesquisado.value);
        return cepPesquisado.value;
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        return null; 
    }
}
</script>

<style scoped>

.resultado-form {
  display: inline-block;
  justify-content: center;
  border: 1px solid;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  border-radius: 2px;
  background: #fff;
  margin-top: 10px;

}

.resultado-key {
    font-weight: bold;
    text-transform: uppercase;   
}

.resultado-value {
    font-weight: medium;
}

.erro-enviar {
  font-size: 1.1rem;
  color: red;
  margin-top: 10px;
}

</style>

