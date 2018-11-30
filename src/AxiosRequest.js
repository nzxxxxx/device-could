/*
 * @Author: weisheres.huang 
 * @Date: 2018-11-28 15:31:51 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-11-30 11:04:16
 */
import axios from 'axios';
import global from './components/global/Global';
import {
  Message,
  Loading
} from 'element-ui';
axios.defaults.withCredentials = true;

export default ({ url, type, params, config, option ,loadingConfig},vue) => {
    //api的url加入统一前缀
    url=`${global.apiSrc}${url}`;
    //process.env.NODE_ENV === 'development' && url = `/api${url}`;
    option = Object.assign({
        sccessMessage:true
    },option||{});
    return new Promise((resolve, reject) => {
        //这里加一个通用的数据重置后门
        if (params.reset === true) {
            resolve({ code: 0, data: params.resetData });
            return;
        }
        loading.close();
      }).catch(res => {
        //error && error(res);
        loading.close();
        //console.log(info);
        Message.error({
          message: `网络异常：${res.message}`,
          customClass: 'e-message',
          duration: 5000
        });
        reject({
          type: 'error',
          info: res
        });
        // dispatch({
        //     type: 'FAILED',
        //     payload: res
        // });
        window.setTimeout(() => {
          //2秒后自动重置错误信息
          // dispatch({
          //     type: 'RESET_FAILED'
          // });
        }, 2000);
      })
    }, 10)


<<<<<<< HEAD
                axios[type||'post'](url, type==='get'?{params:params}:params, config || {}).then(res => {
                    if (res.status === 200 && res.data.code === 200) {
                        //success && success(res.data);
                        option.sccessMessage && Message.success({message:'请求成功', customClass:'e-message', duration:1500});
                        resolve(res);
                    } else {
                        //faild && faild(res.data);
                        console.log(res.data.msg);
                        Message.error({message:`${res.data.msg}(${res.data.code})`,customClass:'e-message', duration:5000});
                        reject({ type: 'faild', info: res.data });
                    }
                    loading.close();
                }).catch(res => {
                    //error && error(res);
                    loading.close();
                    //console.log(info);
                    Message.error({message:`网络异常：${res.message}`,customClass:'e-message', duration:5000});
                    reject({ type: 'error', info: res });
                    // dispatch({
                    //     type: 'FAILED',
                    //     payload: res
                    // });
                    window.setTimeout(() => {
                        //2秒后自动重置错误信息
                        // dispatch({
                        //     type: 'RESET_FAILED'
                        // });
                    }, 2000);
                })
        },10)
        
        
    })
=======
  })
>>>>>>> c3bb3e8c634748570b6a32a6771a8eaccc6b9466
}
