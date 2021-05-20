<template>
  <div class="cart-wrap">
    <cart-item v-for="item in items" :key="item.id" :item="item" />

    <cart-summary :items="items" />
  </div>
</template>

<script>
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

export default {
  components: { CartItem, CartSummary },
  computed: {
    items() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style scoped></style>
