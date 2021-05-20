<template>
  <div class="card-detail">
    <button class="btn-close-item" @click="$emit('close-item-detail')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <div class="product-details">
      <h3>{{ item.name }}</h3>
      <p class="description">Description: {{ item.description }}</p>
      <h5 class="price">${{ item.price.toFixed(2) }}</h5>
      <p class="category">{{ item.category }}</p>

      <div class="cart-total" v-if="productTotal">
        <h3>In cart:</h3>
        <h4>{{ productTotal }}</h4>
      </div>

      <div class="btn-container">
        <button class="add-btn" @click="addToCart">Add</button>
        <button class="remove-btn" @click="removeFromCart">Remove</button>
      </div>
    </div>
    <!--    <button class="item-btn">View the product</button>-->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  emits: ["close-item-detail"],
  computed: {
    productTotal() {
      return this.$store.getters.productQuantity(this.item);
    },
  },
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.item);
    },
    removeFromCart() {
      this.$store.commit("removeFromCart", this.item);
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.card-detail {
  position: fixed;
  width: 80%;
  height: 70vh;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  background-color: #db9944;
  z-index: 100;
  transition: all 0.3s linear;
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.description {
    padding: 20px;
    line-height: 1.5rem;
  }

  .btn-container {
    button {
      border: none;
      max-width: 150px;
      width: 100%;
      border-radius: 5px;
      margin: 0 5px 50px 5px;
      cursor: pointer;
    }
  }
}

.btn-close-item {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 30px;
  height: 30px;
  /*line-height: 30px;*/
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #2c3e50;
  color: white;
  font-weight: bold;

  svg {
    width: 25px;
    height: 25px;
  }
}
</style>
