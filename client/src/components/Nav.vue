<template>
  <nav class="nav">
    <div class="folha">
      <h1>Folha</h1>
    </div>
    <router-link class="link" to="/">Home</router-link>
    <router-link class="link" to="/menu">Menu</router-link>
    <router-link class="link" to="/about">About</router-link>
    <router-link class="link" to="/locations">Locations</router-link>  
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
    justify-content: center;
    justify-content: space-around;
    padding: 30px;
    background-color: #101010;
    align-items: center;
  }
  .folha {
    position: relative;
  }
  .link {
    margin-left: 10%;
    margin-right: 10%;
  }
</style>