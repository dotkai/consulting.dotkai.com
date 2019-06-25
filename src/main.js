import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import VueScrollTo from 'vue-scrollto';
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import Gigs from './pages/Gigs'
import WhyMe from './pages/WhyMe'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueScrollTo)

const router = new VueRouter({
  routes: [
	  { path: '/', name: 'home', component: Gigs },
	  { path: '/about', name: 'about', component: WhyMe }
	]
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
