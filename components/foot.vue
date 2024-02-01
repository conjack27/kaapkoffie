<template>
  <footer class="footer">
    <div class="footer__section">
      <h3 class="footer__section-title">Info</h3>
      <ul class="footer__section-list">
        <li class="footer__section-item">Address: 123 Main St, City</li>
        <li class="footer__section-item">Phone: 123-456-7890</li>
        <li class="footer__section-item">Business Number: 123456789</li>
      </ul>
    </div>
    <div class="footer__section">
      <h3 class="footer__section-title">Contact</h3>
      <ul class="footer__section-list">
        <li class="footer__section-item">WhatsApp: 123-456-7890</li>
        <li class="footer__section-item">Email: example@example.com</li>
        <li class="footer__section-item">Instagram: @example</li>
      </ul>
      <div class="footer__social-icons">
        <!-- Add social icons with links here -->
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
          <NuxtLink class="footer__section-link">Kaap de Groene hoop</NuxtLink>
        </li>
        <li class="footer__section-item">
          <NuxtLink class="footer__section-link">DID it </NuxtLink>
        </li>
        <li class="footer__section-item">
          <NuxtLink class="footer__section-link">IDOrganic</NuxtLink>
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
    /* Add styling for socia l icons here */
  }
</style>
