import { CartProduct } from "@/models/CartProduct";
import { Product } from "@/models/Product";
import { createStore } from "vuex";

interface State {
  products: Product[];
  cart: CartProduct[];
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
      const cartProduct = state.cart.find((p) => p.id === product.id);
      if (cartProduct) {
        cartProduct.quantity++;
        return;
      }
      const newCartProduct = { ...product, quantity: 1 };
      state.cart.push(newCartProduct);
    },
    removeToCart(state, id: number) {
      const cartProduct = state.cart.find((p) => p.id === id);
      if (cartProduct) {
        cartProduct.quantity--;
        if (cartProduct.quantity === 0) {
          state.cart = state.cart.filter((product) => product.id !== id);
        }
      }
    },
  },
  actions: {},
  getters: {
    cartItems: (state) => state.cart,
    products: (state) => state.products,
  },
});

export default store;
