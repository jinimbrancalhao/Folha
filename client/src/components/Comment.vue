<template>
<div>
  <h3>{{name}}</h3>
  <p>{{content}}</p>
</div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    name: String,
    content: String
  }
}
</script>

<style>

</style>