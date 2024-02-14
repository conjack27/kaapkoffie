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
        <tr>
          <th>Time</th>
          <th>Team 1</th>
          <th>Team 2</th>
        </tr>
        <tr>
          <td>00-04</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>04-08</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>08-14</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>14-20</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>20-00</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>00-04</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>04-08</td>
          <td>X</td>
          <td>X</td>
        </tr>
        <tr>
          <td>08-14</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>14-20</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>20-00</td>
          <td></td>
          <td></td>
        </tr>
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
          'Monday morning. It was a beautiful to see the boat sailing away with its sails. We knew that our turn would come soon. Finally, on Tuesday around 5 pm, we set off. The first day was extremely challenging as the 		waves around us reached 6 meters in height. Half of the crew experienced seasickness. Eventually, we hoisted the sails, and the wind was favourable for one day.',
        text2:
          'The following day, we encountered a complete absence of wind. However, this presented us with the opportunity to witness two whales swimming around the boat throughout the entire day. Though they were shy, it	was truly awe-inspiring to observe these magnificent creatures!',
        text3:
          "Now it's Sunday, and we are sailing near the Spanish Cap Finisterre. During lunch, the entire crew shared a delightful moment, enjoying a BBQ under the sun.",
        text4:
          'Fortunately, we successfully navigated through the Biscay without encountering any major issues, contrary to the previous experiences and stories we had heard.',
        text5:
          'Our daily routine on board follows a specific schedule. We have two teams for watch duty, and we alternate as follows:',
        text6:
          'This means that one day we are on watch in the morning, the next day in the afternoon, and one or two times during the night.',
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
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
