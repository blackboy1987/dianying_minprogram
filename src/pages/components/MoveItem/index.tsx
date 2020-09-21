import * as React from 'react';
import { View, Text } from 'remax/one';
import {Image} from 'remax/wechat';
import styles from './index.css';

const MovieItem = () => {
  return (
      <View className={styles.item}>
        <View className={styles.block}>
            <View className={styles.box}>
                <Image src= 'https://img.sokoyo-rj.com/tuku/upload/vod/2019-05-02/201905021556790013.jpg' />
                <View className={styles.lang}>国语</View>
                <View className={styles.remarks}>HD</View>
            </View>
            <View className={styles.title}>半条命3-特种兵之战</View>
        </View>
      </View>
  );
};

export default MovieItem;