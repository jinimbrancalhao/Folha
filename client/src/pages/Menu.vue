<template>
  <div>
    <h2>PLEASE SELECT A MENU</h2>
    <h3 @click="GetMenu">Full Menu</h3>
    <h3>Appetizers</h3>
    <h3>Full Menu</h3>
    <h3>Full Menu</h3>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Menu',
  components: {

  },
  data: () => ({
    menu: []
  }),
  // mounted: function() {
  //   this.GetMenu()
  // },
  methods: {
    async GetMenu(){
      const res = await axios.get(
        'http://localhost:3001/api/menu'
      )
      this.menu = res.data
    }
  }
}

</script>

<style>

</style>