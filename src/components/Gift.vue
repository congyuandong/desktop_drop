<template>
  <el-table
    :data="gifts"
    stripe
    style="width: 100%">
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="price"
      label="礼金">
    </el-table-column>
    <el-table-column
      prop="date"
      label="时间">
    </el-table-column>
  </el-table>
</template>
<script>
  import config from '../../config';

  const api = config.app.api;

  export default {
    name: 'gift',
    data() {
      return {
        gifts: [],
      };
    },
    mounted() {
      const that = this;
      that.$http.get(api.gifts, {
        headers: { Authorization: `Bearer ${that.$store.state.accessToken}` },
      }).then((data) => {
        that.gifts = data.body;
      });
    },
  };
</script>
