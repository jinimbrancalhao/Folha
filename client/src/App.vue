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
  }

</style>
