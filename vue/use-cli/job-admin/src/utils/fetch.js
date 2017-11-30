import axios from 'axios'
import { Message } from 'iview'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
    // 跨域访问需要设置下面两项--http://www.jianshu.com/p/3b5e453f54f5
    config.data = JSON.stringify(config.data)
    config.headers = {
        'Content-Type':'application/x-www-form-uriencoded'
    }
    // Do something before request is sent
    config.headers['X-Custom-Header'] = getToken() // 让每个请求携带token--['X-Custom-Header']为自定义key 请根据实际情况自行修改
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => response,
    /**
    * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
    * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
    */
    //  const res = response.data;
    //     if (res.code !== 20000) {
    //       Message({
    //         message: res.message,
    //         type: 'error',
    //         duration: 5 * 1000
    //       });
    //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //           confirmButtonText: '重新登录',
    //           cancelButtonText: '取消',
    //           type: 'warning'
    //         }).then(() => {
    //           store.dispatch('FedLogOut').then(() => {
    //             location.reload();// 为了重新实例化vue-router对象 避免bug
    //           });
    //         })
    //       }
    //       return Promise.reject('error');
    //     } else {
    //       return response.data;
    //     }
    error => {
        console.log('err' + error)// for debug
        Message.error('err' + error)
        return Promise.reject(error)
    }
)

export default service