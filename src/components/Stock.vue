<template>
  <div class="stock">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" v-loading="loading">
          <span class="tip">TODAY</span>
          <p v-text="today" :class="color(today)"></p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" v-loading="loading">
          <span class="tip">TOTAL</span>
          <p v-text="total" :class="color(total)"></p>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" v-loading="loading">
          <span class="tip">TIME</span>
          <p v-text="time"></p>
        </el-card>
      </el-col>
    </el-row>
    <el-card v-for="stock in stocks">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card class="box-card" v-loading="loading">
            <span class="tip">TODAY</span>
            <p v-text="stock.today" :class="color(stock.today)"></p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card" v-loading="loading">
            <span class="tip">TOTAL</span>
            <p v-text="stock.total" :class="color(stock.total)"></p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card" v-loading="loading">
            <span class="tip">NAME</span>
            <p v-text="stock.first"></p>
          </el-card>
        </el-col>
      </el-row>
      <el-row>
        <el-table
          stripe
          :data="stock.stocks"
          :row-class-name="tableRowClassName"
          style="width: 100%">
          <el-table-column type="expand">
            <template scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="最高价">
                  <span>{{ props.row.highest }}</span>
                </el-form-item>
                <el-form-item label="最低价">
                  <span>{{ props.row.lowest }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称">
          </el-table-column>
          <el-table-column
            prop="now"
            label="最新价">
          </el-table-column>
          <el-table-column
            prop="increase"
            label="涨跌额">
          </el-table-column>
          <el-table-column
            prop="increasePer"
            label="涨跌幅">
          </el-table-column>
          <el-table-column
            prop="price"
            label="买入价">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="持有">
          </el-table-column>
          <el-table-column
            prop="buying"
            label="买入价格">
          </el-table-column>
          <el-table-column
            prop="value"
            label="价值">
          </el-table-column>
          <el-table-column
            prop="todayEarning"
            label="当日盈亏">
          </el-table-column>
          <el-table-column label="累计盈亏">
            <template scope="scope">
              <div :class="color(scope.row.earning)">{{ scope.row.earning }}</div>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-card>
  </div>
</template>
<style>
  .stock .el-row,
  .stock .el-card {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .stock .red {
    color: red;
  }
  .stock .green {
    color: green;
  }
  .stock .tip {
    position: relative;
    top: -20px;
    left: -10px;
    font-size: 12px;
    color: darkgray;
  }
  .stock p {
    text-align: center;
    margin-top: 0;
    line-height: 0;
    font-size: 26px;
  }
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
<script>
  import config from '../../config';

  const api = config.app.api;

  export default {
    data() {
      return {
        stocks: [],
        loading: true,
      };
    },
    mounted() {
      this.pull();
      setInterval(this.pull, 5000);
    },
    methods: {
      tableRowClassName(row) {
        if (row.increase >= 0) {
          return 'red';
        }
        return 'green';
      },
      color(value) {
        if (parseFloat(value) >= 0) {
          return 'red';
        }
        return 'green';
      },
      pull() {
        const that = this;
        that.$http.get(api.stocks, {
          headers: { Authorization: `Bearer ${that.$store.state.accessToken}` },
        }).then((data) => {
//          that.stocks = data.body.data;
          that.$set(that, 'stocks', data.body.data);
          that.today = data.body.today;
          that.total = data.body.total;
          that.time = data.body.time;
          that.loading = false;
        });
      },
    },
  };
</script>
