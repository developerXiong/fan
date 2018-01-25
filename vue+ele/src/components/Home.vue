<template>
  <el-row class="container">
    <!--头部-->
    <el-col :span="24" class="topbar-wrap">
      <div class="topbar-logo topbar-btn">
        <a href="/"><img src="../assets/logo.png" style="padding-left:8px;"></a>
      </div>
      <div class="topbar-logos" v-show="!collapsed">
        <a href="/"><img src="../assets/logotxt.png"></a>
      </div>
      <div class="topbar-title" style="width: calc( 100% - 181px)">
        <!--<span style="font-size: 18px;color: #fff;">后台管理系统</span>-->
        <el-menu  mode="horizontal" background-color="#373d41" text-color="#fff" active-text-color="#fff" default-active="0" style="border-bottom: 0; height: 100%">
          <template v-for="(item,index) in data">
            <el-menu-item :index="(index + '')">{{item.topName}}</el-menu-item>
          </template>
        </el-menu>
        <!--<ul class="topbar_title_ul">-->
          <!--<li class="topbar_title_li" v-for="item in data" style="color: white">{{item.topName}}</li>-->
        <!--</ul>-->
      </div>
      <div class="topbar-account topbar-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner">
            <i class="iconfont icon-user"></i>
            {{nickname}}
            <i class="iconfont icon-down"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/user/profile"><span style="color: #555;font-size: 14px;">个人信息</span></router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="'/user/changepwd'"><span style="color: #555;font-size: 14px;">修改密码</span></router-link>
            </el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>

    <!--中间-->
    <el-col :span="24" class="main">
      <!--左侧导航-->
      <aside :class="{showSidebar:!collapsed}">
        <!--展开折叠开关-->
        <div class="menu-toggle" @click.prevent="collapse">
          <i class="iconfont icon-menufold" v-show="!collapsed"></i>
          <i class="iconfont icon-menuunfold" v-show="collapsed"></i>
        </div>
        <!--导航菜单-->
        <el-menu router :collapse="collapsed">
          <template v-for="(item,index) in sideBar">
            <el-submenu :index="index+''">
              <template slot="title">
                <i :class="'el-icon-'+item.icon_class"></i>
                <span slot="title">{{item.sideBarTitle}}</span>
              </template>
              <el-menu-item v-for="(term,index) in item.subtitle" :key="term.path" :index="index+''"
                            :class="$route.path==term.path?'is-active':''"
              v-if="term.subname">
                <i :class="term.iconCls"></i><span slot="title">{{term.path}}</span>
              </el-menu-item>
            </el-submenu>
            <!--<el-menu-item v-else-if="item.leaf&&item.children&&item.children.length" :index="item.children[0].path"-->
                          <!--:class="$route.path==item.children[0].path?'is-active':''">-->
              <!--<i :class="item.iconCls"></i><span slot="title">{{item.children[0].name}}</span>-->
            <!--</el-menu-item>-->
          </template>
        </el-menu>
      </aside>

      <!--右侧内容区-->
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>

  </el-row>
</template>

<script>
  import {bus} from '../bus.js'

  export default {
    name: 'home',
    created(){
      bus.$on('setNickName', (text) => {
        this.nickname = text;
      })
//
//      bus.$on('goto', (url) => {
//        if (url === "/login") {
//          localStorage.removeItem('access-user');
//        }
//        this.$router.push(url);
//      })
      let that = this;
      $.ajax({
        url:that.api+'getMenus',
        beforeSend:function (xhr) {
          xhr.setRequestHeader('Authorization', sessionStorage.getItem('Authorization'));
        },
        type:'GET',
        dataType:'json',
        contentType:"application/json",
        success:(data) => {
          console.log(data);
          that.data = data.data;
//          that.data = JSON.parse(data.data);
          console.log(that.data)
          console.log(typeof that.data);
          this.sideBar = this.data[0].sideBar
//          this.showIndexPage = true
        }
      })
    },
    data () {
      return {
        nickname: '',
        collapsed: false,
        data:[],
        sideBar:[]
      }
    },
    methods: {
      handleOpen() {
        //console.log('handleopen');
      },
      handleClose() {
        //console.log('handleclose');
      },
      //折叠导航栏
      collapse: function () {
        this.collapsed = !this.collapsed;
      },
//      showMenu(i, status){
//        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
//      },
//      logout(){
//        let that = this;
//        this.$confirm('确认退出吗?', '提示', {
//          confirmButtonClass: 'el-button--warning'
//        }).then(() => {
//          //确认
//          that.loading = true;
//          API.logout().then(function (result) {
//            that.loading = false;
//            localStorage.removeItem('access-user');
//            that.$router.go('/login'); //用go刷新
//          }, function (err) {
//            that.loading = false;
//            that.$message.error({showClose: true, message: err.toString(), duration: 2000});
//          }).catch(function (error) {
//            that.loading = false;
//            console.log(error);
//            that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
//          });
//        }).catch(() => {});
//      }
    },
    mounted() {
//      let user = localStorage.getItem('access-user');
//      if (user) {
//        user = JSON.parse(user);
//        this.nickname = user.nickname || '';
//      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

    .topbar-wrap {
      height: 46px;
      line-height: 46px;
      background: #373d41;
      padding: 0px;

      .topbar-btn {
        color: #fff;
      }
      /*.topbar-btn:hover {*/
      /*background-color: #4A5064;*/
      /*}*/
      .topbar-logo {
        float: left;
        width: 59px;
        line-height: 26px;
      }
      .topbar-logos {
        float: left;
        width: 120px;
        line-height: 26px;
      }
      .topbar-logo img, .topbar-logos img {
        height: 40px;
        margin-top: 5px;
        margin-left: 2px;
      }
      .topbar-title {
        float: left;
        text-align: left;
        width: 200px;
        height: 100%;
        /*padding-left: 10px;*/
        border-left: 1px solid #000;
      }
      .topbar-account {
        float: right;
        padding-right: 12px;
      }
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        padding-left: 10px;
      }
    }
    .main {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      position: absolute;
      top: 46px;
      bottom: 0px;
      overflow: hidden;
    }

    aside {
      min-width: 50px;
      background: #333744;
      &::-webkit-scrollbar {
        display: none;
      }

      &.showSidebar {
        overflow-x: hidden;
        overflow-y: auto;
      }

      .el-menu {
        height: 100%; /*写给不支持calc()的浏览器*/
        height: -moz-calc(100% - 80px);
        height: -webkit-calc(100% - 80px);
        height: calc(100% - 80px);
        border-radius: 0px;
        background-color: #333744;
      }

      .el-submenu .el-menu-item {
        min-width: 60px;
      }
      .el-menu {
        width: 180px;
      }
      .el-menu--collapse {
        width: 60px;
      }

      .el-menu .el-menu-item, .el-submenu .el-submenu__title {
        height: 46px;
        line-height: 46px;
      }

      .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
        background-color: #7ed2df;
      }
    }

    .menu-toggle {
      background: #4A5064;
      text-align: center;
      color: white;
      height: 26px;
      line-height: 30px;
    }

    .content-container {
      background: #fff;
      flex: 1;
      overflow-y: auto;
      padding: 10px;
      padding-bottom: 1px;

      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
    }
  }
</style>
