<template>
<header>
    <div class="header" :class="{'home': $route.name === 'home'}">
      <div class="siggy">
        <a class="symbol" href="http://dotkai.com"><span>&middot;</span><span class="chi">&chi;</span></a>
          <h3 class="name">kai austin</h3>
          <h3 class="tagline">engineer of imagination</h3>
      </div>
      <nav class="navigation">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
      </nav>
    </div>
</header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
.header {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 16px;
  z-index: 200;
  left: 0;
  right: 0;
  transition: all 0.5s ease;

  .siggy, nav {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  h3, a {
    padding: 0 10px;
    color: darkcyan;
    font-variant: all-petite-caps;
  }

  &.home {
    h3, a {
      color: white;
    }

    a.router-link-exact-active {
      border-bottom: 1px solid white;         
    }
  }

  a {
    text-decoration: none;
      

    &.router-link-exact-active {
      border-bottom: 1px solid #40798C;         
    }

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid #40798C; 
        text-shadow: 1px 1px 10px white;
      }
    }
  
}

.siggy {
  display: block;
  padding: 5px;
  text-align: left;

  .symbol {
    display: inline-flex;
    font-family: serif;
    font-variant: initial;
      font-size: 1.5em;
      text-shadow: 1px 1px #70A9A1;

      .chi {
        line-height: 22px;
      }

    &:hover {
      border: none;
      text-shadow: 1px 1px 10px white, 1px 1px #70A9A1;
    }
  }
}

</style>