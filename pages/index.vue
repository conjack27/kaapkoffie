<template>
  <div class="container home">
    <div class="home__image-section">
      <img
        class="home__image"
        src="/images/beans-boat.jpg"
        :alt="imageAltBoat"
      />
      <div class="home__coffee-cups">
        <NuxtLink to="where-to-try-our-beans" class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--1">Try now</p>
        </NuxtLink>
        <div @click="scrolltoMap" class="home__coffee-cup">
          <img
            class="home__coffee-cup-image"
            src="/images/koffiekopje.png"
            :alt="imageAltCoffee"
          />
          <p class="home__coffee-cup-text home__coffee-cup-text--2">
            The route
          </p>
        </div>
        <NuxtLink to="about-the-coffee" class="home__coffee-cup">
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
    <div class="home__map"></div>

    <h2 class="home__blog-heading">Voyage diaries</h2>
    <div class="home__blog">
      <div class="home__blog-item">
        <img
          class="home__blog__img"
          src="/images/voyage-diary-1.png"
          alt="People on boat"
        />
        <h3 class="home__blog-title">Part 1</h3>
        <p class="home__blog-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div class="home__blog-item">
        <img
          class="home__blog__img"
          src="/images/voyage-diary-1.png"
          alt="People on boat"
        />
        <h3 class="home__blog-title">Part 2</h3>
        <p class="home__blog-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
      <div class="home__blog-item">
        <img
          class="home__blog__img"
          src="/images/voyage-diary-1.png"
          alt="People on boat"
        />
        <h3 class="home__blog-title">Part 3</h3>
        <p class="home__blog-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>
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
    methods: {
      scrolltoMap() {
        const map = document.querySelector('.banner-container');
        map.scrollIntoView({ behavior: 'smooth' });
      },
    },
  };
</script>
