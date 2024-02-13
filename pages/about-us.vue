<template>
  <div class="content">
    <div class="hero hero--half-hero">
      <div class="hero__section hero__section--image">
        <div
          class="hero__section-image"
          style="background-image: url('/images/waving.jpg')"
        ></div>
      </div>
      <div class="hero__section hero__section--text">
        <h1 class="hero__heading">
          {{ title }}
        </h1>

        <blockquote class="hero__section-quote">
          {{ quote1 }}
        </blockquote>
        <p class="hero__section-paragraph">
          Almost all coffee beans are transported by container ships, making the
          coffee industry a highly polluting industry.
        </p>
      </div>
    </div>

    <div class="text-asset">
      <div class="text-asset__image-container">
        <img
          class="text-asset__image"
          src="/images/father-and-son.jpg"
          :alt="imageAlt"
        />
      </div>
      <div class="text-asset__text-container">
        <h2 class="text-asset__heading">{{ subTitle }}</h2>
        <p class="text-asset__text">{{ whatThisMeans1 }}</p>
        <p class="text-asset__text">{{ whatThisMeans2 }}</p>
        <p class="text-asset__text">{{ whatThisMeans3 }}</p>
        <p class="text-asset__text">{{ whatThisMeans4 }}</p>
        <p class="text-asset__text">{{ whatThisMeans5 }}</p>
        <p class="text-asset__text">{{ whatThisMeans6 }}</p>
        <NuxtLink to="/work-with-us" class="btn btn__secondary"
          >Join our team!</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'About us',
        subTitle: 'What now?',
        whatThisMeans1:
          'Fortunately, this does not mean that you should stop enjoying coffee.',
        whatThisMeans2:
          'At Kaap Koffie, we transport our organic coffee beans from Colombia to Amsterdam by sailing ship, using 100% wind power. This means our coffee beans cross the Atlantic Ocean emission-free.',
        whatThisMeans3:
          'In line with our commitment to global climate goals, we prioritize the well-being of women. We purchase our coffee beans directly from a cooperative of female farmers, ensuring they receive a fair price. This enables them to build a better future for themselves and their families.',
        whatThisMeans4:
          'At Kaap Koffie, we are dedicated to building a sustainable shipping industry. That is why our ship, the Ide Min, crosses the Atlantic Ocean twice a year, carrying 60 tons. We have also started the rebuild of our second ship, capable of carrying 120 ton.',
        whatThisMeans5:
          'Partnering with the University of Amsterdam, we are actively working to grow our business while maintaining our green supply chain and humanitarian principles. From planting the coffee bean seed to that first sip of coffee, we are committed to making a positive change at every step.',
        whatThisMeans6: 'Enjoy your coffee, guilt free!',
        quote1:
          "'The maritime industry is one of the most polluting industries in the world, because it relies on heavy fuel oil.' - CE Delft 2023",
        quoteSubtext:
          'Almost all coffee beans are transported by container ships, making the coffee industry a highly polluting industry.',

        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        imageAlt: 'Two sailors on a boat holding a bag of coffee beans',
      };
    },
    mounted() {},
  };
</script>

<style lang="scss"></style>
