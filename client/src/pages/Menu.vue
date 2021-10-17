<template>
  <div class="menu-page">
    <h2 class="header">Please Select A Menu</h2>
    <h3 class="description">Our menu has been specially crafted by Chef Brancalhao to offer an expeience to anyone and everyone</h3>
    <div class="choice">
      <h3 @click="getMenu">Full Menu</h3>
      <h3 @click="getAppetizers">Appetizers</h3>
      <h3 @click="getEntrees">Entrees</h3>
      <h3 @click="getDesserts">Desserts</h3>
      <h3 @click="getDrinks">Drinks</h3>
    </div>
      <div class="menu">
        <div  v-for="item in menu" :key="item.id">
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
  mounted: function() {
    this.getMenu()
  },
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
.menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.choice {
  cursor: pointer;
  color: #f5a4c5;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  margin: 10px;
  border: #e06196 5px solid;
}
.menu-page {
  text-align: center;
}
.header {
  font-size: 2rem;
  color: #f5a4c5;
} 
.description {
  font-size: 1.5rem;
  color: white;
}
</style>