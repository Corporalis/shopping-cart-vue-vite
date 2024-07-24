<template>
  <Container>
    <div v-if="cartItems.length">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :product="item"
        @remove="removeToCart"
      />
    </div>
    <p v-else>Your cart is empty.</p>
  </Container>
</template>

<script setup lang="ts">
import { styled } from "@vvibe/vue-styled-components";

const Container = styled.main`
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
import CartItem from "./CartItem.vue";

export default defineComponent({
  components: { CartItem },
  computed: mapGetters(["cartItems"]),
  methods: mapMutations(["removeToCart"]),
});
</script>
