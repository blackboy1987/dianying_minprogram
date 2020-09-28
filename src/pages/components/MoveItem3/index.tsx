import * as React from 'react';
import {View,Text} from 'remax/one';
import styles from './index.css';
import {Image} from "remax/wechat";
import {Movie} from "@/data";
import {go} from "@/util/common";

interface MovieItem3Props {
    movie:Movie;
}

const MovieItem3:React.FC<MovieItem3Props> = ({movie}) => {
  return (
      <View className={styles.item3} onTap={()=>go('/pages/play/index?id='+movie.id)}>
          <View className={styles.item3Box}>
              <View className={styles.itemImgBox}>
                  <Image mode="aspectFill" src={movie.img} />
                  <View className={styles.itemLang}>{movie.lang}</View>
                  <View className={styles.itemVersion}>{movie.vod_remarks}</View>
              </View>
              <View className={styles.itemName}>{movie.title}</View>
          </View>
      </View>
  );
};

export default MovieItem3;