import * as React from 'react';
import {View,Text} from 'remax/one';
import styles from './index.css';
import {Image} from "remax/wechat";

const MovieItem2 = () => {
  return (
      <View className={styles.item}>
          <View className={styles.itemVideo}>
              <View className={styles.videoItemBanner}>
                  <Image mode='aspectFill' src= 'https://mahuapic.com/upload/vod/2020-09-22/202009221600746576.png' />
                  <View className={styles.videoItemBannerVersion}>
                      <View className={styles.videoItemBannerVersionFlex}>
                          <View className={styles.lang}>国语</View>
                          <View className={styles.remarks}>更新至01级</View>
                      </View>
                  </View>
              </View>
              <View className={styles.videoBasic}>
                  <View className={styles.videoTitle}>逆袭的旋律之音</View>
                  <View className={styles.text}>
                      <View className={styles.left}>动漫</View>
                      <View className={styles.right}>大陆</View>
                  </View>
              </View>
          </View>
      </View>
  );
};

export default MovieItem2;