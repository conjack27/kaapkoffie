<template>
  <div>
    <div class="horeca">
      <h1 class="horeca__heading">
        Want to drink our coffee in your office, hotel or restaurant?
      </h1>

      <p class="text__paragraph">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        vel lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate vel lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate vel
      </p>
      <div class="horeca__cta">
        <NuxtLink to="/contact-us">
          Contact us to find out about the possibilities
        </NuxtLink>
      </div>
    </div>

    <img
      :src="`${imageUrl}koffie-zak.png`"
      alt="coffee sack"
      class="horeca__koffie-zak"
    />
    <img
      :src="`${imageUrl}loops.png`"
      alt="boat rope loops"
      class="horeca__ropes"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: 'https://taupe-mochi-8cdda8.netlify.app/images/',
      };
    },
  };
</script>
