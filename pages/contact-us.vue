<template>
  <div class="contact">
    <div class="contact__form">
      <h1 class="contact__form-heading">Contact us</h1>

      <form class="contact__form-fields" data-netlify="true" action="/thanks">
        <div class="contact__form-section">
          <label class="contact__label" for="name">Name*:</label>
          <input class="contact__input" type="text" name="name" id="name" />
        </div>
        <div class="contact__form-section">
          <label class="contact__label" for="company">Company: </label>
          <input
            class="contact__input"
            type="text"
            name="company-name"
            id="company"
          />
        </div>
        <div class="contact__form-section">
          <label class="contact__label" for="email">Email*: </label>
          <input class="contact__input" type="email" name="email" id="email" />
        </div>
        <div class="contact__form-section">
          <label class="contact__label" for="phone">Phone number: </label>
          <input class="contact__input" type="phone" name="phone" id="phone" />
        </div>
        <div class="contact__form-section">
          <label class="contact__label" for="message">Message*: </label>
        </div>
        <div class="contact__form-section">
          <textarea
            class="contact__input contact__input--big"
            name="message"
            id="message"
          ></textarea>
        </div>
        <input class="contact__form-button" type="submit" value="Send" />
      </form>
      <img
        class="contact__image--mobile"
        src="/images/cup-of-coffee.png"
        alt="imageAlt"
      />
    </div>
    <img
      class="contact__image--desktop"
      src="/images/cup-of-coffee.png"
      :alt="imageAlt"
    />
    <div class="contact__footer">
      <div class="contact__address"></div>
      <div class="contact__details"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        imageAlt: 'Person holding a cup of coffee',
      };
    },
    mounted() {},
  };
</script>

<style lang="scss"></style>
