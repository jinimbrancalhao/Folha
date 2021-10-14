<template>
  <nav class="nav">
    <div>
      <h1>Folha</h1>
    </div>
    <router-link to="/">Home</router-link>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/locations">Locations</router-link>  
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
  .nav {
    display: flex;
    flex-direction: column;
    background-color: black;
    height: 100%;
    width: 15%;
    position: fixed;
    top: 0;
    left: 0;
  }
</style>