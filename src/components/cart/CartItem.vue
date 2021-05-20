<template>
  <div class="cart-item">
    <div class="header">
      <h3>{{ item.name }}</h3>
      <p>{{ description }}</p>
      <h4>In cart: {{ item.quantity }}</h4>
      <h4>Total cost: {{ itemCost.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  computed: {
    itemCost() {
      return this.$store.getters.itemCost(this.item);
    },
    description() {
      return this.item.description.substring(0, 100);
    },
  },
};
</script>

<style scoped lang="scss">
.cart-item {
  width: 90%;
  margin: 5%;
  background-color: burlywood;
  box-shadow: 0 0 5px white;
  border-radius: 5px;
  padding: 10px;
}
</style>
