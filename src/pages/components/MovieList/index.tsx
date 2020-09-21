import * as React from 'react';
import { View, Text } from 'remax/one';
import {Image} from 'remax/wechat';
import styles from './index.css';
import MovieItem from "@/pages/components/MoveItem";

const MovieList = () => {
  return (
      <View className={styles.hot}>
        <view className={styles.hotTitle}>
          <Text className='icon iconfont icon-video' /> 热播电影
        </view>
        <View className={styles.abc}>
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </View>
      </View>
  );
};

export default MovieList;