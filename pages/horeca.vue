<template>
  <div class="content">
    <div class="hero hero--half-hero">
      <div class="hero__section">
        <h1 class="hero__heading">
          Want to drink our coffee in your office, hotel or restaurant?
        </h1>

        <p class="text__paragraph">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex e
        </p>
        <NuxtLink to="/contact-us" class="btn btn__primary"
          >Contact us to find out about the possibilities</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: 'https://taupe-mochi-8cdda8.netlify.app/images/',
      };
    },
  };
</script>
