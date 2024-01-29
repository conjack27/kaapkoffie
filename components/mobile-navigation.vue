<template>
  <div class="mobile-navigation">
    <div class="black-bar">
      <NuxtLink to="/">
        <img
          src="../assets/images/logo.png"
          class="nav__logo"
          alt="Kaapkoffie"
          title="Kaapkoffie"
        />
      </NuxtLink>
      <div class="hamburger" @click="toggleMenu">
        <div class="stripe"></div>
        <div class="stripe"></div>
        <div class="stripe"></div>
      </div>
    </div>
    <div class="menu" :class="{ expanded: isMenuExpanded }">
      <ul class="menu-items">
        <li class="menu-item" v-for="(item, index) in menuItems" :key="index">
          <div class="item-title" @click="toggleSubMenu(index)">
            {{ item.title }}
          </div>
          <ul class="sub-menu" :class="{ show: item.showSubMenu }">
            <li
              class="sub-menu-item"
              v-for="(subItem, subIndex) in item.subMenu"
              :key="subIndex"
            >
              <NuxtLink class="nav-item-link" :to="subItem.link">
                {{ subItem.title }}</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isMenuExpanded: false,
        menuItems: [
          {
            title: 'Order',
            showSubMenu: false,
            subMenu: [
              {
                title: 'Where to buy our beans',
                link: 'where-to-buy-our-beans',
              },
              {
                title: 'Where to try our beans',
                link: 'where-to-try-our-beans',
              },
            ],
          },
          {
            title: 'Businesses & Bars',
            showSubMenu: false,
            subMenu: [
              { title: 'Get our beans at the office', link: 'horeca' },
              { title: 'Sell our beans', link: '/' },
            ],
          },
          {
            title: 'Sailing Journey',
          },
          {
            title: 'About',
            showSubMenu: false,
            subMenu: [
              { title: 'About us', link: 'about-us' },
              { title: 'About the women', link: 'about-the-women' },
              { title: 'About the coffee', link: 'about-the-coffee' },
              { title: 'About the packaging', link: 'about-the-packaging' },
            ],
          },
          {
            title: 'Contact',
            showSubMenu: false,
            subMenu: [
              { title: 'Contact us', link: 'contact-us' },
              { title: 'Work with us', link: 'work-with-us' },
            ],
          },
        ],
      };
    },
    watch: {
      $route(to, from) {
        this.isMenuExpanded = false;
        this.closeSubMenus();
      },
    },
    methods: {
      closeSubMenus() {
        this.menuItems.forEach((item) => {
          item.showSubMenu = false;
        });
      },
      toggleMenu() {
        this.isMenuExpanded = !this.isMenuExpanded;

        this.closeSubMenus();
      },
      toggleSubMenu(index) {
        if (index === 2) {
          this.$router.push('/sailing-journey');
          this.isMenuExpanded = false;
        } else {
          this.menuItems[index].showSubMenu =
            !this.menuItems[index].showSubMenu;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .mobile-navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    @media (min-width: 600px) {
      display: none;
    }
  }

  .black-bar {
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  .logo {
    margin-left: 10px;
  }

  .hamburger {
    margin-right: 10px;
    cursor: pointer;
  }

  .stripe {
    width: 20px;
    height: 2px;
    background-color: white;
    margin-bottom: 4px;
  }

  .menu {
    background-color: black;
    color: white;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }

  .menu.expanded {
    max-height: 500px;
  }

  .menu-items {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .menu-item {
    padding: 10px;
    cursor: pointer;
  }

  .item-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sub-menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: none;

    &.show {
      display: block;
    }
  }

  .sub-menu-item {
    padding: 10px;
    cursor: pointer;
    a {
      color: white;
    }
  }

  .menu-item:hover,
  .sub-menu-item:hover {
    background-color: #333;
  }
</style>
