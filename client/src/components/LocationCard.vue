<template>
  <div>
    <h2 class="location-city">{{city}}, {{state}}</h2>
    <h3 class="location-details">{{address}}</h3>
    <p class="location-details">{{hours}}</p>
  </div>
</template>

<script>
export default {
  name: 'LocationCard',
  props:{
    address: String,
    city: String,
    state: String,
    hours: String
  }
}
</script>

<style>
  .location-city {
    font-size: 1.75rem;
    color: tomato;
  }
  .location-details {
    font-size: 1.25rem;
    color: white;
  }
</style>