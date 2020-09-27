import * as React from 'react';
import { View, Text,Button } from 'remax/one';
import {Video,RichText,Picker} from 'remax/wechat';
import classNames from 'classnames';
import {usePageEvent} from "remax/macro";

import styles from './index.css';
import {useState} from "react";
import request from "@/util/request";
import {Movie} from "@/data";

const rates:number[] = [ .5, .8, 1, 1.25, 1.5, 2 ]

const Play = () => {
    const [rate,setRate] = useState<number>(2);
    const [video,setVideo] = useState<any>(null);
    const [videoInfo,setVideoInfo] = useState<Movie>({});
    const [playUrl,setPlayUrl] = useState<string>('');
    const [playUrlKey,setPlayUrlKey] = useState<string>('');
    usePageEvent('onShow',()=>{
        video.play();
    });

    usePageEvent('onLoad',(e)=>{
        setVideo(wx.createVideoContext("myVideo"));
        // 拉去视频详细信息
        request('api/info',(data)=>{
            setPlayUrl(data.playUrls[0].urls[0].split("$")[1]);
            setPlayUrlKey("0_0");
            setVideoInfo(data);
        },{
            data:e
        })
    })

    const changeRage=(e)=>{
        setRate(rates[e.detail.value]);
        video.playbackRate(rates[e.detail.value]);
    }

    const setUrl=(key:string,url:string)=>{
        setPlayUrl(url);
        setPlayUrlKey(key);
        video.play();
    }

  return (
    <View className={styles.app}>
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
            }, {
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
            enableAutoRotation
        />
      </View>
        <View className={styles.title}>
            {videoInfo.title}
        </View>
      <View className={styles.tool}>
          <View>
              <Text className="icon48 iconfont icon-weixin" />
              <Text>分享好友</Text>
          </View>
          <View>
              <Text className="icon48 iconfont icon-kefu" />
              <Text>联系客服</Text>
          </View>
        <View>
            <Text className="icon48 iconfont icon-xiazai" />
            <Text>联系客服</Text>
        </View>

          <View>
              <Picker onChange={changeRage} value={rate} range={rates} style={{display:'flex'}}>
                  <Text className="icon48 iconfont icon-ai19" />
                  <View>1x 倍</View>
              </Picker>
          </View>
      </View>
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
    </View>
  );
};

export default Play;
