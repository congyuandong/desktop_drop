import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clientId: 'jFc7bsNmTUy90qMj5F5ng9qT1R0mByS8zqGCDSHZ',
    clientSecret: 'RyPETllWkMxoNQwdto6FXjYzrct6edrCTOCI6tdaXOOlH0wFb5qzjCNLHHqfWM07mo7VwacQyZEHLNycEhbslTS1pk4qF9RlMdza6wxID7Sb7hfpYARNiVQwM6oLluNX',
    accessToken: sessionStorage.getItem('accessToken') || '',
    accessTime: sessionStorage.getItem('accessTime') || 0,
    accessExpires: sessionStorage.getItem('accessExpires') || 36000 * 1000,
  },
  mutations,
  actions,
  modules: {
    user,
  },
});
