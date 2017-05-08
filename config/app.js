var url = require('url');

var env = process.env.NODE_ENV || 'testing';
var devApi = 'http://127.0.0.1:8000';
var proApi = 'http://api.congyuandong.cn';

var config = {
  'testing': {
    api: {
      stocks: url.resolve(devApi, 'stocks/'),
      p2ps: url.resolve(devApi, 'p2ps/'),
      gifts: url.resolve(devApi, 'gifts/?format=json'),
      token: url.resolve(devApi, 'o/token/'),
    },
    url: {
      admin: url.resolve(devApi, 'admin'),
    },
  },
  'production': {
    api: {
      stocks: url.resolve(proApi, 'stocks/'),
      p2ps: url.resolve(proApi, 'p2ps/'),
      gifts: url.resolve(proApi, 'gifts/?format=json'),
      token: url.resolve(proApi, 'o/token/'),
    },
    url: {
      admin: url.resolve(proApi, 'admin'),
    },
  },
};

module.exports = config[env];
