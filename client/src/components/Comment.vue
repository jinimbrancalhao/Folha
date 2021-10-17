<template>
  <div class="ind-comment">
    <h3 class="comment-name">{{name}}</h3>
    <p class="comment-content">{{content}}</p>
      <form v-if="displayForm">
        <input placeholder="Name" @input="handleNameUpdate"  />
        <input placeholder="Comment" @input="handleCommentUpdate" />
        <button @click="updateComment">Submit</button>
      </form>
    <button class="button side" @click="showForm">Update</button>
    <button class="button side" @click="deleteComment">Delete</button>
  </div>
</template>

<script>
import {DeletePost, UpdatePost} from '../services/AboutServices'

export default {
  name: 'Comment',
  props: {
    name: String,
    content: String,
    id: Number
  },
  data: ()=> ({
    displayForm: false,
    nameChange: '',
    commentChange: ''
  }),
  methods: {
    async deleteComment() {
      const res = await DeletePost(this.id)
      this.$router.go()
      console.log(res, "success")
    },
    showForm() {
      this.displayForm = true
    },
    handleNameUpdate(event){
      this.nameChange = event.target.value
    },
    handleCommentUpdate(event){
      this.commentChange = event.target.value
    },
    async updateComment() {
      const data = {
        "name": this.nameChange,
        "content": this.commentChange
      }
      const res = await UpdatePost(this.id, data)
      console.log(res)
    }
  }
}
</script>

<style>
  .ind-comment {
  margin: 10px;
  }
  .comment-name {
    font-size: 1.5rem;
    color: tomato;
  }
  .comment-content {
    font-size: 1.25rem;
    color: white;
  }
</style>