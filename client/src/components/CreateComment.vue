<template>
  <form>
    <input placeholder="Name" @input="handleNameChange" :value="nameContent" />
    <input placeholder="Comment" @input="handleCommentChange" :value='commentContent' />
  </form>
</template>

<script>
export default {
  name: "CreateComment",
  data: () => ({
    nameContent = '',
    commentContent: ''
  }),
  methods : {
    handleNameChange(event){
      this.nameContent = event.target.value
    },
    handleCommentChange(event){
      this.commentContent = event.target.value
    }
  }
}
</script>

<style>

</style>