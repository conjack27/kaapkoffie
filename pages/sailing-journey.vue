<template>
  <div class="journey">
    <div class="journey__top">
      <h1 class="journey__heading">About the journey</h1>
    </div>
    <div class="journey__content">
      <div class="journey__paragraphs">
        <p class="journey__paragraph">
          Our coffee beans are sailed by Kaapkargo, which was founded in 2022.
          To combat pollution within the maritime industry, Kaapkargo offers
          sailing cargo vessels as a sustainable alternative to traditional
          container ships. Kaapkargo strives to support global climate goals by
          utilizing wind power and human effort instead of depending on fossil
          fuels.
        </p>
        <p class="journey__paragraph">
          Founded in 2022, KaapKargo is proud to be more than just a cargo
          company; we are pioneers in sustainable shipping. Breaking free from
          the conventional, we've set sail with the Ide Min, crossing the
          Atlantic Ocean with 60 tons of organic coffee beans from Colombia to
          the heart of Amsterdam. This journey can be made twice a year,
          traveling there and back for approximately five months (depending on
          the wind) But it's not just a journey across the seas; it's a
          commitment to a greener tomorrow. Our second ship, currently under
          construction, will boast a capacity of 120 tons, doubling our curousin
          fostering sustain atia looks like, follow our
          <NuxtLink to="/#voyageDiaries">Voyage Diaries</NuxtLink>
        </p>
        <p class="journey__paragraph">
          The combination of our shipbuilding skills and entrepreneurial
          experience drives our ambition to establish a fleet of sailing cargo
          vessels.
        </p>
        <p class="journey__paragraph">
          Questions or inquiries? Feel free to reach out!
        </p>
      </div>
      <video class="home__video" controls autoplay>
        <source
          src="https://freight.cargo.site/i/X1616416610826741077435515346662/2f6e77d6-b1d0-4c05-916e-cfce25ce302d.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <a
        class="journey__cta btn btn__secondary btn--large"
        target="_blank"
        href="https://kaapkargo.com"
        >KaapKargo</a
      >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        videoSrc:
          'https://freight.cargo.site/i/F1616407343994175185000003739366/Video-kaapkoffie-homepage-480.mov',
        videoOptions:
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      };
    },
  };
</script>

<style lang="scss">
  @import '../assets/css/modules/variables.scss';
  .journey {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    &__top {
      background-image: url('/images/boat.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      padding: 20px;
      align-items: flex-start;
      justify-content: center;
      width: 100%;

      @media (min-width: 600px) {
        height: 82vh;
        padding-top: 200px;
        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    &__heading {
      color: $white-font;
      font: $pageHeading;

      @media (min-width: 600px) {
        color: $black-font;
        font: 72px;
        padding-left: 80px;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;

      @media (min-width: 600px) {
        padding: 20px 100px;
      }
    }

    &__paragraph {
      font-size: 18px;
    }

    &__cta {
      margin-top: 20px;
    }

    &__video {
      margin-top: 50px;
      width: 90%;
      max-width: 800px;
      height: 560px;
    }
  }
</style>
