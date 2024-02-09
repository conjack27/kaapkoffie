<template>
  <div class="content">
    <section class="hero hero--half-hero">
      <div class="hero__section hero__section--image">
        <div
          class="hero__section-image"
          style="background-image: url('/images/my-hand.jpg')"
        ></div>
      </div>
      <div class="hero__section hero__section--text">
        <h1 class="hero__heading">
          Want to drink our coffee in your office, hotel or restaurant?
        </h1>

        <p class="hero__section-paragraph">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex e
        </p>
        <NuxtLink to="/contact-us" class="btn btn__primary"
          >Contact us to find out about the possibilities</NuxtLink
        >
      </div>
    </section>
    <section class="office__machines office__machines--horeca">
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
  };
</script>
