import { createStore } from "vuex";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface State {
  products: Product[];
  cart: Product[];
}

const store = createStore<State>({
  state: {
    products: [
      { id: 1, name: "Product 1", price: 100 },
      { id: 2, name: "Product 2", price: 200 },
      { id: 3, name: "Product 3", price: 300 },
      { id: 4, name: "Product 4", price: 400 },
      { id: 5, name: "Product 5", price: 500 },
      { id: 6, name: "Product 6", price: 600 },
    ],
    cart: [],
  },
  mutations: {
    addToCart(state, product: Product) {
      state.cart.push(product);
    },
    removeToCart(state, id: number) {
      state.cart = state.cart.filter((product) => product.id !== id);
    },
  },
  actions: {},
  getters: {
    cartItems: (state) => state.cart,
    products: (state) => state.products,
  },
});

export default store;
