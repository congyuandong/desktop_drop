<template>
  <div class="stock">
    <el-row>
      <el-table
        stripe
        :data="p2ps"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="本金">
        </el-table-column>
        <el-table-column
          prop="rate"
          label="预期年华率">
        </el-table-column>
        <el-table-column
          prop="start"
          label="开始时间">
        </el-table-column>
        <el-table-column
          prop="end"
          label="结束时间">
        </el-table-column>
        <el-table-column
          prop="price"
          label="已盈利">
        </el-table-column>
        <el-table-column
          prop="coupon"
          label="优惠券">
        </el-table-column>
        <el-table-column
          prop="total"
          label="总盈利">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<style>
  .stock .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
<script>
  import config from '../../config';

  const api = config.app.api;

  export default {
    data() {
      return {
        p2ps: [],
      };
    },
    mounted() {
      const that = this;
      that.$http.get(api.p2ps, {
        headers: { Authorization: `Bearer ${that.$store.state.accessToken}` },
      }).then((data) => {
        that.p2ps = data.body.map((p2p) => {
          p2p.amount = parseFloat(p2p.amount);
          let timeDiff = Math.max(Math.min((new Date()).getTime(), (new Date(p2p.end)).getTime())
            - (new Date(p2p.start)).getTime(), 0);
          timeDiff = Math.floor(timeDiff / (24 * 3600 * 1000));
          p2p.price = ((p2p.amount * parseFloat(p2p.rate) * timeDiff) / 100 / 365).toFixed(2);
          p2p.rate = `${parseFloat(p2p.rate)}%`;
          p2p.total = (parseFloat(p2p.price) + parseFloat(p2p.coupon)).toFixed(2);
          return p2p;
        });
      });
    },
  };
</script>
