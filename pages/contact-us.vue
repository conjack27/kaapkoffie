<template>
  <div class="contact">
    <div class="contact__form">
      <h1 class="contact__form-heading">Contact us</h1>

      <form class="contact__form-fields" netlify action="">
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
        src="https://taupe-mochi-8cdda8.netlify.app/images/cup-of-coffee.png"
        alt="person holding a cup of coffee"
      />
    </div>
    <img
      class="contact__image--desktop"
      src="https://taupe-mochi-8cdda8.netlify.app/images/cup-of-coffee.png"
      alt="person holding a cup of coffee"
    />
    <div class="contact__footer">
      <div class="contact__address"></div>
      <div class="contact__details"></div>
    </div>
  </div>
</template>
