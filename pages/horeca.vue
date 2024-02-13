<template>
  <div class="content">
    <section class="hero hero--half-hero">
      <div class="hero__section hero__section--image">
        <div
          class="hero__section-image"
          style="background-image: url('/images/beans-boat.jpg')"
        ></div>
      </div>
      <div class="hero__section hero__section--text">
        <h1 class="hero__heading">
          Want to drink our coffee in your office, hotel or restaurant?
        </h1>
        <NuxtLink
          to="/contact-us"
          class="office__cta btn btn__primary hero__button"
          >Contact us to find out about the possibilities</NuxtLink
        >
        <button
          class="office__cta btn__secondary btn"
          @click="scrollToMachines"
        >
          View machines
        </button>
      </div>
    </section>
    <section
      class="office__machines office__machines--horeca"
      ref="horecaMachines"
    >
      <div class="office__machines-top">
        <h2 class="office__machines-heading">Koffie matters X KaapKoffie</h2>
        <p class="office__machines-paragraph">
          Are you ready to have coffee that aligns with your environmental and
          humanitarian standards?
        </p>
        <a
          href="https://koffiematters.nl/"
          target="_blank"
          class="office__machines-cta btn__primary btn"
          >Look at more options</a
        >
      </div>
      <div class="office__machines-images">
        <div class="office__machine-image">
          <img
            src="/images/coffee-1-horeca.png"
            alt="Coffee Machine 1"
            class="office__machines-image-img"
          />
          <p class="office__machines-image-text">LA MARZOCCO STRADA AV</p>
        </div>
        <div class="office__machine-image">
          <img
            src="/images/coffee-2-horeca.png"
            alt="Coffee Machine 2"
            class="office__machines-image-img"
          />
          <p class="office__machines-image-text">SAECO IDEA RESTYLE COFFEE</p>
        </div>
        <div class="office__machine-image">
          <img
            src="/images/coffee-3-horeca.png"
            alt="Coffee Machine 3"
            class="office__machines-image-img"
          />
          <p class="office__machines-image-text">BIEPI MC-1 BARISTA PRO</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: 'https://taupe-mochi-8cdda8.netlify.app/',
      };
    },
    methods: {
      scrollToMachines() {
        window.scrollTo({
          top: this.$refs.horecaMachines.offsetTop - 60,
          behavior: 'smooth',
        });
      },
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/modules/variables.scss';
  .office {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-image: url('/images/office-background.jpg');

    &__top {
      height: 85vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;

      @media (min-width: 600px) {
        height: 90vh;
        align-items: flex-start;
        padding-left: 100px;
        padding-top: 100px;
        width: 70%;
      }
    }

    &__top-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 40px;

      @media (min-width: 600px) {
        flex-direction: row;
        justify-content: flex-start;
      }
    }

    &__heading {
      font: $pageHeading;
    }

    &__paragraph {
      font: $paragraph;
    }

    &__cta.btn {
      padding: 10px 40px;
      margin-right: 20px;
      margin-bottom: 20px;

      @media (min-width: 600px) {
        margin-bottom: 20px;
        margin-right: 20px;
      }
    }

    &__machines {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__machines--horeca {
      background-image: url('/images/background-horeca.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    &__machines-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      @media (min-width: 600px) {
        padding-left: 100px;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }

    &__machines-heading {
      font: $pageHeading;
      color: $white-font;
      margin-bottom: 20px;
      text-align: center;
    }

    &__machines-paragraph {
      font: $paragraph;
      text-align: center;
    }

    &__machines-cta {
      padding: 10px 20px;
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: center;

      @media (min-width: 600px) {
        align-self: center;
      }
    }

    &__machines-images {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media (min-width: 600px) {
        flex-direction: row;
        padding-bottom: 50px;
        flex-wrap: nowrap;
      }
    }

    &__machines-image {
      flex: 0 1 100%;

      @media (min-width: 600px) {
        flex: 0 1 33%;
      }
    }

    &__machines-image-img {
      width: 100%;
      height: 300px;

      @media (min-width: 600px) {
        height: 450px;
      }
    }

    &__machines-image-text {
      font: $paragraph;
      text-align: center;
      margin-top: 0;
    }
  }
</style>
