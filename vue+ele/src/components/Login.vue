<template>
  <el-form ref="AccountFrom" :model="account" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">管理员登录</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
    <div class="message" v-show="message !== ''">{{message}}</div>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="login" :loading="loading">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import API from '../api/api_user';

  export default {
    data() {
      return {
        message:'',
        loading: false,
        account: {
          username: '',
          password: ''
        },
        checked: true
      };
    },
    methods: {
      delayed: function () {
        setTimeout(() => {
          this.message = '';
        }, 2000)
      },
      login: function () {
        if (this.account.username !== '' && this.account.password !== '') {
          this.handleLogin()
        } else {
          this.message = '用户名或密码不能为空';
          this.delayed()
        }
      },
      handleLogin() {
        let that = this;
        let loginIn = JSON.stringify(this.account);
        $.ajax({
          type:'POST',
          url:that.api+'login',
          data:loginIn,
          dataType: "json",
          contentType:"application/json",
          success:function (res) {
            if(res.code === '200'){
              that.$router.replace('/');
              sessionStorage.setItem('Authorization', res.data);
            }else {
              that.message = '用户名或密码错误';
              that.delayed()
            }
          },
          error:function (res) {
            that.message = '请求失败';
            that.delayed()
          }
        })
      }
    }
  }
</script>
<style>
  body {
    background: #DFE9FB;
  }
</style>
<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

    background: -ms-linear-gradient(top, #ace, #00C1DE); /* IE 10 */
    background: -moz-linear-gradient(top, #ace, #00C1DE); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #ace, #00C1DE); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#ace, #00C1DE); /*Opera 11.10+*/

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  .message {
    width: 200px;
    height: 40px;
    line-height: 40px;
    color: white;
    background: rgba(0, 0, 0, .3);
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
  }
</style>
