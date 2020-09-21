import {Constants} from "@/util/constants";
import { navigateTo } from 'remax/one';

const globalData = {
    musicBG: wx.createInnerAudioContext(),
    musicCommon: wx.createInnerAudioContext(),
    btnMusic: wx.createInnerAudioContext(),
}

export const btnSoundTrue=()=>{
    const {musicCommon} = globalData;
    musicCommon.src = Constants.resourceUrl+"music/btnSound.mp3",
    musicCommon.play();
};

export const go=(url:string)=>{
    navigateTo({
        url
    });
};

export const copy=(data:any,callback?:()=>void)=>{
    wx.setClipboardData({
        data,
        success: function(t) {
            if(callback){
                callback();
            }
        }
    });
}

let timer;

export const countDown=(residueTime:number,callback:(residueTime:number)=>void)=>{
    if(residueTime<=0){
        if(callback){
            callback(0);
        }
    }else{
        let residueTime1 = residueTime-1;
        timer = setInterval(()=>{
            callback(residueTime1);
            countDown(residueTime1,callback);
            clearInterval(timer);
        },1000);
    }
}


export const getQuery=(e:string):any[]=>{
    var t = [];
    if (-1 != e.indexOf("?")) for (var n = e.split("?")[1].split("&"), a = 0; a < n.length; a++) n[a].split("=")[0] && unescape(n[a].split("=")[1]) && (t[a] = {
        name: n[a].split("=")[0],
        value: unescape(n[a].split("=")[1])
    });
    return t;
}

export const getUrlParam=(e:any, t:any):any=>{
    var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), a = e.split("?")[1].match(n);
    return null != a ? unescape(a[2]) : null;
}

export const getSign=(e:any, t:any, n:any)=>{
    var a = require("underscore.js"), r = require("md5.js"), i = "", o = getUrlParam(e, "sign");
    if (o || t && t.sign) return !1;
    if (e && (i = getQuery(e)), t) {
        var s = [];
        for (var u in t) u && t[u] && (s = s.concat({
            name: u,
            value: t[u]
        }));
        i = i.concat(s);
    }
    i = a.sortBy(i, "name"), i = a.uniq(i, !0, "name");
    for (var c = "", f = 0; f < i.length; f++) i[f] && i[f].name && i[f].value && (c += i[f].name + "=" + i[f].value,
    f < i.length - 1 && (c += "&"));
    return o = r(c + (n = n || getApp().siteInfo.token));
}