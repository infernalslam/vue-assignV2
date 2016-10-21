// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Standard from './components/Standard/Standard'
import Cdnjs from './components/cdnjs/cdnjs'
import Issues from './components/issues/issues'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes: [
    { path: '/Cdnjs', component: Cdnjs },
    { path: '/standard', component: Standard },
    {path: '/issues', component: Issues}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
