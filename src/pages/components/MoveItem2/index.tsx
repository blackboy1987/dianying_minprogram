import * as React from 'react';
import {View,Text} from 'remax/one';
import styles from './index.css';
import {Image} from "remax/wechat";
import {Movie} from "@/data";

interface MovieItem2Props {
    movie:Movie;
}

const MovieItem2:React.FC<MovieItem2Props> = ({movie}) => {
  return (
      <View className={styles.item}>
          <View className={styles.itemVideo}>
              <View className={styles.videoItemBanner}>
                  <Image mode='aspectFill' src= {movie.vod_pic} />
                  <View className={styles.videoItemBannerVersion}>
                      <View className={styles.videoItemBannerVersionFlex}>
                          <View className={styles.lang}>{movie.vod_lang}</View>
                          <View className={styles.remarks}>{movie.vod_remarks}</View>
                      </View>
                  </View>
              </View>
              <View className={styles.videoBasic}>
                  <View className={styles.videoTitle}>{movie.vod_name}</View>
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