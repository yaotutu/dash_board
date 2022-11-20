import axios from 'axios'
import qs from 'qs'

// switch (process.env.NODE_ENV){
//     case 'production':
//         axios.defaults.baseURL = ''
//         break
//     case 'test':
//         axios.defaults.baseURL = ''
//         break
//     default:
//         axios.defaults.baseURL = ''
// }

axios.defaults.timeout = 10000;
//允许跨域携带凭证
// axios.defaults.withCredentials = true;
//
// //设置post请求头，告诉服务器请求体的格式
// axios.defaults.headers['Content-type'] = 'application/x-www-form-urlencoded'
//
// axios.defaults.transformRequest = data => qs.stringify(data)

//请求拦截器
axios.interceptors.request.use(config => {
    /*在这里修改请求头*/
    return config
}, error => Promise.reject(error))

/*相应拦截器*/
// axios.defaults.response.use(()=>{
//
// },(error)=>{
//     let {response} = error
//     if (response){
//         //在这里对不同的错误状态进行处理
//         switch (response.status){
//             case 401:
//                 console.log('401')
//         }
//     //    如果response存在，说明服务器有响应
//     }else {
//     //    服务器连结果都没有，可能出问题了，比如断网，或者服务器崩了
//         if(!window.navigator.onLine){
//         //    客户端断网了
//             return
//         }
//         return Promise.reject(console.log(error))
//     }
//    return Promise.reject(error)
// })

export default axios
