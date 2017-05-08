const ACCESS_TOKEN = 'ACCESS_TOKEN';

export default {
  [ACCESS_TOKEN](state, tokenObj) {
    const accessTime = (new Date()).getTime();
    sessionStorage.setItem('accessToken', tokenObj.access_token);
    sessionStorage.setItem('accessTime', accessTime);
    sessionStorage.setItem('accessExpires', tokenObj.expires_in * 1000);
    state.accessToken = tokenObj.access_token;
    state.accessTime = accessTime;
    state.accessExpires = tokenObj.expires_in * 1000;
  },
};
