import 'element-ui/lib/theme-default/index.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';

import App from './App';
import Home from './components/Home';
import Gift from './components/Gift';
import Stock from './components/Stock';
import P2P from './components/P2P';
import Login from './components/Login';
import store from './store';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  component: Home,
  children: [{
    path: 'gift',
    component: Gift,
  }, {
    path: 'stock',
    component: Stock,
  }, {
    path: 'p2p',
    component: P2P,
  }],
}, {
  path: '/home',
  component: Home,
}, {
  path: '/other',
  component: Home,
}, {
  path: '/login',
  meta: { auth: false },
  component: Login,
}, {
  path: '*',
  redirect: '/login',
}];

const router = new VueRouter({
  routes,
});

router.beforeEach(({ meta, path }, from, next) => {
  const { auth = true } = meta;
  const isLogin = Boolean(store.state.user.username);

  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' });
  }

  if (auth && (new Date()).getTime() -
    parseInt(store.state.accessTime, 10) > parseInt(store.state.accessExpires, 10)) {
    return next({ path: '/login' });
  }
  return next();
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
