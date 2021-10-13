<template>
  <div>
    <h2>Who are we?</h2>
    <h3>Comments</h3>
    <CreateComment />
    <div v-for="comment in comments" :key="comment.id">
      <Comment :name="comment.name" :content="comment.content" @addComment="addComment" />
      <button>Update</button>
      <button>Delete</button>
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import axios from 'axios'
import CreateComment from '../components/CreateComment.vue'

export default {
  name: 'About',
  components: {
    Comment,
    CreateComment
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
    },
    addComment(comment){
      this.comments.unshift(comment)
    }
    // async updateComment(comment_id){
    //   const res = await axios.put(
    //     `http://localhost:3001/api/comment/${comment_id}`
    //   )
    // }
  }
}
</script>

<style>

</style>