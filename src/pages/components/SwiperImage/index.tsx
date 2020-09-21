import * as React from 'react';
import { View } from 'remax/one';
import {Swiper,SwiperItem,Image} from 'remax/wechat';
import styles from './index.css';

const SwiperImage = () => {
  return (
    <View className={styles.app}>
      <Swiper
          className={styles.swiper}
          indicatorDots
          indicatorActiveColor='#1d3549'
          indicatorColor='#FFF'
          autoplay
          circular
          easingFunction='easeInCubic'
      >
        <SwiperItem>
          <Image mode='widthFix' src='https://img.sokoyo-rj.com/tuku/upload/vod/2020-07-20/202007201595246317.jpg' />
          <view className={styles.swiperItemTitle}>
            五百十大发射点
          </view>
        </SwiperItem>
        <SwiperItem>
          <Image mode='widthFix' src='https://img.sokoyo-rj.com/tuku/upload/vod/2020-08-27/202008271598503929.jpg' />
          <view className={styles.swiperItemTitle}>
            五百十大发射点
          </view>
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default SwiperImage;
