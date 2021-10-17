<template>
  <div>
    <section class="about">
      <h2 class="bold">Who are we?</h2>

      <p class="text">We believe in offering more than a meal. At Folha it's always an experience. We've brought in professionals to design our restaurant, creating a comfortable and vibrant atmosphere. We've brought Chef Brancalhao who has truly brought life and passion to our menu. Our bar and lounge is run by top talent to make sure your experience is as good as possible no matter what you visit us for!</p>
      <h3 class="text">Below is a space for the Folha community to share their experiences. We love to hear back from our valued customers!</h3>
    </section>
    <section class="comments">
      <h3 class="bold">Comments</h3>
      <form class="form" >
        <input class="input" placeholder="Name" @input="handleNameChange" :value="nameContent" />
        <input class="input" placeholder="Comment" @input="handleCommentChange" :value='commentContent' />
        <button class="button" @click="submitComment">Submit</button>
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
  .about {
    text-align: center;
    margin: 20px;
  }
  .bold {
    text-align: center;
    font-size: 2rem;
    color: #f5a4c5;
  }
  .text {
    font-size: 1.5rem;
    color: white;
    margin: 30px;
  }
  .input {
    margin-bottom: 10px;
    text-align: center;
    height: 25px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 25%;
    padding-right: 25%;
  }
  .comments {
    text-align: center;
  }
</style>