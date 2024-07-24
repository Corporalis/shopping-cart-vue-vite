<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from "vue";
import { styled } from "@vvibe/vue-styled-components";
import { Product } from "../model/Product";

export interface ProductItemProps {
  product: Product;
}

const StyledProduct = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const props = defineProps<ProductItemProps>();

const emit = defineEmits<{
  add: [product: Product];
}>();

const {
  product: { value: product },
} = toRefs(props);

function add() {
  emit("add", product);
}
</script>

<template>
  <StyledProduct>
    <h2>{{ product.name }}</h2>
    <p>£{{ product.price }}</p>
    <Button @click="add">Add to Cart</Button>
  </StyledProduct>
</template>
