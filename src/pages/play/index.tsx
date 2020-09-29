import * as React from 'react';
import { View, Text } from 'remax/one';
import {Video,Picker,Button} from 'remax/wechat';
import classNames from 'classnames';
import {Icon} from 'anna-remax-ui';
import {usePageEvent} from "remax/macro";

import styles from './index.css';
import {useState} from "react";
import request from "@/util/request";
import {Movie} from "@/data";
import CustomHeader from "@/pages/components/CustomHeader";
import Detail from "@/pages/play/Detail";
import Memo from "@/pages/play/Memo";

const rates:number[] = [ .5, .8, 1, 1.25, 1.5, 2 ]

const Play = () => {
    const [rate,setRate] = useState<number>(1);
    const [rateIndex,setRateIndex] = useState<number>(2);
    const [video,setVideo] = useState<any>(null);
    const [videoInfo,setVideoInfo] = useState<Movie>({});
    const [playUrl,setPlayUrl] = useState<string>('');
    const [playUrlKey,setPlayUrlKey] = useState<string>('');
    usePageEvent('onShow',()=>{
        video.play();
        setRate(rates[2]);
        setRateIndex(2);
    });

    usePageEvent('onShareAppMessage',()=>{
        return {
            title: videoInfo.title,
            path: "/pages/play/index?id=" + videoInfo.id + "&is_share=1",
            imageUrl: videoInfo.img
        };
    })

    usePageEvent('onLoad',(e)=>{
        setVideo(wx.createVideoContext("myVideo"));
        // 拉去视频详细信息
        request('api/info',(data)=>{
            console.log("play",data);
            setPlayUrl(data.playUrls[0].urls[0].split("$")[1]);
            setPlayUrlKey("0_0");
            setVideoInfo(data);
        },{
            data:e
        })
    })

    /**
     * 更改播放速率
     * @param e
     */
    const changeRage=(e:any)=>{
        setRate(rates[e.detail.value]);
        setRateIndex(e.detail.value);
        video.playbackRate(rates[e.detail.value]);
    }

    const setUrl=(key:string,url:string)=>{
        setPlayUrl(url);
        setPlayUrlKey(key);
        video.play();
    }

  return (
    <View className={styles.app}>
        <CustomHeader showBack backgroundColor='#000' />
        <Detail movie={videoInfo} />
        <Memo content={videoInfo.content} />
    </View>
  );
};

export default Play;
