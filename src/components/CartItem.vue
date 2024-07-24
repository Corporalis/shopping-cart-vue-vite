<script setup lang="ts">
import { defineProps, defineEmits, toRefs } from "vue";
import { styled } from "@vvibe/vue-styled-components";
import { Product } from "../model/Product";

export interface CartItemProps {
  product: Product;
}

const StyledCartItem = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  width: 100%;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #dc3545;
  color: white;
  border: none;
  cursor: pointer;
`;

var props = defineProps<CartItemProps>();

const emit = defineEmits<{
  remove: [id: number];
}>();

const {
  product: { value: product },
} = toRefs(props);

function remove() {
  emit("remove", product.id);
}
</script>

<template>
  <StyledCartItem>
    <h2>{{ product.name }}</h2>
    <p>£{{ product.price }}</p>
    <Button @click="remove">Remove</Button>
  </StyledCartItem>
</template>
