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
      <View className={styles.play}>
        <Video
            id='myVideo'
            style={{width:'100%'}}
            src={playUrl}
            controls
            showCastingButton
            danmuList={[{
              text: '第 1s 出现的弹幕',
              color: '#ff0000',
              time: 5
            },{
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 5
            }, {
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 5
            }, {
                text: '第 1s 出现的弹幕',
                color: '#ff0000',
                time: 5
            },  {
              text: '第 3s 出现的弹幕',
              color: '#ff00ff',
              time: 10
            }]}
            danmuBtn
            enableDanmu
            title={videoInfo.title}
            enablePlayGesture
            vslideGesture
            objectFit='fill'
            playBtnPosition='center'
            showMuteBtn
        />
      </View>
        <View className={styles.title}>
            {videoInfo.title}
        </View>
      <View className={styles.tool}>
          <View className={styles.content}>
              <View className={styles.item}>
                  <Button className='no-border' openType='share'>
                      <Icon type='share' size='40' />
                      <Text>分享</Text>
                  </Button>
              </View>
              <View className={styles.item}>
                  <Icon type='message' size='40' />
                  <Text>留言</Text>
              </View>
              <View className={styles.item}>
                  <Picker onChange={changeRage} value={rateIndex} range={rates}>
                      <Icon type='play_forward_fill' size='40' />
                      <View>{rate}x 倍</View>
                  </Picker>
              </View>
          </View>
      </View>
        <Detail movie={videoInfo} />
        {
            videoInfo.playUrls&&videoInfo.playUrls.map((playUrl,index)=>(
                <View key={index} className={styles.line}>
                    <View className={styles.bar}>
                        <View className={styles.title}>线路 {index+1}</View>
                        <View className={styles.action}>共{playUrl.urls.length}个视频</View>
                    </View>
                    <View className={styles.list}>
                        {
                            playUrl.urls.map((url,index1)=>(
                                <View key={`${index}_${index1}`} className={classNames(styles.item,playUrlKey===`${index}_${index1}`?styles.current:'')} onTap={()=>setUrl(`${index}_${index1}`,url.split("$")[1])}>
                                    <Button>{url.split("$")[0]}</Button>
                                </View>
                            ))
                        }

                    </View>
                </View>
            ))
        }
        <Memo content={videoInfo.content} />
    </View>
  );
};

export default Play;
