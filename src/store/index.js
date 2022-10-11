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
            indexCadastroEditando: Number
    }
  },
  mutations: {
    CREATE_CADASTRO(state, payload) {
      state.listaCadastros.push(payload)
    },
    UPDATE_CADASTRO(state, payload) {
      const index = state.indexCadastroEditando
      
      state.listaCadastros[index] = Object.assign({}, state.listaCadastros[index], payload) 
      // state.cadastro = Object.assign(state.cadastro, payload) 
      // Object.assign é para um cadastro unico, que pode ser atualizado, vou tentar usar ela aqui para atualizar o registro
      // para não deletar quando dar refresh: https://stackoverflow.com/questions/43027499/vuex-state-on-page-refresh
    },
    DELETAR_CADASTRO(state, payload) {
      const index = state.listaCadastros.indexOf(payload);
      state.listaCadastros.splice(index, 1);
    },
    PEGAR_INDEX_CADASTRO(state, payload) {
      state.indexCadastroEditando = payload
    }
  },
  actions: {
    updateCadastro(context, payload) {
      context.commit("UPDATE_CADASTRO", payload)
    },
  }
})
