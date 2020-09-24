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
            <Image mode='widthFix' src='https://images.cnblogsc.com/pic/upload/vod/2017-09-05/150459575113.jpg' />
            <view className={styles.swiperItemTitle}>
              五百十大发射点
            </view>
          </View>
        </SwiperItem>
        <SwiperItem>
          <View>
            <Image mode='widthFix' src='https://images.cnblogsc.com/pic/upload/vod/2017-09-05/150459575113.jpg' />
            <view className={styles.swiperItemTitle}>
              五百十大发射点
            </view>
          </View>
        </SwiperItem>
      </Swiper>
  );
};

export default SwiperImage;
