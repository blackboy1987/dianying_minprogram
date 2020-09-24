import * as React from 'react';
import {View,Text} from 'remax/one';
import styles from './index.css';
import {Image} from "remax/wechat";
import {Movie} from "@/data";

interface MovieItem3Props {
    movie:Movie;
}

const MovieItem3:React.FC<MovieItem3Props> = ({movie}) => {
  return (
      <View className={styles.item3}>
          <View className={styles.item3Box}>
              <View className={styles.itemImgBox}>
                  <Image mode="aspectFill" src={movie.vod_pic} />
                  <View className={styles.itemLang}>{movie.vod_lang}</View>
                  <View className={styles.itemVersion}>{movie.vod_remarks}</View>
              </View>
              <View className={styles.itemName}>{movie.vod_name}</View>
          </View>
      </View>
  );
};

export default MovieItem3;