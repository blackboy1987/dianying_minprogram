import * as React from 'react';
import {View,Text} from 'remax/one';
import {RichText} from 'remax/wechat';
import styles from './index.less';

interface DetailProps {
    content:string;
}

const Memo:React.FC<DetailProps> = ({content}) =>{

    return (
        <View className={styles.memo}>
            <View className={styles.title}><Text>内容介绍</Text></View>
            <View className={styles.content}>
                <RichText nodes={content} />
            </View>
        </View>
    );
}

export default Memo;
