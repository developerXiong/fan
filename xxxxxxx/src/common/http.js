import Vue from 'vue'
import {router} from '../main'

/**
 * post 请求
 * @param url
 * @param params
 * @returns {Promise}
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    Vue.http.post(url, params)
      .then(function (res) {
        //请求成功的回调

        if(res.data.code==='200'){
          resolve(res)
        }else if (res.data.code==='203'){
        //  未登录状态
          router.replace('./loginPage');

        }
      },function (res) {
        //请求失败的回调
        reject(res)
      })
  })
}

/**
 * get 请求
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    Vue.http.get(url, params)
      .then(function (res) {
        //请求成功的回调
        if(res.data.code==='203'){
          // 未登录状态
          router.replace('./loginPage');
        } else {
          resolve(res)
        }
      },function (res) {
        //请求失败的回调
        reject(res)
      })
  })
}
