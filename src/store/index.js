import { createStore } from 'vuex'

export default createStore({
    strict: true,
    state () {
        return {
            cadastro: {
                nome: "",
                email: "",
                cpf: "",
                telefone: "",
            },
            listaCadastros: [],
    }
  },
  mutations: {
    CREATE_CADASTRO(state, payload) {
      state.listaCadastros.push(payload)
    },
    UPDATE_CADASTRO(state, payload) {
      const index = state.listaCadastros.indexOf(payload)
      console.log(state.listaCadastros.indexOf(payload))
      state.listaCadastros[index] = Object.assign({}, state.listaCadastros[index], payload) 
      // state.cadastro = Object.assign(state.cadastro, payload) 
      // Object.assign é para um cadastro unico, que pode ser atualizado, vou tentar usar ela aqui para atualizar o registro
    },
    DELETAR_CADASTRO(state, payload) {
      const index = state.listaCadastros.indexOf(payload);
      state.listaCadastros.splice(index, 1);
    },
  },
  actions: {
    
  }
})
