export const state = () => ({
  basket: [],

});

export const mutations = {
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
