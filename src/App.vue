<script setup lang="ts">
import { styled } from "@vvibe/vue-styled-components";
import { RouterLink } from "vue-router";
import { GlobalStyles } from "./GlobalStyles";

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #f8f9fa;
`;

const Link = styled(RouterLink)`
  text-decoration: none;
  color: #007bff;

  &.router-link-exact-active {
    font-weight: bold;
  }
`;

const Main = styled.main`
  padding: 1em;
`;
</script>

<template>
  <GlobalStyles />
  <div id="app">
    <Nav>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </Nav>
    <Main>
      <router-view></router-view>
    </Main>
  </div>
</template>
