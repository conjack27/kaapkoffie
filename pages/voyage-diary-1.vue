<template>
  <div class="blog">
    <div class="blog__image">
      <img src="/images/blogpost1.jpg" :alt="imageAlt" />
    </div>
    <div class="blog__content">
      <h1 class="blog__heading">{{ heading }}</h1>
      <p class="blog__text">
        {{ text1 }}
      </p>
      <p class="blog__text">
        {{ text2 }}
      </p>
      <p class="blog__text">
        {{ text3 }}
      </p>
      <p class="blog__text">
        {{ text4 }}
      </p>
      <p class="blog__text">
        {{ text5 }}
      </p>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Team 1</th>
            <th>Team 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00-04</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <td>04-08</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <td>08-14</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <td>14-20</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <td>20-00</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <td>00-04</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <td>04-08</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <td>08-14</td>
            <td></td>
            <td>X</td>
          </tr>
          <tr>
            <td>14-20</td>
            <td>X</td>
            <td></td>
          </tr>
          <tr>
            <td>20-00</td>
            <td></td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
      <p class="blog__text">
        {{ text6 }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageSrc: 'https://taupe-mochi-8cdda8.netlify.app/',
        imageAlt: 'Two sailors on a boat holding a bag of coffee beans',
        heading: 'Voyage diaries 1',
        text1:
          'Monday morning, the Tres Hombres left the harbor, it was beautiful to see the boat leaving with their sails. We knew that it will soon be our time. Finally, we left tuesday around 5 pm. The first day was really difficult. The waves around us were up to 6 meters high. Half of the crew was sick. We finally set the sail, and the wind was good for one day.',
        text2:
          'The day after we had no wind, but thanks to that we had the opportunity to see 2 whales around the boat during the whole day. They were shy, but it was amazing to see this big animal!',
        text3:
          "Now it's Sunday, we are sailing near the Spanish cap finisterre. During the lunch we shared a nice moment with the whole crew, having a BBQ in the sun.",
        text4:
          'Without any big trouble we made it through the biscay, unlike all previous experiences and stories that we have been told.',
        text5:
          'We have a daily routine on board. We have two teams of watches and we switch like this :',
        text6:
          'It means one day we are on watch in the morning, the day after in the afternoon, and one or two times at night.',
      };
    },
  };
</script>

<style lang="scss">
  .blog {
    display: flex;
    flex-direction: column;

    @media (min-width: 600px) {
      flex-direction: row;
    }

    &__image {
      order: 1;

      @media (min-width: 600px) {
        order: 0;
        flex-basis: 50%;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    &__content {
      order: 0;
      padding: 20px;

      @media (min-width: 600px) {
        order: 1;
        flex-basis: 50%;
      }

      &__heading {
        font-size: 24px;
        margin-bottom: 10px;
      }

      &__text {
        font-size: 16px;
      }
    }
  }
</style>
