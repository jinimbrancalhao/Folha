<template>
  <div>
    <h2>Who are we?</h2>
    <h3>Comments</h3>
    <div>
      <Comment />
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import axios from 'axios'

export default {
  name: 'About',
  components: {
    Comment
  },
  data: () => ({
    comments: []
  }),
  mounted: function() {
    this.getComments()
  },
  methods: {
    async getComments(){
      const res = await axios.get(
        'http://localhost:3001/api/comment'
      )
      this.comments = res.data
    }
  }
}
</script>

<style>

</style>