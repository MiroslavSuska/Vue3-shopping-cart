<template>
  <div class="home">
    <div class="products-container">
      <item-card
        v-for="item in items"
        :key="item.id"
        :item="item"
        v-on:view-item="viewItem($event)"
      />
    </div>

    <transition name="item-detail" appear>
      <item-detail
        v-if="itemIsDisplayed"
        :item="item"
        v-on:close-item-detail="itemIsDisplayed = false"
      />
    </transition>
  </div>
</template>

<script>
import { items } from "@/data/items";
import ItemCard from "@/components/items/ItemCard";
import ItemDetail from "@/components/items/ItemDetail";

export default {
  name: "Home",
  components: {
    ItemCard,
    ItemDetail,
  },
  data() {
    return {
      items: items,
      item: "",
      itemIsDisplayed: false,
    };
  },
  methods: {
    viewItem(item) {
      this.item = item;
      this.itemIsDisplayed = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item-detail-enter-active,
.item-detail-leave-active {
  transition: all 0.3s;
}
.item-detail-enter,
.item-detail-leave-to {
  opacity: 0;
}
</style>
