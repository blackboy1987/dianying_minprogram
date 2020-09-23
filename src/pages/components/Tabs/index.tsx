import * as React from 'react';
import { View } from 'remax/one';
import { Swiper,SwiperItem,ScrollView } from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import classNames from 'classnames';
import styles from './index.less';
import {useState} from "react";

interface SystemInfo {
    pixelRatio:number;
    windowHeight:number;
    windowWidth:number;
}

interface TabsProps {
    navData:any[];
    callback:(currentNav:any)=>void;
}

const Tabs:React.FC<TabsProps> = ({callback,navData,children}) => {

    const [systemInfo,setSystemInfo] = useState<SystemInfo>({
        pixelRatio:1,
        windowHeight:1,
        windowWidth:1,
    });
    const [currentTab,setCurrentTab] = useState<number>(0);
    const [navScrollLeft,setNavScrollLeft] = useState<number>(0);

    usePageEvent('onLoad',()=>{
        wx.getSystemInfo({
            success: (res) => {
                setSystemInfo({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            },
        })
    })



    const switchTab=(index:number)=>{
        setCurrentTab(index);
        const singleNavWidth = systemInfo.windowWidth / 5;
        setNavScrollLeft((index - 2) * singleNavWidth);
        callback(navData.filter((nav,position)=>position===index)[0]);
    }

  return (
    <View className={styles.app}>
       <ScrollView
           scrollX
           className={styles.nav}
           scrollLeft={navScrollLeft}
           scrollWithAnimation
       >
           {
               navData.map((nav,index)=>(<View onTap={()=>switchTab(index)} key={index} className={classNames(styles.navItem,currentTab==index ? styles.current: '')}>{nav.text}</View>))
           }
       </ScrollView>
        <Swiper onChange={(event)=>switchTab(event.detail.current)} className={styles.tabBox} current={currentTab} duration={300}>
            {
                navData.map((nav,index)=>(<SwiperItem key={index} className={styles.tabContent}>
                    {children}
                </SwiperItem>))
            }
        </Swiper>
    </View>
  );
};

export default Tabs;
