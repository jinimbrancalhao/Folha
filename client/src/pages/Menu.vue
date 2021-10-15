<template>
  <div>
    <h2>PLEASE SELECT A MENU</h2>
    <h3>Our menu has been specially crafted by Chef Brancalhao to offer an expeience to anyone and everyone</h3>
    <div>
      <h3 @click="getMenu">Full Menu</h3>
      <h3 @click="getAppetizers">Appetizers</h3>
      <h3 @click="getEntrees">Entrees</h3>
      <h3 @click="getDesserts">Desserts</h3>
      <h3 @click="getDrinks">Drinks</h3>
      <div v-for="item in menu" :key="item.id">
        <MenuItem :name="item.name" :description="item.description" :price="item.price" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'
import {GetMenu,GetAppetizers,GetEntrees,GetDesserts,GetDrinks} from '../services/MenuServices'

export default {
  name: 'Menu',
  components: {
    MenuItem
  },
  data: () => ({
    menu: []
  }),
  methods: {
    async getMenu(){
      const res = await GetMenu()
      this.menu = res
    },
    async getAppetizers(){
      const res = await GetAppetizers()
      this.menu = res
    },
    async getEntrees(){
      const res = await GetEntrees()
      this.menu = res
    },
    async getDesserts(){
      const res = await GetDesserts()
      this.menu = res
    },
    async getDrinks(){
      const res = await GetDrinks()
      this.menu = res
    }
  }
}

</script>

<style>

</style>