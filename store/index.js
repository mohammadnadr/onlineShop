export const state = () => ({
  basket: [],
  snackbar: {
    content: '',
    color: '',
    timeout: ''
  },

});

export const mutations = {
  showMessage(state, payload) {
    state.snackbar.content = payload.content;
    state.snackbar.color = payload.color;
    state.snackbar.timeout = payload.timeout;
  },
  addToBasket(state, payload) {
    state.basket.push(payload);
    sessionStorage.setItem('basket', JSON.stringify(state.basket))
  },
  DeleteFromBasket(state, payload) {
    state.basket = this.state.basket.filter(item => item.id !== payload)
    sessionStorage.setItem('basket', JSON.stringify(state.basket))
  },
  setBasket(state, payload) {
    state.basket = payload
  }
};

export const actions = {
  addToBasket({commit}, payload) {
    commit('addToBasket', payload);
  },
  DeleteFromBasket({commit}, payload) {
    commit('DeleteFromBasket', payload);
  },
  setBasket({commit}, payload) {
    commit('setBasket', payload);
  },
};
