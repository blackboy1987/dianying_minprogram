import * as React from 'react';
import {View,Text} from 'remax/one';
import styles from './index.less';
import {Image} from "remax/wechat";

const MovieItem3 = () => {
  return (
      <View className={styles.item3}>
          <View className={styles.item3Box}>
              <View className={styles.itemImgBox}>
                  <Image mode="aspectFill" src="https://mahuapic.com/upload/vod/2020-07-19/15951567540.jpg" />
                  <View className={styles.itemLang}>韩语</View>
                  <View className={styles.itemVersion}>HD中英双字</View>
              </View>
              <View className={styles.itemName}>釜山行2：半岛</View>
          </View>
      </View>
  );
};

export default MovieItem3;