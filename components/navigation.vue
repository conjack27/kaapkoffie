<template>
    <div class="nav">
        <div  class="nav-menu">
            <!-- <a slot="brand" class="nav-logo" href="#"
                ><h1 class="nav-heading nav-heading--main">
                    Lois Notebaart
                </h1></a
            > -->

            <h2 class="nav-heading" @mouseleave="orderMenuIsVisible = false" @mouseover="orderMenuIsVisible = true">Order</h2>
            <ul class="nav-list" :class="{ visible: orderMenuIsVisible }">
                <li class="nav-item active">
                    <NuxtLink to="/artist">Retail</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/newspapers">Hospitality/Office</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/magazines">Consumer</NuxtLink>
                </li>
            </ul>

            <h2 class="nav-heading" @mouseleave="aboutMenuIsVisible = false" @mouseover="aboutMenuIsVisible = true">About</h2>
            <ul class="nav-list" :class="{ visible: aboutMenuIsVisible }">
                <li class="nav-item active">
                    <NuxtLink to="/haarlem-overdrijft"
                        >About us</NuxtLink
                    >
                </li>
                <li class="nav-item">
                    <NuxtLink to="/kaapkoffie">About the Journey</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/contrast">About the Coffee</NuxtLink>
                </li>
            </ul>

            <h2 class="nav-heading"><NuxtLink to="/photography">Contact</NuxtLink></h2>
            <!-- <ul class="nav-list">
                <li class="nav-item">
                    <NuxtLink to="/photography">1. Photography</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/artworks-and-projects"
                        >2. Artworks & Projects</NuxtLink
                    >
                </li>
                <li class="nav-item">
                    <NuxtLink to="/exhibitions">3. Exhibitions</NuxtLink>
                </li>
            </ul> -->

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Vue 2 with Dynamic Data",
            orderMenuIsVisible: false,
            aboutMenuIsVisible: false,
            items: [], // Dynamic data will be stored here
        };
    },
    mounted() {},
    methods: {},
};
</script>
