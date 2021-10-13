<template>
  <div>
    <h2>Who are we?</h2>
    <h3>Comments</h3>
      <form>
        <input placeholder="Name" @input="handleNameChange" :value="nameContent" />
        <input placeholder="Comment" @input="handleCommentChange" :value='commentContent' />
        <button @click="submitComment">Submit</button>
      </form>
    <div v-for="comment in comments" :key="comment.id">
      <Comment :name="comment.name" :content="comment.content" :id="comment.id" />
      <!-- <button>Update</button>
      <button @click="deleteComment">Delete</button> -->
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import axios from 'axios'
import {CreatePost} from '../services/AboutServices'

export default {
  name: 'About',
  components: {
    Comment,
  },
  data: () => ({
    comments: [],
    nameContent: '',
    commentContent: ''
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
    handleNameChange(event){
      this.nameContent = event.target.value
    },
    handleCommentChange(event){
      this.commentContent = event.target.value
    },
    async submitComment() {
      const data = {
        "name": this.nameContent,
        "content": this.commentContent
      }
        const res = await CreatePost(data)
        this.comments.push(res)
    },
    // deleteComment(){
    //   const res = await DeletePost()
    //   this.comments.
    // }

  }
}
</script>

<style>

</style>