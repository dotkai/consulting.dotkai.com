<template>
<v-app id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
</v-app>
</template>

<script>
  import AppHeader from './components/_Header'
  import Gigs from './pages/Gigs'

export default {
  name: 'app',
  components: {
    AppHeader,
    Gigs
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
@import './assets/reset';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

section {
  min-height: 100%;    
  padding-bottom: 1em;
  border-bottom: 1px dashed lightgray;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

p {
  text-align: left;
  padding-bottom: 16px;
}
</style>
