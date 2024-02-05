<template>
  <div class="journey">
    <div class="journey__top">
      <h1>About the journey</h1>
    </div>
    <div class="journey__content">
      <div class="journey__paragraphs">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Nulla facilisi. Sed euismod mauris non tellus tincidunt, eu aliquet
          nisl ultrices.
        </p>
        <p>
          Proin auctor, nunc id aliquam tincidunt, nisl nunc ultrices nunc, id
          aliquam nisl nunc ut nunc.
        </p>
        <p>
          Donec auctor, nunc id aliquam tincidunt, nisl nunc ultrices nunc, id
          aliquam nisl nunc ut nunc.
        </p>
      </div>
      <a class="journey__cta" href="https://kaapkargo.com">Learn More</a>
    </div>
    <div class="journey__video">
      <video controls>
        <source src="" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<style lang="scss">
  .journey {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    &__top {
      background-image: url('path/to/background-image.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      h1 {
        color: white;
        font-size: 2rem;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 2rem;

      &__paragraphs {
        margin-bottom: 2rem;

        p {
          margin-bottom: 1rem;
        }
      }

      &__cta {
        padding: 1rem 2rem;
        background-color: blue;
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }

    &__video {
      display: flex;
      justify-content: center;
      margin-top: 2rem;

      video {
        max-width: 100%;
      }
    }
  }
</style>
