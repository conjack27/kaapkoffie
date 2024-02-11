<template>
  <div class="faq">
    <h1 class="faq__heading">Frequently Asked Questions</h1>
    <div class="faq__coffee-beans faq__coffee-beans--top"></div>
    <div class="faq__content">
      <div class="faq__block">
        <strong class="faq__question">What is specialty coffee?</strong>
        <p class="faq__answer">
          Specialty coffee refers to high-quality coffee that is carefully
          produced and processed. Specialty coffee typically involves beans
          grown in specific regions with distinct climates and altitudes,
          contributing to the coffee's taste profile. The grading of specialty
          coffee often considers factors like bean size, lack of defects, and
          flavor complexity. Dedicated roasting techniques further contribute to
          the beans' qualities, resulting in a premium and distinct coffee
          experience. In essence, specialty coffee represents a commitment to
          excellence throughout the entire coffee production chain.
        </p>
      </div>
      <div class="faq__block">
        <strong class="faq__question">Is Kaapkoffie organic?</strong>
        <p class="faq__answer">Yes! All our coffee is organic.</p>
        <p class="faq__answer">
          For coffee to be considered organic, not only our coffee beans must be
          organically certified, but also our entire supply chain, including
          farmers, transportation, roaster, and storage. Kaapkoffie adheres to
          these regulations and has been bio-certified by Skal Biocontrole.
        </p>
      </div>
      <div class="faq__block">
        <strong class="faq__question"
          >What type of packaging do you have?</strong
        >
        <p class="faq__answer">
          At Kaapkoffie, we aim for sustainability throughout our entire supply
          chain, including our packaging. That's why we use biodegradable and
          reusable packaging. Biodegradable means our packaging can be broken
          down by nature's microorganisms.
        </p>
      </div>
      <div class="faq__block">
        <strong class="faq__question">Where do you roast your coffee?</strong>
        <p class="faq__answer">
          We roast our coffee at ID Organics in Zaandam, Netherlands The round
          trip to Colombia takes about five months.Roasting locally ensures the
          freshness of our beans. IDorganics is an organic food manufacturer.
          Approximately 40% of their employees have a disability or are
          otherwise distanced from the labor market. Each employee has a
          personal buddy and a protected workplace, ensuring a safe and
          enjoyable work environment.
        </p>
      </div>
      <div class="faq__block">
        <strong class="faq__question">Why a female farmer corporation?</strong>
        <p class="faq__answer">
          At Kaapkoffie, our collaboration with a female-led corporation goes
          beyond business. Many of the women behind this provider for their
          tamily Additionaly some face societal expectations urging women to
          stay at home. Wete dedicated to supporting these women, helping them
          build a secure future for themselves and their families.
        </p>
      </div>
    </div>
    <div class="faq__coffee-beans faq__coffee-beans--bottom"></div>
  </div>
</template>

<style lang="scss">
  @import '../assets/css/modules/variables.scss';
  .faq {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 10%;
    position: relative;

    @media (min-width: 600px) {
      padding: 20px 20%;
    }

    &__heading {
      font: $pageHeading;
      margin-bottom: 20px;
      z-index: 1000;

      @media (min-width: 600px) {
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &__block {
      margin-bottom: 10px;
    }

    &__coffee-beans {
      width: 600px;
      background-image: url('/images/koffie.png');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      margin-bottom: 20px;
      position: absolute;
      z-index: 1000;

      &--top {
        height: 200px;
        top: 0px;
        left: 0px;
        @media (min-width: 600px) {
          height: 300px;
          top: 296px;
          left: unset;
          right: -100px;
          transform: rotate(90deg);
        }
      }

      &--bottom {
        height: 150px;
        bottom: -100px;
        right: 0px;
        transform: rotate(180deg);

        @media (min-width: 600px) {
          height: 300px;
          bottom: -10px;
          right: unset;
          left: -170px;
          transform: rotate(90deg);
        }
      }
    }
  }
</style>
