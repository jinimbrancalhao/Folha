<template>
  <form>
    <input placeholder="Name" @input="handleNameChange" :value="nameContent" />
    <input placeholder="Comment" @input="handleCommentChange" :value='commentContent' />
    <button @click="makeComment">Submit</button>
  </form>
</template>

<script>
import {CreateComment} from '../services/AboutServices'

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
    async makeComment(){
      if (this.nameContent && this.commentContent){
        const payload = {
          name: this.nameContent,
          content: this.commentContent
        }
        const res = await CreateComment(payload)
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