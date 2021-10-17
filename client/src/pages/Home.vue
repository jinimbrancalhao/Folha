<template>
  <div class="home">
    <h1 class="welcome">Welcome</h1>
    <div class="box">
      <transition-group name="fade">
        <div v-for="photo in [currentIndex]" :key="photo">
          <img :src="currentImage" alt="">
        </div>
      </transition-group>
      <div class="onimg">
      <h1>Restaurant | Bar | Lounge</h1>
      </div>
    </div>
    <section class="beauty">
      <h2 class="gold">Beauty in Simplicity</h2>
      <p>We have an innovative design, pushing the limits to offer a truly unique dining experience. Chef Brancalhao was one of the most polarizing chefs on the scene, and he's brought that creativity and passion to our menu.</p>
      <button><a class="button" href="/menu">View Menu</a></button>
    </section>
    <section class="night">
      <h2 class="gold">Enjoy a night out</h2>
      <p>We have locations all over the United States. They are all held to the same standard to ensure the best possible dining experience.</p>
      <button><a class="button" href="/locations">View Locations</a></button>
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
    height: 60vh;
    width: 100%;
  }
  .home {
    text-align: center;
  }
  .onimg {
    color: white;
    font-size: 1.25rem;
    border: thick double #e97ba7;
    border-left: none;
    border-right: none;
    width: 50%;
    margin: auto;
  }
  .box {
    position: relative;
    display: inline-block;
  }
  .box .onimg {
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    width: 60%;
  }
  .beauty {
    text-align: start;
    color: white;
    font-size: 1.35rem;
    padding-left: 10%;
  }
  .night {
    text-align: end;
    color: white;
    font-size: 1.35rem;
    padding-right: 10%;
  }
  .gold {
    color: #f5a4c5;
    font-size: 2rem;
  }
  .button {
    text-decoration: none;
    font-size: 1.25rem;
    margin: 5px;
  }
  .button:hover {
    font-size: 1.3rem;
  }
  .welcome {
    font-size: 2.5rem;
    color: #f5a4c5;
  }
</style>