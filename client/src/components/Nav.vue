<template>
  <nav class="nav">
    <div>
      <h1 class="logo"><a href="/">Folha</a></h1>
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
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100%;
    width: 15%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #021b2d;
  }
  .link {
    margin: 10px;
    font-size: 1.5rem;
    text-decoration: none;
  }
  .link:visited {
    color: black;
  }
  .logo {
    font-size: 2.5rem;
  }
</style>