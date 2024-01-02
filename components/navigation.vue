<template>
  <div class="nav">
    <div class="nav-blocker"></div>
    <div class="nav-menu">
      <!-- <a slot="brand" class="nav-logo" href="#"
                ><h1 class="nav-heading nav-heading--main">
                    Kaap koffie
                </h1></a
            > -->
      <div @mouseleave="orderMenuIsVisible = false" class="nav-item">
        <h2
          class="nav-heading"
          @click="orderMenuIsVisible = !orderMenuIsVisible"
          @mouseover="orderMenuIsVisible = true"
        >
          Order
        </h2>
        <ul class="nav-list" :class="{ visible: orderMenuIsVisible }">
          <li class="nav-item active">
            <NuxtLink class="nav-item-link" to="/retail">Retail</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-item-link" to="/hospitality-office"
              >Hospitality/Office</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-item-link" to="/consumer">Consumer</NuxtLink>
          </li>
        </ul>
      </div>
      <div @mouseleave="aboutMenuIsVisible = false" class="nav-item">
        <h2
          class="nav-heading"
          @click="aboutMenuIsVisible = !aboutMenuIsVisible"
          @mouseover="aboutMenuIsVisible = true"
        >
          About
        </h2>
        <ul class="nav-list" :class="{ visible: aboutMenuIsVisible }">
          <li class="nav-item active">
            <NuxtLink class="nav-item-link" to="/about-us">About us</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-item-link" to="/about-the-journey"
              >About the Journey</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-item-link" to="/about-the-coffee"
              >About the Coffee</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="nav-item">
        <h2 class="nav-heading">
          <NuxtLink class="nav-item-link" to="/contact-us">Contact</NuxtLink>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'Vue 2 with Dynamic Data',
        orderMenuIsVisible: false,
        aboutMenuIsVisible: false,
        items: [], // Dynamic data will be stored here
      };
    },
    mounted() {},
    methods: {},
  };
</script>
