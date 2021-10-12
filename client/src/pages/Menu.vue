<template>
  <div>
    <h2>PLEASE SELECT A MENU</h2>
    <div>
      <h3 @click="GetMenu">Full Menu</h3>
      <h3 @click="GetAppetizers">Appetizers</h3>
      <h3>Entrees</h3>
      <h3>Desserts</h3>
      <h3>Drinks</h3>
      <div v-for="item in menu" :key="item.id">
        <MenuItem :name="item.name" :description="item.description" :price="item.price" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MenuItem from '../components/MenuItem.vue'

export default {
  name: 'Menu',
  components: {
    MenuItem
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
      console.log(this.menu)
    },
    async GetAppetizers(){
      const res = await axios.get(
        'http://localhost:3001/api/menu/appetizers'
      )
      this.menu = res.data
    },
    async GetEntrees(){
      const res = await axios.get(
        'http://localhost:3001/api/menu/entrees'
      )
      this.menu = res.data
    },
    async GetDesserts(){
      const res = await axios.get(
        'http://localhost:3001/api/menu/desserts'
      )
      this.menu = res.data
    }
  }
}

</script>

<style>

</style>