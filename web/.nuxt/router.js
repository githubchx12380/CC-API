import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6020cdf4 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _3baadb15 = () => interopDefault(import('..\\pages\\category\\index.vue' /* webpackChunkName: "pages_category_index" */))
const _02752422 = () => interopDefault(import('..\\pages\\detail\\index.vue' /* webpackChunkName: "pages_detail_index" */))
const _c3dfa856 = () => interopDefault(import('..\\pages\\jiaocheng\\index.vue' /* webpackChunkName: "pages_jiaocheng_index" */))
const _e622c286 = () => interopDefault(import('..\\pages\\category\\_id.vue' /* webpackChunkName: "pages_category__id" */))
const _43e1c70a = () => interopDefault(import('..\\pages\\detail\\_id.vue' /* webpackChunkName: "pages_detail__id" */))
const _09ad84da = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6020cdf4,
    name: "about"
  }, {
    path: "/category",
    component: _3baadb15,
    name: "category"
  }, {
    path: "/detail",
    component: _02752422,
    name: "detail"
  }, {
    path: "/jiaocheng",
    component: _c3dfa856,
    name: "jiaocheng"
  }, {
    path: "/category/:id",
    component: _e622c286,
    name: "category-id"
  }, {
    path: "/detail/:id",
    component: _43e1c70a,
    name: "detail-id"
  }, {
    path: "/",
    component: _09ad84da,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
