<template>
  <div class="coffee">
    <section class="coffee__top">
      <div class="coffee__content">
        <h1 class="coffee__heading">About the coffee.</h1>
        <p class="coffee__paragraph-title">Roast Profile</p>
        <p class="coffee__paragraph">Light Roast, Medium Roast & Dark•Roast</p>
        <p class="coffee__paragraph-title">Recommended Use</p>
        <p class="coffee__paragraph">Drip, Pour-Over</p>
        <p class="coffee__paragraph-title">Cupping Notes</p>
        <p class="coffee__paragraph">
          Well balánced acidity and body. Smooth taste profile with a somewhat
          nutty finish.
        </p>
      </div>
    </section>
    <div class="coffee__section-bottom">
      <img
        src="/images/jungle.jpg"
        alt="Lush, verdant jungle"
        class="coffee__image"
      />
      <div class="coffee__text">
        <h2 class="coffee__heading coffee__heading--bottom">
          And where are they grown?
        </h2>
        <p class="coffee__paragraph coffee__paragraph--bottom">
          Our Colombia Organic Sierra Nevada is produced by just 78 family
          growers, located within the isolated Sierra Nevada de Santa Marta
          coastal mountain range in Northern Colombia's Magdalena Department.
          Their co-op, The CooAgroNevada, also known as The Cooperative of
          Sierra Nevada and Santa Marta Coffee Growers and Farmers, unites these
          coffee growing families from 19 different villages with the combined
          goals to improve social welfare, economic growth, quality of coffee
          and eco-tourism while preserving the region's picturesque peaks,
          rivers and valleys. The Colombia Organic Sierra Nevada is also
          designated as EP or "European Prep" — in the cup it achieves a very
          nice balance between acidity and body while delivering an overall
          smooth and
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

  .coffee {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 600px) {
      background-position: bottom;
    }

    &__top {
      padding: 20px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      background-image: url('/images/about-the-coffee.jpg');

      @media (min-width: 600px) {
        height: 90vh;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 20px;
      padding: 20px;

      @media (min-width: 600px) {
        margin-top: 0;
        padding-left: 20px;
        height: 100%;
      }
    }

    &__heading {
      font: $pageHeading;
      color: $black-font;
      margin-bottom: 200px;

      @media (min-width: 600px) {
        margin-bottom: 0;
      }
    }

    &__paragraph-title {
      color: $black-font;
      font: $paragraph;
      font-weight: bold;
      margin-bottom: 0;
      font-size: 24px;

      @media (min-width: 600px) {
        width: 30%;
      }
    }

    &__paragraph {
      margin-bottom: 30px;
      margin-top: 0;
      font: $paragraph;
      color: $black-font;

      @media (min-width: 600px) {
        font-size: 24px;
        width: 30%;
      }
    }

    &__section-bottom {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      background-color: #000;

      @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    }

    &__heading--bottom {
      font: $pageHeading;
      color: $white-font;
      margin-bottom: 20px;
      margin-top: 0;

      @media (min-width: 600px) {
        margin-left: -200px;
      }
    }

    &__image {
      width: 100%;
      height: 300px;
      order: 2;

      @media (min-width: 600px) {
        display: block;
        flex: 0 1 50%;
        height: 80%;
        width: 80%;
        order: 1;
      }
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      order: 1;
      padding: 20px;
      width: 100%;

      @media (min-width: 600px) {
        flex: 0 1 50%;
        order: 2;
      }
    }

    &__paragraph--bottom {
      font: $paragraph;
      margin-top: 0;
      color: $white-font;

      @media (min-width: 600px) {
        width: 100%;
      }
    }
  }
</style>
