<template>
  <Container>
    <ProductItem
      v-for="product in products ?? []"
      :key="product.id"
      :product="product"
      @add="addToCart"
    />
  </Container>
</template>

<script setup lang="ts">
import { styled } from "@vvibe/vue-styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  div {
    margin-bottom: 1em;
  }
  div:last-of-type {
    margin-bottom: 0;
  }
`;
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapMutations } from "vuex";
import ProductItem from "./ProductItem.vue";

export default defineComponent({
  components: { ProductItem },
  computed: mapGetters(["products"]),
  methods: mapMutations(["addToCart"]),
});
</script>
