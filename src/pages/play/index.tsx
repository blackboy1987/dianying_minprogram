import * as React from 'react';
import { View, Text,Button } from 'remax/one';
import {Video,RichText} from 'remax/wechat';
import classNames from 'classnames';
import {usePageEvent} from "remax/macro";

import styles from './index.css';
import BannerAd from "@/pages/components/Add/BannerAd";
import {interstitialAdPlay} from "@/pages/components/Add/interstitialAd";
import VideoAd from "@/pages/components/Add/VideoAd";
import {rewardedVideoAdPlay} from "@/pages/components/Add/rewardedVideoAd";

const Play = () => {

    usePageEvent('onShow',()=>{

    });


  return (
    <View className={styles.app}>
      <View className={styles.play}>
        <Video
            onPlay={(e)=>console.log("play",e)}
            onPause={(e)=>{
                interstitialAdPlay({
                    adUnitId:'adunit-bd3d4cbec78fdf97'
                })
            }}
            onEnded={(e)=>console.log("onEnded",e)}
            onFullScreenChange={(e)=>console.log("onFullScreenChange",e)}
            onWaiting={(e)=>{
                wx.showToast({
                    title:'网络不通畅，看会广告缓冲一下吧',
                    icon:'none'
                });
                rewardedVideoAdPlay({
                    adUnitId:'adunit-4e45fe796686e1f4'
                });
            }}
            onError={(e)=>console.log("onError",e)}
            style={{width:'100%'}}
            autoplay
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
            title='阿斯顿发射点'
            enablePlayGesture
            vslideGesture
            objectFit='fill'
            playBtnPosition='center'
            adUnitId='adunit-ef4637cc787de087'
            showMuteBtn
            src='https://www.zhuticlub.com:65/20190502/l6VKQxZL/index.m3u8'
        />
      </View>
      <View className={styles.tool}>
        <Text className="icon iconfont icon-weixin" />
        <Text className="icon iconfont icon-kefu" />
        <Text className="icon iconfont icon-ai19" />
        <Text className="icon iconfont icon-chakantiezigengduo" />
      </View>
        <View className={styles.line}>
            <View className={styles.bar}>
                <View className={styles.title}>线路一</View>
                <View className={styles.action}>共1个视频</View>
            </View>
            <View className={styles.list}>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
                <View className={styles.item}>
                    <Button>第01集</Button>
                </View>
            </View>
        </View>

        <View className={styles.info}>
            <View className={styles.content}>
                <View className={styles.baseInfo}>
                    <View className={styles.left}>
                        <View className={styles.name}>片名：契约娇妻擒夫记</View>
                        <View className={styles.remarks}>版本：19集全/已完结</View>
                    </View>
                    <View className={styles.right}>
                        <View className={styles.bg} style={{background:'url("https://img.sokoyo-rj.com/tuku/upload/vod/2020-07-17/202007171594966925.jpg")'}}/>
                    </View>
                </View>
            </View>
            <View className={styles.padding}>
                <View className={styles.flex}>
                    <View className={styles.flexSub}>类型：电视剧</View>
                    <View className={styles.flexSub}>语言：其他</View>
                </View>
                <View className={styles.flex}>
                    <View className={styles.flexSub}>地区：泰国</View>
                    <View className={styles.flexSub}>上映：2020</View>
                </View>
                <View className={styles.flex}>
                    <View className={styles.flexSub}>导演：内向</View>
                    <View className={styles.flexSub}>评分：1.0</View>
                </View>
                <View className={styles.flex}>
                    <View  className={classNames(styles.flexSub,styles.tHide)}>演员：演员：瓦立特·斯里桑塔纳,坎娜楠·翁卡琼莱</View>
                </View>
            </View>
        </View>

        <View className={styles.videoInfo}>
            <View className={styles.action}>
                <Text className="icon iconfont icon-light" />
                剧情
            </View>
            <View className={styles.text}>
                <RichText nodes="haha" />
            </View>
        </View>

    </View>
  );
};

export default Play;
