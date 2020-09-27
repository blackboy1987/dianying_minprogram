import * as React from 'react';
import {View,Input,Text} from 'remax/one';

import {usePageEvent} from 'remax/macro';
import styles from './index.css';
import {useState} from "react";
import {getStorage} from "@/util/wxUtils";
import {SiteInfo} from "@/data";

const CustomHeader = () =>{

    const [siteInfo,setSiteInfo] = useState<SiteInfo>({});

    usePageEvent('onLoad',()=>{
        setSiteInfo(getStorage("siteInfo"));
    });

    return (
        <View className={styles.customHeader} style={{background:'green',color:'#FFF'}}>
            {siteInfo.name}
        </View>
    )
}


export default CustomHeader;