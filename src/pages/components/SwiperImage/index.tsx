import * as React from 'react';
import {Swiper,SwiperItem,Image,View} from 'remax/wechat';
import styles from './index.css';

const SwiperImage = () => {
  return (
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
          <View>
            <Image mode='widthFix' src='https://img.sokoyo-rj.com/tuku/upload/vod/2020-07-20/202007201595246317.jpg' />
            <view className={styles.swiperItemTitle}>
              五百十大发射点
            </view>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <Image mode='widthFix' src='https://img.sokoyo-rj.com/tuku/upload/vod/2020-07-20/202007201595246317.jpg' />
            <view className={styles.swiperItemTitle}>
              五百十大发射点
            </view>
          </View>
        </SwiperItem>
      </Swiper>
  );
};

export default SwiperImage;
