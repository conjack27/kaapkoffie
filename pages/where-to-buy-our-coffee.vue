<template>
  <div class="content">
    <div
      class="hero hero--coffee-sacks hero--full-screen"
      style="background-image: url('/images/2-zaks2.jpg')"
    >
      <div class="hero__heading-container">
        <h1 class="hero__heading hero__heading--1">
          Do you want to try our coffee at home?
        </h1>
        <button class="btn btn__primary" @click="scrollToMap">
          See where you can buy us
        </button>
      </div>
    </div>
    <div class="content__page" ref="contactUsHeader">
      <div class="content__header">
        <h2 class="content__heading">Retail locations Kaap Koffie beans.</h2>
        <nuxtLink to="/contact-us" class="btn btn__primary"
          >Do you want to sell our beans?</nuxtLink
        >
      </div>
    </div>
    <div class="content__map-container" ref="mapElement">
      <div class="content__map">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1cKrl8OHFavJSachif6Oo5zb_BbLawEk&ehbc=2E312F&noprof=1"
          style="position: relative; top: -67px; border: none"
          width="640"
          height="540"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
    methods: {
      scrollToMap() {
        window.scrollTo({
          top: this.$refs.contactUsHeader.offsetTop - 40,
          behavior: 'smooth',
        });
      },
    },
  };
</script>
