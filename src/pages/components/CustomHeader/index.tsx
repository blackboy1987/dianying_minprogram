import * as React from 'react';
import {View} from 'remax/one';

import styles from './index.css';
import {Icon} from 'anna-remax-ui';
import {getStorage} from "@/util/wxUtils";

interface CustomHeaderProps {
    backgroundColor?:string;
    showBack?:boolean;
}

class CustomHeader extends React.Component<CustomHeaderProps> {
    render(){
        const {backgroundColor,showBack} = this.props;
        const siteInfo = getStorage("siteInfo");
        return (
            <View className={styles.customHeader} style={{
                background:backgroundColor || 'green',
                color:'#FFF'
            }}>
                {
                    showBack ? (
                        <View className={styles.back}>
                            <Icon type='back' size='38' color='#fff' />
                        </View>
                    ) : null
                }
                <View className={styles.title}>
                    {siteInfo.name}
                </View>
                {
                    showBack ? (
                        <View className={styles.back} />
                    ) : null
                }
            </View>
        );
    }
}

export default CustomHeader;