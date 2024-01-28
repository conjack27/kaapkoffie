<template>
  <div class="content">
    <div class="hero hero--coffee-sacks hero--full-screen">
      <div class="hero__heading-container">
        <h1 class="hero__heading hero__heading--1">
          Do you want to try our coffee at home?
        </h1>
        <button class="btn btn__primary" @click="scrollToMap">
          See where you can buy us
        </button>
      </div>
    </div>
    <div class="content__page">
      <div class="content__header">
        <h2 class="content__heading">Retail locations KAAPkoffie beans.</h2>
        <nuxtLink to="/contact-us" class="btn btn__primary"
          >Do you want to sell our beans?</nuxtLink
        >
      </div>
    </div>
    <div class="content__map-container" ref="mapElement">
      <div class="content__map"></div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
    methods: {
      scrollToMap() {
        const mapElement = this.$refs.mapElement;
        const offsetTop = mapElement.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      },
    },
  };
</script>
