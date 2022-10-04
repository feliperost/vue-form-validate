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
            modalVisible: false,
            modalComponent: null
    }
  },
  mutations: {
    CREATE_CADASTRO(state, payload) {
      state.listaCadastros.push(payload)
    },
    UPDATE_CADASTRO(state, payload) {
      const index = state.listaCadastros.indexOf(payload)
      
      state.listaCadastros[index] = Object.assign({}, state.listaCadastros[index], payload) 
      // state.cadastro = Object.assign(state.cadastro, payload) 
      // a linha acima é para um cadastro unico, que pode ser atualizado, vou tentar usar ela aqui para atualizar o registro
    },
    DELETAR_CADASTRO(state, payload) {
      const index = state.listaCadastros.indexOf(payload);
      state.listaCadastros.splice(index, 1);
    },
    SHOW_MODAL(state, componentName) {
      state.modalVisible = true;
      state.modalComponent = componentName;
    },
    HIDE_MODAL(state) {
      state.modalVisible = false;
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
