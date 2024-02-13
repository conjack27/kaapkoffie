<template>
  <div class="blog">
    <div class="blog__image">
      <img src="/images/blogpost2.jpg" :alt="imageAlt" />
    </div>
    <div class="blog__content">
      <h1 class="blog__heading">{{ heading }}</h1>
      <p class="blog__text">
        {{ text1 }}
      </p>
      <p class="blog__text">
        {{ text2 }}
      </p>
      <p class="blog__text">
        {{ text3 }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        imageAlt: 'Two sailors on a boat holding a bag of coffee beans',
        heading: 'Voyage diaries 2',
        text1:
          'It is hard to know which day it is. We wake up at various times throughout the day. My parents gave me an advent calendar filled with sweets. However, it is hard to know which one to open which day. The calm winds provided us with some downtime, allowing us to work on personal projects, like stitching. Being on board surely improved our creativity. ',
        text2:
          'Later on, we had 30 knots of wind and four-meter waves. We had to prepare the boat, adjust the sails and secure everything, so we could move with the rolling waves. The captain told us many times to be careful, instructing us to walk on the windward side of the ship and providing us with plenty of other safety information. Because of the weather, several repairs were done on the ship.',
        text3:
          "This time, none of us felt sick. We enjoyed the wind after the calm days we’ve had. On Saturday, as we continued our journey towards the other side of the world, we adjusted the ship's time.",
      };
    },
  };
</script>

<style lang="scss">
  .blog {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }

    &__image {
      order: 1;

      @media (min-width: 600px) {
        order: 0;
        flex-basis: 50%;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    &__content {
      order: 0;
      padding: 20px;

      @media (min-width: 600px) {
        order: 1;
        flex-basis: 50%;
      }

      &__heading {
        font-size: 24px;
        margin-bottom: 10px;
      }

      &__text {
        font-size: 16px;
      }
    }
  }
</style>
