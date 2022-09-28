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
    },
    DELETAR_CADASTRO(state, payload) {
      // const index = state.listaCadastros.map(item => item.index).indexOf(payload);
      // state.listaCadastros.splice(index, 1);

      const index = state.listaCadastros.indexOf(payload);
      state.listaCadastros.splice(index, 1);

      console.log(index)
    }
  },
  actions: {
    criarCadastro(context, payload) {
      context.commit("UPDATE_CADASTRO", { id: payload.email })
    },
    deletarCadastro(context, payload) {
      context.commit("DELETAR_CADASTRO", payload)
    }
  }
})
