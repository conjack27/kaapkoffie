<template>
  <footer class="footer">
    <div class="footer__section">
      <h3 class="footer__section-title">Info</h3>
      <ul class="footer__section-list">
        <li class="footer__section-item">Ms. van Riemsdijkweg 51</li>
        <li class="footer__section-item">1033RC</li>
        <li class="footer__section-item">Amsterdam Noord, NDSM</li>
        <li class="footer__section-item">Nederland</li>
        &nbsp;
        <li class="footer__section-item">KVK: 85547395</li>
        <li class="footer__section-item">BTW: NL863662304B01</li>
      </ul>
    </div>
    <div class="footer__section">
      <h3 class="footer__section-title">Contact</h3>
      <ul class="footer__section-list">
        <li class="footer__section-item">WhatsApp: +31 6 42618212</li>
        <li class="footer__section-item">
          Email: <a href="mailto:info@kaapkoffie.com">info@kaapkoffie.com</a>
        </li>
        <li class="footer__section-item">
          Instagram:
          <a href="https://www.instagram.com/kaapkoffie">@kaapkoffie</a>
        </li>
      </ul>
      <div class="footer__social-icons">
        <a
          class="footer__social-icon"
          href="https://www.instagram.com/kaapkoffie"
          target="_blank"
        >
          <img
            class="footer__social-image"
            src="../assets/images/instagram.svg"
            alt="Instagram"
          />
        </a>
        <a
          class="footer__social-icon"
          href="https://www.linkedin.com/company/kaap-koffie/about/"
          target="_blank"
        >
          <img
            class="footer__social-image"
            src="../assets/images/linkedin.svg"
            alt="LinkedIn"
          />
        </a>
        <a
          class="footer__social-icon"
          href="https://www.facebook.com/kaapkoffie"
          target="_blank"
        >
          <img
            class="footer__social-image"
            src="../assets/images/facebook.svg"
            alt="Facebook"
          />
        </a>
      </div>
    </div>
    <div class="footer__section">
      <h3 class="footer__section-title">Support</h3>
      <ul class="footer__section-list">
        <li class="footer__section-item">
          <NuxtLink class="footer__section-link" to="/faq">FAQ</NuxtLink>
        </li>
        <li class="footer__section-item">
          <NuxtLink class="footer__section-link" to="/work-with-us"
            >Work at Kaap Koffie</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="footer__section">
      <h3 class="footer__section-title">Partnerships</h3>
      <ul class="footer__section-list">
        <li class="footer__section-item">
          <NuxtLink class="footer__section-link" to="https://kaapkargo.com/"
            >Kaap kargo</NuxtLink
          >
        </li>
        <li class="footer__section-item">
          <NuxtLink
            to="https://kaapdegroenehoop.nl"
            class="footer__section-link"
            >Kaap de Groene hoop</NuxtLink
          >
        </li>
        <li class="footer__section-item">
          <NuxtLink
            to="https://en.diditorganic.nl/"
            class="footer__section-link"
            >DID it
          </NuxtLink>
        </li>
        <li class="footer__section-item">
          <NuxtLink
            to="https://www.idorganics.com/nl/"
            class="footer__section-link"
            >IDorganic</NuxtLink
          >
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss">
  .footer {
    background-color: #3a6d9c;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    z-index: 1000;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: flex-start;
      order: 1;
      flex: 1;
    }
  }

  .footer__section {
    flex: 1;
    margin-right: 20px;
    z-index: 1001;
  }

  .footer__section-title {
    font-size: 24px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .footer__section-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer__section-item {
    margin-bottom: 5px;

    a {
      color: #ffffff;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer__section-link {
    color: #ffffff;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .footer__social-icons {
    margin-top: 30px;
    display: flex;
  }

  .footer__social-icon {
    margin-right: 10px;
  }

  .footer__social-image {
    display: flex;
    flex-direction: column;
    max-width: 40px;
    height: auto;
  }
</style>
