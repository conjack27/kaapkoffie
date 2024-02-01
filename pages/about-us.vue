<template>
  <div class="content">
    <div class="hero hero--half-hero">
      <div class="hero__section hero__section--image">
        <div
          class="hero__section-image"
          style="background-image: url('/images/waving.jpg')"
        ></div>
      </div>
      <div class="hero__section hero__section--text">
        <h1 class="hero__heading">
          {{ title }}
        </h1>

        <blockquote class="hero__section-quote">
          {{ quote1 }}
        </blockquote>
        <p class="hero__section-paragraph">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex e
        </p>
      </div>
    </div>

    <div class="text-asset">
      <div class="text-asset__image-container">
        <img
          class="text-asset__image"
          src="/images/father-and-son.jpg"
          :alt="imageAlt"
        />
      </div>
      <div class="text-asset__text-container">
        <h2 class="text-asset__heading">{{ subTitle }}</h2>
        <p class="text-asset__text">{{ whatThisMeans1 }}</p>
        <p class="text-asset__text">{{ whatThisMeans2 }}</p>
        <p class="text-asset__text">{{ whatThisMeans3 }}</p>
        <NuxtLink to="/work-with-us" class="btn btn__primary"
          >Join our team!</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'About us',
        subTitle: 'What now?',
        whatThisMeans1:
          "'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'",
        whatThisMeans2:
          "'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'",
        whatThisMeans3:
          "'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'",
        quote1:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        quote2:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',

        imageAlt: 'Two sailors on a boat holding a bag of coffee beans',
      };
    },
    mounted() {},
  };
</script>

<style lang="scss"></style>
