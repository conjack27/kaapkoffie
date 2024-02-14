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
          "It is difficult to keep track of the days on the ship. We wake up at different times throughout the day. My parents gave me an advent calendar filled with sweets, but it's challenging to determine which one to open 	each day. Luckily, we have had some moments of downtime thanks to the calm winds. During this time, we've been able to work on personal projects, such as stitching, and being on board has definitely enhanced 	our creativity.",
        text2:
          'Later, we encountered strong winds of 30 knots and four-meter waves. We had to prepare the boat, adjust the sails, and secure everything to ensure we could navigate the rolling waves. The captain repeatedly reminded us to be cautious, instructing us to walk on the windward side of the ship and providing us with plenty of other safety information. Due to the weather conditions, several repairs had to be made on the ship.',
        text3:
          "Fortunately, none of us felt seasick this time. We welcomed the wind after the calm days we had experienced. On Saturday, as we continued our journey to the other side of the world, we adjusted the ship's time.",
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
