<template>
  <div class="home">
    <h1>Welcome</h1>
    <h1>Restaurant | Bar | Lounge</h1>
    <transition-group name="fade">
      <div v-for="photo in [currentIndex]" :key="photo">
        <img :src="currentImage" alt="">
      </div>
    </transition-group>
    <section>
      <h2 >Beauty in Simplicity</h2>
      <p>We have an innovative design, pushing the limits to offer a truly unique dining experience. Chef Brancalhao was one of the most polarizing chefs on the scene, and he's brought that creativity and passion to our menu.</p>
      <button><a href="/menu">View Menu</a></button>
    </section>
    <section>
      <h2>Enjoy a night out</h2>
      <p>We have locations all over the United States. They are all held to the same standard to ensure the best possible dining experience.</p>
      <button><a href="/locations">View Locations</a></button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    images: [
      'https://i.imgur.com/pYAome7.jpg',
      'https://i.imgur.com/JWXmq3A.jpg',
      'https://i.imgur.com/YjYsJ70.png'
    ],
    timer: null,
    currentIndex: 0
  }),
  mounted: function() {
    this.startSlide()
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.nextSlide, 4000)
    },
    nextSlide() {
      this.currentIndex += 1
    }
  },
  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  }
}
</script>

<style>
  img {
    height: 40%;
    width: 100%;
  }
  .home {
    text-align: center;
  }
</style>