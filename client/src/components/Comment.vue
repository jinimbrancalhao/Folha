<template>
<div>
  <h3>{{name}}</h3>
  <p>{{content}}</p>
  <button>Update</button>
  <button @click="deleteComment">Delete</button>
</div>
</template>

<script>
import {DeletePost} from '../services/AboutServices'

export default {
  name: 'Comment',
  props: {
    name: String,
    content: String,
    id: Number
  },
  data: ()=> ({
    commentDetails: {}
  }),
  methods: {
    async deleteComment() {
      const res = await DeletePost(this.id)
      console.log(res, "success")
    }
  }
}
</script>

<style>

</style>