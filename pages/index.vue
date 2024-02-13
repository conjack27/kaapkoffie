<template>
  <div class="container home">
    <div
      class="home__image-section"
      style="background-image: url('/images/homepage2.jpg')"
    >
      <div class="home__coffee-cups">
        <NuxtLink
          to="where-to-try-our-beans"
          class="home__coffee-cup home__coffee-cup--1"
        >
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--1">Try now</p>
        </NuxtLink>
        <div @click="scrolltoMap" class="home__coffee-cup home__coffee-cup--2">
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--2">
            The route
          </p>
        </div>
        <NuxtLink
          to="about-the-coffee"
          class="home__coffee-cup home__coffee-cup--3"
        >
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

    <h2 class="home__blog-heading">The Route</h2>

    <div class="home__map"></div>

    <video class="home__video" controls autoplay>
      <source
        src="https://freight.cargo.site/i/F1616407343994175185000003739366/Video-kaapkoffie-homepage-480.mov"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    <section id="voyageDiaries" class="voyage-diaries">
      <h2 class="home__blog-heading">Voyage diaries</h2>
      <div class="home__blog">
        <NuxtLink to="voyage-diary-1" class="home__blog-item">
          <img
            class="home__blog__img"
            src="/images/blogpost1.jpg"
            alt="People on boat"
          />
          <h3 class="home__blog-title">Part 1</h3>
          <p class="home__blog-text">
            Monday morning, the Tres Hombres left the harbor, it was beautiful
            to see the boat leaving with their sails. We knew that it will soon
            be our time. Finally, we left tuesday around 5 pm. The first day was
            really difficult. The waves around us were up to 6 meters high. Half
            of the crew was sick. We finally set the sail, and the wind was good
            for one day...
          </p>
        </NuxtLink>
        <NuxtLink to="voyage-diary-2" class="home__blog-item">
          <img
            class="home__blog__img"
            src="/images/blogpost2.jpg"
            alt="People on boat"
          />
          <h3 class="home__blog-title">Part 2</h3>
          <p class="home__blog-text">
            It is hard to know which day it is. We wake up at various times
            throughout the day. My parents gave me an advent calendar filled
            with sweets. However, it is hard to know which one to open which
            day. The calm winds provided us with some downtime, allowing us to
            work on personal projects, like stitching. Being on board surely
            improved our creativity...
          </p>
        </NuxtLink>
      </div>
    </section>
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
    methods: {
      scrolltoMap() {
        const map = document.querySelector('.banner-container');
        map.scrollIntoView({ behavior: 'smooth' });
      },
    },
  };
</script>
