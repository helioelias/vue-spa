import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'
import './directives/Transform'
import VeeValidate, { Validator } from 'vee-validate'
import msg from './pt_BR'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'jquery/dist/jquery'
import './assets/css/teste.css'
import './assets/js/teste'

Vue.use(VueResource)
Vue.http.options.root = 'http://localhost:3000/'
Vue.use(VueRouter)

Vue.use(VeeValidate)

Validator.localize('pt_BR', msg)

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
