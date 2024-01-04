<template>
  <div class="home">
    <div class="home__heading-container">
      <h1 class="home__heading">The cleanest coffee on the planet</h1>
    </div>
    <div class="horizontal-line"></div>
    <div class="home__image-section">
      <img
        class="home__image"
        src="https://taupe-mochi-8cdda8.netlify.app/images/beans-boat.jpg"
        alt="Coffee beans"
      />
      <div class="home__coffee-cups">
        <div class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="https://taupe-mochi-8cdda8.netlify.app/images/koffiekopje.png"
            alt="Coffee beans"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--1">Try now</p>
        </div>
        <div class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="https://taupe-mochi-8cdda8.netlify.app/images/koffiekopje.png"
            alt="Coffee beans"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--2">
            Follow the bean
          </p>
        </div>
        <div class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="https://taupe-mochi-8cdda8.netlify.app/images/koffiekopje.png"
            alt="Coffee beans"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--3">
            Tasting profile
          </p>
        </div>
      </div>
    </div>
    <div class="banner-container">
      <div class="coffee-word" v-for="(coffee, index) in coffees" :key="index">
        {{ coffee }} &nbsp;
      </div>
    </div>
    <div class="video-container">
      <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        coffees: [
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
          'coffee ',
        ],
      };
    },
    mounted() {},
    methods: {},
  };
</script>
