export const state = () => ({
  basket: [],
  snackbar: {
    message: '',
    color: '',
    show: false,
  },
});

export const mutations = {
  showMessage(state, payload) {
    state.snackbar=payload;
  },
  addToBasket(state, payload) {
    state.basket.push(payload);
    sessionStorage.setItem('basket', JSON.stringify(state.basket))
  },
  DeleteFromBasket(state, payload) {
    state.basket = state.basket.filter(item => item.id !== payload)
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
  showMessage({commit}, payload) {
    commit('showMessage', payload);
  },
};
