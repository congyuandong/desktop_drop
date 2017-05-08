export default {
  setAccessToken({ commit }, tokenObj) {
    commit('ACCESS_TOKEN', tokenObj);
  },
};
