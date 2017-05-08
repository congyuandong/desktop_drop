<template>
  <div id="content">
    <header-component></header-component>
    <el-row class="sub_container" :gutter="10">
      <el-col :span="4" class="menu">
        <el-menu default-active="1" router class="menu">
          <el-menu-item index="/"><i class="el-icon-star-on"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-star-on"></i>金融</template>
            <el-menu-item index="/stock">股票</el-menu-item>
            <el-menu-item index="/p2p">P2P</el-menu-item>
            <el-menu-item index="/coin">BitCoin</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-star-on"></i>其他</template>
            <el-menu-item index="/gift">礼金</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" class="right_content">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>


<script>
  import Header from './partials/header';

  require('../assets/main.css');

  export default {
    name: 'app',
    components: {
      'header-component': Header,
    },
  };
</script>

<style>
.sub_container {
  width: 100%;
  height: 82%;
}
.right_content {
  margin-top: 10px;
  height: 100%;
}
.menu {
  height: 100%;
}
</style>
