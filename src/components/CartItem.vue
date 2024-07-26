<script setup lang="ts">
import { CartProduct } from "@/models/CartProduct";
import { Product } from "@/models/Product";
import { styled } from "@vvibe/vue-styled-components";
import { ref, toRefs } from "vue";

export interface CartItemProps {
  product: CartProduct;
}

const StyledCartItem = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  text-align: center;
`;

var props = defineProps<CartItemProps>();

const emit = defineEmits<{
  remove: [id: number];
  add: [product: Product];
}>();

const {
  product: { value: product },
} = toRefs(props);

const quantityReference = ref(product.quantity);
const currentQuantityReference = ref(product.quantity);

function remove() {
  emit("remove", product.id);
}

function add() {
  emit("add", product);
}

const update = () => {
  const { value: quantity } = quantityReference;
  const { value: currentQuantity } = currentQuantityReference;

  if (quantity < currentQuantity) {
    remove();
  } else {
    add();
  }

  currentQuantityReference.value = quantity;
};
</script>

<template>
  <StyledCartItem>
    <h2>{{ product.name }}</h2>
    <p>£{{ product.price }}</p>
    <p>
      <input
        type="number"
        min="0"
        @input="update"
        v-model.number="quantityReference"
      />
    </p>
  </StyledCartItem>
</template>
