<template>
  <div class="layui-layout">
    <p class="title">XX后台管理系统</p>
    <h4 class="info">这里是信息</h4>
    <form>
      <div class="username">
        <input type="text" id="username" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="password">
        <input type="password" id="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="message" v-show="message !== ''">{{message}}</div>
      <div class="login_btn" @click="login">
        登录
      </div>

    </form>
  </div>
</template>

<script>
  import {post} from '../common/http'
//  import {setUserInfoToHeader} from '../main'
  export default {
    data() {
      return {
        username: '',
        password: '',
        message: ''
      }
    },
    methods: {
      delayed: function () {
        setTimeout(() => {
          this.message = '';
        }, 2000)
      },
      confirm: function () {

      },
      login: function () {
        if (this.username !== '' && this.password !== '') {
          this.toLogin()
        } else {
          this.message = '用户名或密码不能为空';
          this.delayed()
        }
      },
      toLogin: function () {
        let loginInfo = {
          'account': this.username,
          'password': this.password
        };
        let loginIn = JSON.stringify(loginInfo);
        console.log(loginIn)

//        post('/api/ajaxLogin', loginIn)
//          .then((res) => {
//            console.log(res.data);
//            if (res.data.code === '0000') {
//              this.$router.replace('./index');
//              var vals = JSON.stringify(res.data.data);
//              sessionStorage.setItem('UserInfo', vals);
////              setUserInfoToHeader()
//            } else {
//              this.message = res.data.msg;
//              this.delayed()
//            }
//          }, (res) => {
//            console.log(res)
//          })

//        this.$http.post('/api/ajaxLogin', loginIn)
//          .then(function (res) {
//            console.log(res.data)
//            if(res.data.code === '0000'){
//              this.$router.replace('./index');
//              var vals = JSON.stringify(res.data.data);
//              sessionStorage.setItem('UserInfo',vals)
//              var arr=sessionStorage.getItem('UserInfo')
//              console.log(arr)
//            }else {
//              this.message = res.data.msg;
//              this.delayed()
//            }
//          },function (res) {
//            this.message = '请求失败，请重试'
//            this.delayed()
//          })

//         $.ajax({
//           type:'POST',
//           url:'http://192.168.0.134:8088/ajaxLogin',
//           data:loginIn,
//           dataType: "json",
//           contentType:"application/json",
//           success:function (res) {
// //            this.$router.replace('./index');
//             console.log(res)
            $.ajax({
              url:'http://192.168.0.134:8088/user/getUserById',
              // beforeSend:function (xhr) {
              //   xhr.setRequestHeader('Authorization', '6b15c1b0-38f0-42e0-ac19-20add86b0546');
              // },
              // headers: {'Authorization': '6b15c1b0-38f0-42e0-ac19-20add86b0546'},
              type:'GET',
              dataType:'json',
              contentType:"application/json",
              success:(data) => {
                console.log(data)
              }
            })
          // }
        // })

      }
    },
    mounted() {

    },
    computed: {}
  }
</script>

<style scoped>
  .title {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-size: 50px;
    margin-top: 10%;
  }

  .info {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    font-size: 25px;
    margin-top: 10px;
  }

  form {
    text-align: center;
  }

  form input {
    width: 360px;
    height: 80px;
    border-radius: 4px;
    border: 1px solid gray;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    line-height: 80px;
  }

  .login_btn {
    display: inline-block;
    width: 400px;
    height: 80px;
    margin-top: 20px;
    text-align: center;
    line-height: 80px;
    background: lightblue;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
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
