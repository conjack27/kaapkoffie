<template>
  <div class="container home">
    <div class="home__image-section">
      <img
        class="home__image"
        src="/images/beans-boat.jpg"
        :alt="imageAltBoat"
      />
      <div class="home__coffee-cups">
        <NuxtLink class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--1">Try now</p>
        </NuxtLink>
        <NuxtLink class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--2">
            The route
          </p>
        </NuxtLink>
        <NuxtLink class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--3">
            Tasting profile
          </p>
        </NuxtLink>
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
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        imageAltCoffee: 'Cup of coffee',
        imageAltBoat: 'Sack of coffee on a boat',
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
