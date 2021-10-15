<template>
  <div>
    <h2>Find a location near you!</h2>
    <form>
      <input placeholder="Search State" :value="searchQuery" @input="handleSearchQuery" >
      <button @click="handleSearch">Search</button>
    </form>
    <button @click="getLocations">View All Locations</button>
    <section>
          <div v-for="location in locations" :key="location.id">
      <LocationCard :address="location.address" :city="location.city" :state="location.state" :hours="location.hours" />
    </div>
    </section>

  </div>
</template>

<script>
import {GetLocations, GetLocationByState } from '../services/LocationServices'
import LocationCard from '../components/LocationCard.vue'

export default {
  name: 'Locations',
  components: {
    LocationCard
  },
  data: () => ({
    locations: [],
    searchQuery: ''
  }),
  mounted: function() {
    this.getLocations()
  },
  methods: {
    async getLocations() {
      const res = await GetLocations()
      this.locations = res
    },
    handleSearchQuery(e) {
      this.searchQuery = e.target.value
    },
    async handleSearch(e) {
      e.preventDefault()
      console.log("hello")
      const res = await GetLocationByState(this.searchQuery)
      this.locations = res
    }
  }
}
</script>

<style>

</style>