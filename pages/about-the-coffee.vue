<template>
  <div class="hero__section">
    <div class="hero hero--coffee hero--full-screen">
      <div class="hero__notes">
        <h2 class="hero__sub-heading">About the Coffee</h2>
        <h4 class="hero__notes-heading">Roast profile</h4>
        <p class="hero__notes-text">Light toast, Medium roast & Dark roast</p>
        <h4 class="hero__notes-heading">Recommended Use</h4>
        <p class="hero__notes-text">Drip, Pour-Over</p>
        <h4 class="hero__notes-heading">Cupping Notes</h4>
        <p class="hero__notes-text">
          Well-balanced acidity and body. Smooth taste profile with a somewhat
          nutty finish
        </p>
      </div>
      <h1 class="hero__heading">Where are they grown?</h1>
    </div>
    <div class="text">
      <p class="text__paragraph">Sample text</p>
      <p class="text__paragraph">Sampe text</p>
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
          'https://images.unsplash.com/photo-1570828066702-7706220a65f6?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
