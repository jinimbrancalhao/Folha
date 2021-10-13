<template>
  <form>
    <input placeholder="Name" @input="handleNameChange" :value="nameContent" />
    <input placeholder="Comment" @input="handleCommentChange" :value='commentContent' />
    <button>Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: "CreateComment",
  data: () => ({
    nameContent: '',
    commentContent: ''
  }),
  methods : {
    handleNameChange(event){
      this.nameContent = event.target.value
    },
    handleCommentChange(event){
      this.commentContent = event.target.value
    },
    async sendComment(data){
      const res = await axios.post(
        'http://localhost:3001/api/comment', data
      )
      return res
    },
    async makeComment(){
      if (this.nameContent && this.commentContent){
        const payload = {
          name: this.nameContent,
          content: this.commentContent
        }
        const res = await this.sendComment(payload)
        if (res.status === 201){
          this.$emit("addComment", res.data)
          this.nameContent = ''
          this.commentContent = ''
        }
      }
    }
  }
}
</script>

<style>

</style>