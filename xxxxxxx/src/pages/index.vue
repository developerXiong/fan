<template>
  <div class="layui-layout layui-layout-admin">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">logo</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
         <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item" v-for="(item,index) in data" @click="chooseSideBar(index)"><a href="javascript:;">{{item.topName}}</a></li>

          <!--<li class="layui-nav-item"><a href="">商品管理</a></li>-->
          <!--<li class="layui-nav-item"><a href="">用户</a></li>-->
          <!--<li class="layui-nav-item">-->
            <!--<a href="javascript:;">其它系统</a>-->
            <!--&lt;!&ndash;<dl class="layui-nav-child">&ndash;&gt;-->
              <!--&lt;!&ndash;<dd><a href="">邮件管理</a></dd>&ndash;&gt;-->
              <!--&lt;!&ndash;<dd><a href="">消息管理</a></dd>&ndash;&gt;-->
              <!--&lt;!&ndash;<dd><a href="">授权管理</a></dd>&ndash;&gt;-->
            <!--&lt;!&ndash;</dl>&ndash;&gt;-->
          <!--</li>-->

        </ul>
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
            <!--<li class="layui-nav-item">-->
              <!--<router-link href="javascript:;" tag="a" :to="{name: 'home'}">-->
                <!--首页-->
              <!--</router-link>-->
            <!--</li>-->
            <li class="layui-nav-item" v-for="(item,index) in sideBar" @click="goHome(index)">
              <a class="" href="javascript:;">
                {{item.sidebarTitle}}
                <i class="layui-icon" style="float: left;margin-right: 10px" v-html="item.icon"></i>
              </a>
              <dl class="layui-nav-child" v-for="subitem in item.subtitle">
                <router-link tag="dd" :to="{name:subitem.path}">
                  <a href="javascript:;">{{subitem.subname}}</a>
                </router-link>
              </dl>
            </li>

          </ul>
        </div>
      </div>

      <div class="layui-body">
        <div style="padding: 15px">
          <router-view></router-view>
        </div>
      </div>

      <div class="layui-footer">
        底部固定区域
      </div>
    </div>
  </div>
</template>

<script>
  import {get} from '../common/http'
  export default {
    data() {
      return {
//        sidebar: [
//          {
//            icon:'&#xe681;',
//            sidebarTitle:'首页'
//          },
//          {
//            icon: '&#xe681;',
//            sidebarTitle: '系统管理',
//            subtitle: [{
//                subname: '用户管理',
//                path: 'userManagement'
//              }
//              , {
//                subname: '角色管理',
//                path: 'roleManagement'
//              }
//              , {
//                subname: '系统菜单',
//                path: 'systemMenu'
//              }
//              , {
//                subname: '部门管理',
//                path: 'departManagement'
//              }]
//          },
//          {
//            icon: '&#xe660;',
//            sidebarTitle: '系统监控',
//            subtitle: [{
//              subname: '用户管理',
//              path: 'userManagement'
//            }
//              , {
//                subname: '角色管理',
//                path: 'roleManagement'
//              }
//              , {
//                subname: '系统菜单',
//                path: 'systemMenu'
//              }
//              , {
//                subname: '部门管理',
//                path: 'departManagement'
//              }]
//          },
//          {
//            icon: '&#xe65d',
//            sidebarTitle: '官网监控',
//            subtitle: [{
//              subname: '用户管理',
//              path: 'userManagement'
//            }
//              , {
//                subname: '角色管理',
//                path: 'roleManagement'
//              }
//              , {
//                subname: '系统菜单',
//                path: 'systemMenu'
//              }
//              , {
//                subname: '部门管理',
//                path: 'departManagement'
//              }]
//          },
//          {
//            icon: '&#xe65e',
//            sidebarTitle: '数据分析',
//            subtitle: [{
//              subname: '用户管理',
//              path: 'userManagement'
//            }
//              , {
//                subname: '角色管理',
//                path: 'roleManagement'
//              }
//              , {
//                subname: '系统菜单',
//                path: 'systemMenu'
//              }
//              , {
//                subname: '部门管理',
//                path: 'departManagement'
//              }]
//          }
//        ],
        data: [
          {
            topName: '控制台',
            sidebar: [
              {
                icon:'&#xe681;',
                sidebarTitle:'首页'
              },
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
            ],
          },
          {
            topName: '商品管理',
            sidebar: [
              {
                icon:'&#xe681;',
                sidebarTitle:'首页111'
              },
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
            ],
          },
          {
            topName: '用户',
            sidebar: [
              {
                icon:'&#xe681;',
                sidebarTitle:'首页222'
              },
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
            ],
          },
          {
            topName: '其他系统',
            sidebar: [
              {
                icon:'&#xe681;',
                sidebarTitle:'首页333'
              },
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
            ],
          }
        ],
        sideBar: []

//     '/detail/analysis': require('../assets/images/3.png'),
//          '/detail/publish': require('../assets/images/4.png')
//        }
      }
    },
    created() {
//        this.$http.get('/api/user/getUserById')
//          .then((res) => {
//            console.log(Authorization)
//            console.log(res.data)
//          },(res) => {
//
//          })

      get('/api/user/getUserById')
        .then((res) => {
          console.log(res.data)
//          this.$router.replace('./index');
        }, (res) => {
//          console.log(res)
        })

      this.sideBar = this.data[0].sidebar
    },
    mounted(){
      window.$layele.render('nav')
    },
    methods:{
      goHome(index){
        if (index===0){
          this.$router.replace('home');
        }
      },
      chooseSideBar(index){
        this.sideBar=this.data[index].sidebar
      }
    },
    computed:{

    }
  }

</script>

<style scoped>
/*@import "/static/layui/css/layui.css";*/
</style>
