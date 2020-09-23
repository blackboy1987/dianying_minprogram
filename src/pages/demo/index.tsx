import * as React from 'react';
import { View, Text,Button } from 'remax/one';

import styles from './index.css';
import MovieItem1 from "@/pages/components/MoveItem3";

const Play = () => {


  return (
    <View className={styles.app}>
        <View className={styles.list}>
            <MovieItem1 />
            <MovieItem1 />
            <MovieItem1 />
            <MovieItem1 />
        </View>


    </View>
  );
};

export default Play;
