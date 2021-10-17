<template>
  <div id="app">
    <!-- <div class="sidebar">
    </div> -->
      <Nav />
    <main>
      <router-view></router-view>
    </main>
    
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
  main {
    margin-left: 15%;
    padding: 5%;
  }
  body {
    height: 100vh;
    background-image: url('./background.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }


</style>
