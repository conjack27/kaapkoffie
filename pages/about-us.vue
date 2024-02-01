<template>
  <div class="content content--about-us">
    <div class="hero__section">
      <div
        class="hero hero--full-screen hero--us"
        style="background-image: url('/images/rope.jpg')"
      >
        <div class="hero__heading-container">
          <h1 class="hero__heading">About Us</h1>
          <blockquote class="hero__quote">
            "We believe in sustainable maritime transportation."
          </blockquote>
          <blockquote class="hero__quote">
            "Together, we can make a difference."
          </blockquote>
        </div>
      </div>
      <div class="text-asset">
        <div class="text-asset__text-container">
          <h2 class="text-asset__heading">{{ title }}</h2>
          <p class="text-asset__text">{{ text }}</p>
          <p class="text-asset__text">{{ text2 }}</p>
          <NuxtLink to="/contact-us" class="btn btn__primary"
            >Join our team!</NuxtLink
          >
        </div>
        <div class="image-container">
          <img
            class="text-asset__image"
            src="/images/father-and-son.jpg"
            :alt="imageAlt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'What now?',
        text: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        text2:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',

        imageAlt: 'Two sailors on a boat holding a bag of coffee beans',
      };
    },
    mounted() {},
  };
</script>

<style lang="scss"></style>
