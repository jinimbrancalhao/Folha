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
  /* .sidebar {
    height: auto;
    width: 15%;
    position: fixed;
    top: 0;
    left: 0;
  } */
  main {
    margin-left: 15%;
  }
</style>
