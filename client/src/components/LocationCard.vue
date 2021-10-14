<template>
  <div>
    <h2>{{city}}, {{state}}</h2>
    <h3>{{address}}</h3>
    <p>{{hours}}</p>
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

</style>