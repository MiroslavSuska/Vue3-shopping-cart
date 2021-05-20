<template>
  <div class="card">
    <h3>{{ item.name }}</h3>
    <h5 class="price">{{ item.price }}</h5>
    <p class="description">Description: {{ description }}</p>
    <p class="category">{{ item.category }}</p>
    <button class="item-btn" @click="$emit('view-item', item)">
      View the product
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  emits: ["view-item"],
  computed: {
    description() {
      return this.item.description.substring(0, 130);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  width: 80%;
  margin: 10%;
  padding: 0.7rem;
  border-radius: 5px;
  background-color: burlywood;
  box-shadow: 0 0 5px gray;

  h5.price {
    color: #323232;
  }

  p.description {
    font-size: 0.9rem;
  }

  p.category {
    color: #323232;
  }

  button.item-btn {
    padding: 0.7rem;
    background-color: #323232;
    cursor: pointer;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.15rem;
    border-radius: 5px;
  }
}
</style>
