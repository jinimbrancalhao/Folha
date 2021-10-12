<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {

  },
  data: () => ({
    menu: []
  }),
  mounted: function(){

  },
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