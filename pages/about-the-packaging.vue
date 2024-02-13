<template>
  <div class="package">
    <img class="package__image" src="/images/packaging.jpg" />
    <div class="package__content">
      <h1 class="package__heading">100% Biodegradable packaging</h1>
      <p class="package__paragraph">
        At Kaapkoffie, we aim for sustainability throughout our entire supply
        chain, including our packaging. That's why we use biodegradable and
        reusable packaging. Biodegradable means that our packaging can be broken
        down by nature's microorganisms. The kraft paper packaging is internally
        lined with a biodegradable film and is equipped with aroma valves made
        of biodegradable plastic.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        isDesktop: false,
        imageAlt: 'Bag of Kaap Koffie coffee beans',
      };
    },
    mounted() {
      this.isDesktop = window.innerWidth > 600;
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/css/modules/variables.scss';

  .package {
    display: flex;
    flex-direction: column;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px bottom;
    width: 100%;
    @media (min-width: 600px) {
      height: 95vh;
      background-image: url('/images/packaging-desktop.jpg');
    }

    &__image {
      width: 100%;
      height: 600px; /* Adjust the height as needed */

      @media (min-width: 600px) {
        display: none;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-top: 20px;
      padding: 20px;

      @media (min-width: 600px) {
        margin-top: 0;
        margin-bottom: 200px;
        padding-left: 20%;
        width: 80%;
        height: 100%;
      }
    }

    &__heading {
      font: $pageHeading;
    }

    &__paragraph {
      margin-bottom: 10px;
      font: $paragraph;

      @media (min-width: 600px) {
        padding-left: 150px;
      }
    }
  }
</style>
