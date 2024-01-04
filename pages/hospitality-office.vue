<template>
  <div class="horeca">
    <h1 class="horeca__heading">
      Want to drink our coffee in your office, hotel or restaurant?
    </h1>
    <p class="text__paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sequi rem
      consequatur, quaerat ipsam porro ipsum velit fugit, voluptatem provident
      molestias? Facere sit corrupti nisi quibusdam error excepturi repellat
      amet?
    </p>
    <div class="horeca__cta">
      Contact us to find out about the possibilities
    </div>
  </div>
  <img
    :src="`${imageUrl}rope-left.png`"
    alt="rope left"
    class="horeca__rope-left"
  />
  <img
    :src="`${imageUrl}koffie-zak.png`"
    alt="coffee sack"
    class="horeca__koffie-zak"
  />
  <img
    :src="`${imageUrl}rope-right.png`"
    alt="rope right"
    class="horeca__rope-right"
  />
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
