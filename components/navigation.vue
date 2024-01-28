<template>
  <div class="nav">
    <div class="nav-blocker"></div>
    <div
      class="nav-menu"
      :class="{
        'nav-menu--visible': navMenuIsVisible,
        'nav-menu--visible--about': aboutMenuIsVisible,
      }"
    >
      <div class="nav__section nav__section--left">
        <div @mouseleave="orderMenuIsVisible = false" class="nav-group">
          <h2
            class="nav-heading"
            @click="orderMenuIsVisible = !orderMenuIsVisible"
            @mouseover="(orderMenuIsVisible = true), (navMenuIsVisible = true)"
            @mouseleave="
              (orderMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            Order
          </h2>
          <ul
            class="nav-list"
            :class="{ 'order-visible': orderMenuIsVisible }"
            @mouseover="(orderMenuIsVisible = true), (navMenuIsVisible = true)"
            @mouseleave="
              (orderMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            <li class="nav-item active">
              <NuxtLink class="nav-item-link" to="/where-to-buy-our-beans"
                >Where to buy our beans</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/where-to-try-our-beans"
                >Where to try our beans</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div @mouseleave="businessMenuIsVisible = false" class="nav-group">
          <h2
            class="nav-heading"
            @click="businessMenuIsVisible = !businessMenuIsVisible"
            @mouseover="
              (businessMenuIsVisible = true), (navMenuIsVisible = true)
            "
            @mouseleave="
              (businessMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            Businesses & Bars
          </h2>
          <ul
            class="nav-list"
            :class="{ 'business-visible': businessMenuIsVisible }"
            @mouseover="
              (businessMenuIsVisible = true), (navMenuIsVisible = true)
            "
            @mouseleave="
              (businessMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/horeca"
                >Get our beans at the office</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/about-the-coffee"
                >Sell our beans</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <NuxtLink to="/">
        <img
          src="../assets/images/logo.png"
          class="nav__logo"
          alt="Kaapkoffie"
          title="Kaapkoffie"
        />
      </NuxtLink>

      <div class="nav__section nav__section--right">
        <div class="nav-group">
          <h2 class="nav-heading">
            <NuxtLink class="nav-heading-link" to="/contact-us"
              >Sailing journey</NuxtLink
            >
          </h2>
        </div>
        <div @mouseleave="aboutMenuIsVisible = false" class="nav-group">
          <h2
            class="nav-heading"
            @click="aboutMenuIsVisible = !aboutMenuIsVisible"
            @mouseover="(aboutMenuIsVisible = true), (navMenuIsVisible = true)"
            @mouseleave="
              (aboutMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            About
          </h2>
          <ul
            class="nav-list nav-list--about"
            :class="{ 'about-visible': aboutMenuIsVisible }"
            @mouseover="(aboutMenuIsVisible = true), (navMenuIsVisible = true)"
            @mouseleave="
              (aboutMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            <li class="nav-item active">
              <NuxtLink class="nav-item-link" to="/about-us">Us</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/about-the-women"
                >The women</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/about-the-coffee"
                >The coffee</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/about-the-journey"
                >The packaging</NuxtLink
              >
            </li>
          </ul>
        </div>

        <div @mouseleave="contactMenuIsVisible = false" class="nav-group">
          <h2
            class="nav-heading"
            @click="contactMenuIsVisible = !contactMenuIsVisible"
            @mouseover="
              (contactMenuIsVisible = true), (navMenuIsVisible = true)
            "
            @mouseleave="
              (contactMenuIsVisible = false), (navMenuIsVisible = false)
            "
          >
            Contact
          </h2>
          <ul
            @mouseover="
              (contactMenuIsVisible = true), (navMenuIsVisible = true)
            "
            @mouseleave="
              (contactMenuIsVisible = false), (navMenuIsVisible = false)
            "
            class="nav-list"
            :class="{ 'contact-visible': contactMenuIsVisible }"
          >
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/about-the-journey"
                >Contact us</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-item-link" to="/about-the-coffee"
                >Work with us</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="nav__brand-motto">Sustainable, fair coffee. Sailed by wind</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderMenuIsVisible: false,
        aboutMenuIsVisible: false,
        businessMenuIsVisible: false,
        contactMenuIsVisible: false,
        navMenuIsVisible: false,
        items: [], // Dynamic data will be stored here
      };
    },
    mounted() {},
    methods: {},
  };
</script>
