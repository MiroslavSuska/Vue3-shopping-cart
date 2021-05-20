<template>
  <div class="cart-item">
    <h3>Cart Total: {{ cartTotal.toFixed(2) }}</h3>

    <button>Pay it all by credit card !</button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

<style scoped></style>
