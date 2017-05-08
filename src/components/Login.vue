<template>
  <el-row type="flex" justify="center" class="login">
    <el-card>
      <el-alert
        title="用户名或密码错误"
        type="error"
        v-if="showError">
      </el-alert>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>
</template>
<style>
  .login .el-card {
    margin-top: 200px;
  }
  .login .el-form {
    margin-right: 50px;
    margin-top: 20px;
  }
</style>
<script>
  import { mapActions } from 'vuex';
  import { USER_SIGNIN } from '../store/user';
  import config from '../../config';

  const api = config.app.api;

  export default {
    data() {
      const notNull = (rule, value, back) => {
        if (!value) {
          back(new Error('兄弟，这儿不能为空！'));
        }
        back();
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          password: [
            { validator: notNull, trigger: 'blur' },
          ],
          username: [
            { validator: notNull, trigger: 'blur' },
          ],
        },
        showError: false,
      };
    },
    methods: {
      ...mapActions([USER_SIGNIN]),
      submitForm(formName) {
        const that = this;
        that.$refs[formName].validate((valid) => {
          if (valid) {
            that.$http.post(api.token, {
              grant_type: 'password',
              client_id: that.$store.state.clientId,
              client_secret: that.$store.state.clientSecret,
              username: that.loginForm.username,
              password: that.loginForm.password,
            }).then((response) => {
              that.$store.dispatch('setAccessToken', response.body);
              that.$store.dispatch('login', { username: that.loginForm.username });
              this.$router.replace({ path: '/' });
            }, () => {
              that.showError = true;
            });
            return true;
          }
          return false;
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    },
  };
</script>
