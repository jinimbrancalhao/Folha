<template>
  <div class="item">
    <h3 class="title">{{name}} {{price}}</h3>
    <p class="item-desc">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: String,
    description: String,
    price: Number
  }
}
</script>

<style>
  .title {
    font-size: 1.35rem;
    color: #1e022e;
  }
  .item-desc {
    color: white;
    font-size: 1.25rem;
  }
</style>