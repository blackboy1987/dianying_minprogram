import * as React from 'react';
import { View, Text } from 'remax/one';
import {ScrollView,Swiper,SwiperItem,Image} from 'remax/wechat';
import styles from './index.css';
import MovieList from "@/pages/components/MovieList";
import SwiperImage from "@/pages/components/SwiperImage";

export default () => {
  return (
    <View className={styles.app}>
      <ScrollView scrollX className={styles.scrollView}>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
        <view className={styles.scrollViewItem}>热门推荐</view>
      </ScrollView>
      <SwiperImage />

      <ad unit-id="adunit-090ca0df5b0c4b32" />

      <MovieList />

    </View>
  );
};
