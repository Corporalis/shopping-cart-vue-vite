import { createRouter, createWebHistory } from "vue-router";
import CartList from "../components/CartList.vue";
import ProductList from "../components/ProductList.vue";

const routes = [
  { path: "/", component: ProductList },
  { path: "/cart", component: CartList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
