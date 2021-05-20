import { createStore } from "vuex";

function updateLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default createStore({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      let item = state.cart.find((item) => item.id === product.id);

      if (item) return item.quantity;
      else return null;
    },

    cartItems: (state) => {
      return state.cart;
    },

    itemCost: (state) => (product) => {
      let item = state.cart.find((item) => item.id === product.id);
      if (item) {
        return item.price * item.quantity;
      }
    },

    cartTotal: (state) => {
      return state.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      let item = this.state.cart.find((item) => item.id === product.id);

      if (item) {
        item.quantity++;
      } else {
        this.state.cart.push({ ...product, quantity: 1 });
      }

      updateLocalStorage(this.state.cart);
    },
    removeFromCart(state, product) {
      let item = this.state.cart.find((item) => item.id === product.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.state.cart = this.state.cart.filter(
            (item) => item.id !== product.id
          );
        }
      }
      updateLocalStorage(this.state.cart);
    },
    updateCartFromLocalStorage(state) {
      let cart = localStorage.getItem("cart");

      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },
  actions: {},
  modules: {},
});
