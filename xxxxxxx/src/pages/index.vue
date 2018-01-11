<template>
  <div class="layui-layout layui-layout-admin">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">logo</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
        <!-- <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item"><a href="">控制台</a></li>
          <li class="layui-nav-item"><a href="">商品管理</a></li>
          <li class="layui-nav-item"><a href="">用户</a></li>
          <li class="layui-nav-item">
            <a href="javascript:;">其它系统</a>
            <dl class="layui-nav-child">
              <dd><a href="">邮件管理</a></dd>
              <dd><a href="">消息管理</a></dd>
              <dd><a href="">授权管理</a></dd>
            </dl>
          </li>
        </ul> -->
        <ul class="layui-nav layui-layout-right">
          <li class="layui-nav-item">
            <a href="javascript:;">
              <img src="http://t.cn/RCzsdCq" class="layui-nav-img">
              贤心
            </a>
            <dl class="layui-nav-child">
              <dd><a href="">基本资料</a></dd>
              <dd><a href="">安全设置</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item"><a href="">退了</a></li>
        </ul>
      </div>

      <div class="layui-side layui-bg-black">
        <div class="layui-side-scroll">
          <!-- 左侧导航区域（可配合layui已有的垂直导航） -->
          <ul class="layui-nav layui-nav-tree" lay-filter="test">
            <li class="layui-nav-item">
              <router-link href="javascript:;" tag="a" :to="{name: 'home'}">首页</router-link>
            </li>
            <li class="layui-nav-item" v-for="item in sidebar">
              <a class="" href="javascript:;">
                {{item.sidebarTitle}}
                <i class="layui-icon" style="float: left">{{item.icon}}</i>
              </a>
              <dl class="layui-nav-child" v-for="subitem in item.subtitle">
                <dd><a href="javascript:;">{{subitem.subname}}</a></dd>
              </dl>
            </li>

          </ul>
        </div>
      </div>

      <div class="layui-body">
        <div style="padding: 15px">
          <routerview></routerview>
        </div>
      </div>

      <div class="layui-footer">
        底部固定区域
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sidebar: [
          {
            icon: '&#xe681;',
            sidebarTitle: '系统管理',
            subtitle: [{
                subname: '用户管理',
                path: 'userManagement'
              }
              , {
                subname: '角色管理',
                path: 'roleManagement'
              }
              , {
                subname: '系统菜单',
                path: 'systemMenu'
              }
              , {
                subname: '部门管理',
                path: 'departManagement'
              }]
          },
          {
            icon: '&#xe660;',
            sidebarTitle: '系统监控',
            subtitle: [{
              subname: '用户管理',
              path: 'userManagement'
            }
              , {
                subname: '角色管理',
                path: 'roleManagement'
              }
              , {
                subname: '系统菜单',
                path: 'systemMenu'
              }
              , {
                subname: '部门管理',
                path: 'departManagement'
              }]
          },
          {
            icon: '&#xe65d',
            sidebarTitle: '官网监控',
            subtitle: [{
              subname: '用户管理',
              path: 'userManagement'
            }
              , {
                subname: '角色管理',
                path: 'roleManagement'
              }
              , {
                subname: '系统菜单',
                path: 'systemMenu'
              }
              , {
                subname: '部门管理',
                path: 'departManagement'
              }]
          },
          {
            icon: '&#xe65e',
            sidebarTitle: '数据分析',
            subtitle: [{
              subname: '用户管理',
              path: 'userManagement'
            }
              , {
                subname: '角色管理',
                path: 'roleManagement'
              }
              , {
                subname: '系统菜单',
                path: 'systemMenu'
              }
              , {
                subname: '部门管理',
                path: 'departManagement'
              }]
          }
        ]
//        imgMap: {
//          '/detail/count': require('../assets/images/1.png'),
//          '/detail/forecast': require('../assets/images/2.png'),
//          '/detail/analysis': require('../assets/images/3.png'),
//          '/detail/publish': require('../assets/images/4.png')
//        }
      }
    },
    created() {
      layui.use('element', function () {
        var element = layui.element;
      });
//      this.$http.get('/api/sidebar')
//        .then(function (res) {
//          console.log(res.data.sidebar.icon)
//
//        }, function (res) {
//
//        })

    },
    methods:{
    },
    computed:{

    }
  }

</script>

<style scoped>
/*.layui-icon:after{*/
  /*content:'\e756'*/
/*}*/
</style>
