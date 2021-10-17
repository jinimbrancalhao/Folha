<template>
  <nav class="nav">
    <div>
      <h1><a class="logo" href="/">Folha</a></h1>
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
    background-color: #38055a;
  }
  .link {
    margin: 10px;
    font-size: 1.75rem;
    text-decoration: none;
    color: white;
  }
  .link:visited {
    color: white;
  }
  .logo {
    font-size: 3rem;
    text-decoration: none;
    color: #f5a4c5;
  }
  .logo:visited {
    color: #f5a4c5;
  }
</style>