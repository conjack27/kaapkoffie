<template>
  <div class="office">
    <section class="office__top">
      <h1 class="office__heading">Want to drink our coffee in the office?</h1>
      <p class="office__paragraph">
        Besides our coffee being organic, it has a Q-grade above 80. This means
        we also offer specialty coffee, considered one of the highest qualities
        available.
      </p>
      <p class="office__paragraph">
        Whether you have an existing coffee machine or need a new one, together
        with Koffie Matters, we will find the perfect solution for your
        business.
      </p>
      <p class="office__paragraph">
        Are you ready to have coffee that aligns with your environmental and
        humanitarian standards?
      </p>
      <div class="office__top-buttons">
        <router-link to="/contact-us" class="office__cta btn__primary btn"
          >Get in touch!</router-link
        >
        <button
          class="office__cta btn__secondary btn"
          @click="scrollToMachines"
        >
          View machines
        </button>
      </div>
    </section>
    <section class="office__machines" ref="officeMachines">
      <div class="office__machines-top">
        <h2 class="office__machines-heading">Koffie matters X KaapKoffie</h2>
        <p class="office__machines-paragraph">
          Coffee snobs or caffeeine obsessed collegues? A big or a small office?
        </p>
        <p class="office__machines-paragraph">
          Here are some examples of the many options we can provide together
          with Koffie Matters.
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
            src="/images/coffee-1.png"
            alt="Coffee Machine 1"
            class="office__machines-image-img"
          />
          <p class="office__machines-image-text">Gagia milano la solare</p>
        </div>
        <div class="office__machine-image">
          <img
            src="/images/coffee-2.png"
            alt="Coffee Machine 2"
            class="office__machines-image-img"
          />
          <p class="office__machines-image-text">Slayer espresso V3</p>
        </div>
        <div class="office__machine-image">
          <img
            src="/images/coffee-3.png"
            alt="Coffee Machine 3"
            class="office__machines-image-img"
          />
          <p class="office__machines-image-text">Biepi sara solid</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        imageAlt: 'Bag of Kaap Koffie coffee beans',
      };
    },
    methods: {
      scrollToMachines() {
        window.scrollTo({
          top: this.$refs.officeMachines.offsetTop - 60,
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

    &__cta {
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
