<template>
  <div>
    <section>
    <h2>Who are we?</h2>

    <p>We believe in offering more than a meal. At Folha it's always an experience. We've brought in professionals to design our restaurant, creating a comfortable and vibrant atmosphere. We've brought Chef Brancalhao who has truly brought life and passion to our menu. Our bar and lounge is run by top talent to make sure your experience is as good as possible no matter what you visit us for!</p>
    <h3>Below is a space for the Folha community to share their experiences. We love to hear back from our valued customers!</h3>
    </section>
    <section>
      <h3>Comments</h3>
      <form>
        <input placeholder="Name" @input="handleNameChange" :value="nameContent" />
        <input placeholder="Comment" @input="handleCommentChange" :value='commentContent' />
        <button @click="submitComment">Submit</button>
      </form>
      <div v-for="comment in comments" :key="comment.id">
        <Comment :name="comment.name" :content="comment.content" :id="comment.id" />
      </div>
    </section>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import {CreatePost, GetPost} from '../services/AboutServices'

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
      const res = await GetPost()
      this.comments = res
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
  }
}
</script>

<style>

</style>