<template>
  <div class="error">
    <div class="error__words">
      <span
        class="error__word"
        v-for="(error, index) in errorWords"
        :key="index"
        >{{ error }}</span
      >
    </div>

    <nuxt-link class="error__link" to="/">Back to home</nuxt-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'ErrorPage',
        errorWords: [
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
          'ERROR',
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/modules/variables.scss';
  .error {
    display: flex;
    flex-direction: column;
    background-image: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-image: url('/images/error-page.jpg');
    height: 95vh;
    width: 100%;
    overflow: hidden;

    &__words {
      display: flex;
      justify-content: center;
      margin-top: 60px;
      flex-wrap: nowrap;
      padding: 20px;
      width: 100%;
      font: $pageHeading;
    }

    &__word {
      margin: 0 15px;
    }

    &__link {
      margin-top: 500px;
      font: $heading;
      color: $black-font;
      padding: 10px 50px;
      text-decoration: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        text-decoration: underline;
      }

      @media (min-width: 600px) {
        margin-top: 50px;
      }
    }
  }
</style>
