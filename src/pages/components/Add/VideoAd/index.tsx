import * as React from 'react';
import { View} from 'remax/one';
import styles from './index.css';

interface VideoAdProps {
    unitId:string;
    theme?: 'white' | 'black'
}


const VideoAd:React.FC<VideoAdProps> = ({unitId,theme='white'}) => {
  return (
      <View className={styles.adContainer}>
          <ad unit-id={unitId} ad-type="video" ad-theme={theme | 'white'} />
      </View>

  );
};

export default VideoAd;
