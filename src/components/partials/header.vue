<template>
  <el-row class="header">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="select">
      <el-menu-item index="1" class="title">❤&nbsp个人中心</el-menu-item>
      <router-link class="el-menu-item" to="/home">首页</router-link>
      <el-submenu index="2">
        <template slot="title">设置</template>
        <el-menu-item index="2-1"><a :href="admin" target="_blank">控制台</a></el-menu-item>
        <el-menu-item index="2-2">登出</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="line"></div>
  </el-row>
</template>
<style>
  .header .el-submenu {
    float: right;
    margin-right: 20px;
  }
</style>
<script>
  import { mapActions } from 'vuex';
  import { USER_SIGNOUT } from '../../store/user';

  import config from '../../../config';

  const url = config.app.url;

  export default {
    name: 'header',
    data() {
      return {
        admin: url.admin,
      };
    },
    methods: {
      ...mapActions([USER_SIGNOUT]),
      select(index) {
        if (index === '2-2') {
          this.$store.dispatch('logout');
          this.$router.replace({ path: '/login' });
        }
      },
    },
  };
</script>
