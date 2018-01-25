<template>
  <div class="layui-layout layui-layout-admin">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <div class="layui-logo">logo</div>
        <!-- 头部区域（可配合layui已有的水平导航） -->
         <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item" v-for="(item,index) in data" @click="choosesideBar(index)">
          	<a href="javascript:;">{{item.topName}}</a>
          </li>
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
          <ul class="layui-nav layui-nav-tree" lay-filter="test" v-if="showIndexPage">
            <li class="layui-nav-item" v-for="(item,index) in sideBar" @click="goHome(index)">
              <a class="" href="javascript:;">
                {{item.sideBarTitle}}
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
      	
//        sideBar: [
//          {
//            icon:'&#xe681;',
//            sideBarTitle:'首页'
//          },
//          {
//            icon: '&#xe681;',
//            sideBarTitle: '系统管理',
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
//            sideBarTitle: '系统监控',
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
//            sideBarTitle: '官网监控',
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
//            sideBarTitle: '数据分析',
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

          data:[
    {
      topName: '控制台',
      sideBar: [
        {
          icon_class:'upload',
          sideBarTitle:'首页',
          path:'首页'
        },
        {
          icon_class_class: 'location',
          sideBarTitle: '系统管理',
          subtitle: [{
              subname: '用户管理',
              path: '用户管理'
            }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'success',
          sideBarTitle: '系统监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'warning',
          sideBarTitle: '官网监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'document',
          sideBarTitle: '数据分析',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        }
      ],
    },
    {
      topName: '一一一',
      sideBar: [
        {
          icon_class_class: 'error',
          sideBarTitle: '系统管理1111',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'success',
          sideBarTitle: '系统监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'warning',
          sideBarTitle: '官网监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'document',
          sideBarTitle: '数据分析',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        }
      ],
    },
    {
      topName: '二二二',
      sideBar: [
        {
          icon_class_class: 'error',
          sideBarTitle: '系统管理2222',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'success',
          sideBarTitle: '系统监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'warning',
          sideBarTitle: '官网监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'document',
          sideBarTitle: '数据分析',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        }
      ],
    },
    {
      topName: '三三三',
      sideBar: [
        {
          icon_class_class: 'error',
          sideBarTitle: '系统管理3333',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'success',
          sideBarTitle: '系统监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'warning',
          sideBarTitle: '官网监控',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        },
        {
          icon_class: 'document',
          sideBarTitle: '数据分析',
          subtitle: [{
            subname: '用户管理',
            path: '用户管理'
          }
            , {
              subname: '角色管理',
              path: '角色管理'
            }
            , {
              subname: '系统菜单',
              path: '系统菜单'
            }
            , {
              subname: '部门管理',
              path: '部门管理'
            }]
        }
      ],
    }
  ],
//      data:[],
        sideBar: [],
        showIndexPage: false

      }
    },
    created() {
            $.ajax({
              url:'http://192.168.0.134:8088/menu/getMenus',
              beforeSend:function (xhr) {
                 xhr.setRequestHeader('Authorization', sessionStorage.getItem('Authorization'));
              },
              type:'GET',
              dataType:'json',
              contentType:"application/json",
              success:(data) => {
                console.log(data)
                this.data = JSON.parse(data.data)
                console.log(this.data)
                this.sideBar = this.data[0].sideBar
                this.showIndexPage = true
              }
            })
     // this.sideBar = this.data[0].sideBar
  
    },
    mounted(){
      window.$layele.render('nav')
//      this.sideBar = this.data[0].sideBar
    },
    methods:{
      goHome(index){
        if (index===0){
          this.$router.replace('home');
        }
      },
      choosesideBar(index){
        this.sideBar=this.data[index].sideBar
      }
    },
    computed:{

    }
  }

</script>

<style scoped>
/*@import "/static/layui/css/layui.css";*/
</style>
