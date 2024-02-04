<template>
  <div class="content">
    <div
      class="hero hero--team hero--work"
      style="background-image: url('/images/team.jpg')"
    >
      <h1 class="hero__heading">Want to be a part of our team?</h1>
    </div>
    <div class="content__page content__btns">
      <nuxtLink to="/contact-us" class="btn btn__primary"
        >Work on land</nuxtLink
      >
      <a class="btn btn__primary" href="https://www.kaapkargo.com/crew">
        Work at sea
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',

        imageAlt: 'Two sailors on a boat holding a bag of coffee beans',
      };
    },
    mounted() {},
  };
</script>

<style lang="scss"></style>
