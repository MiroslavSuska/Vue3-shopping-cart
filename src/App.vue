<template>
  <div id="nav">
    <router-link to="/" :class="{ active: $route.name === 'Home' }"
      >Home</router-link
    >
    |
    <router-link to="/cart" :class="{ active: $route.name === 'Cart' }"
      >Cart</router-link
    >
  </div>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-size: 16px;
}

body {
  background-color: #c2676a;
}

#nav {
  padding: 1rem;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  background-color: aliceblue;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 0 0.4rem 0 0.4rem;
    text-decoration: none;
    font-size: 1.25rem;

    &.active {
      color: #c2676a;
    }
  }
}

.text-center {
  text-align: center;
}
</style>
