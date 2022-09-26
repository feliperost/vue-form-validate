import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      cadastro: {
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        }
    }
  },
  mutations: {
    UPDATE_CADASTRO(state, payload) {
        state.cadastro = Object.assign(state.cadastro, payload)
    }
  },
  actions: {
    criarCadastro(context, payload) {
        context.commit("UPDATE_CADASTRO", { id: payload.email })
  }}
})
