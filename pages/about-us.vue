<template>
  <div class="hero__section">
    <div class="hero hero--journey">
      <h1 class="hero__heading">About the Journey</h1>
    </div>
    <div class="text">
      <p class="text__paragraph">
        KaapKargo was founded in 2022 to make the maritime industry more
        sustainable.
      </p>
      <p class="text__paragraph">
        We have the ambition to establish a fleet of sailing cargo vessels. Each
        ship makes two crossings per year, creating a reliable and logistical
        scheduled service.
      </p>
    </div>
    <div class="text-asset">
      <div class="text-asset__text-container">
        <h2 class="text-asset__heading">{{ title }}</h2>
        <p class="text-asset__text">{{ text }}</p>
      </div>
      <div class="image-container">
        <img class="text-asset__image" :src="imageSrc" :alt="imageAlt" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Sample Title',
        text: 'Sample Text',
        imageSrc:
          'https://taupe-mochi-8cdda8.netlify.app/images/father-and-son.jpg',
        imageAlt: 'Image Alt Text',
      };
    },
    mounted() {},
  };
</script>

<style lang="scss">
  .text-asset {
    background-color: #f9f8f9;
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }

  .text-asset__text-container {
    order: 2;
    padding: 15px;

    @media (min-width: 600px) {
      order: 1;
      flex: 1;
    }
  }

  .image-container {
    padding-top: 15px;
    order: 1;
    width: 100%;
    height: auto;

    @media (min-width: 600px) {
      order: 2;
      flex: 1;
    }
  }

  .text-asset__image {
    width: 100%;
    height: auto;
  }

  .text-asset__heading {
    margin: 0;
  }
</style>
