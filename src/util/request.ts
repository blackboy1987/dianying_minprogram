import {Constants} from "@/util/constants";
import {getStorage} from "@/util/wxUtils";

export interface RequestOption{
    method?:
        | 'OPTIONS'
        | 'GET'
        | 'HEAD'
        | 'POST'
        | 'PUT'
        | 'DELETE'
        | 'TRACE'
        | 'CONNECT'
}


const request = (url:string,callback:(data:any)=>void,options?:any)=>{
    wx.showLoading({
        title:"数据加载中",
        mask:true,
    })
    if(!options){
        options = {};
    }
    const method = options.method || 'GET';
    const data = options.data || {};
    const userToken = getStorage("userToken");
    let header:{[key:string]:string} = {
        'content-type': 'application/json'
    };
    if (method==='POST'){
        header= {
            ...header,
            "content-type": "application/x-www-form-urlencoded",
        }
    }
    wx.request({
        url: Constants.baseUrl+url,
        method,
        data:{
            appCode:Constants.code,
            appSecret:Constants.secret,
            userToken,
            ...data,
        },
        header,
        success (res) {
            wx.hideLoading();
            const {statusCode} = res;
            if(statusCode>=200&&statusCode<=299){
                callback(res.data.data);
            }else {
                wx.showToast({
                    title:res.data.data.msg,
                    image:'/images/errorClick.png'
                });
            }
        },
        fail(err){
            wx.hideLoading();
            wx.showToast({
                title:'请求失败',
                image:'/images/errorClick.png'
            });
        }
    })
}

export default request;