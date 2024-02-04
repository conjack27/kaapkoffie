<template>
  <div class="success">
    <h1 class="success__heading">Your message was sent!</h1>
  </div>
</template>

<script>
  export default {
    name: 'Thanks',
  };
</script>

<style lang="scss" scoped>
  @import '../assets/css/modules/variables.scss';
  .success {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    background-image: url('/images/message-sent.jpg');
    height: 95vh;
    width: 100%;
    display: flex;

    @media (min-width: 600px) {
      background-position: bottom;
      justify-content: center;
      align-items: center;
    }

    &__heading {
      font: $pageHeading;
    }
  }
</style>
