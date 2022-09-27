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
            listaCadastros: []
    }
  },
  mutations: {
    UPDATE_CADASTRO(state, payload) {
        state.listaCadastros.push(payload)
        // state.cadastro = Object.assign(state.cadastro, payload) <- esse é para um cadastro unico, que pode ser atualizado
    }
  },
  actions: {
    criarCadastro(context, payload) {
        context.commit("UPDATE_CADASTRO", { id: payload.email })
    }
  }
})
