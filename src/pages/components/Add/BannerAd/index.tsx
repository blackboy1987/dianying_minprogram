import * as React from 'react';
import { View} from 'remax/one';
import styles from './index.css';

interface BannerAdProps {
    unitId:string;
}


const BannerAd:React.FC<BannerAdProps> = ({unitId}) => {
  return (
      <View className={styles.adContainer}>
          <ad unit-id={unitId} />
      </View>
  );
};

export default BannerAd;
