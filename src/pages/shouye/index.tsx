import * as React from 'react';
import { View } from 'remax/one';
import {ScrollView,Swiper,SwiperItem} from 'remax/wechat';
import {usePageEvent} from 'remax/macro';
import request from "@/util/request";
import {useState} from "react";
import {MovieCategory, SystemInfo} from "@/data";
import classNames from 'classnames';
import styles from './index.css';
import Index from "@/pages/index";
import List from "@/pages/list";


export default () => {
  const [navData,setNavData] = useState<MovieCategory[]>([]);


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
    if(currentTab==index){
      return ;
    }
    setCurrentTab(index);
    const singleNavWidth = systemInfo.windowWidth / 5;
    setNavScrollLeft((index - 2) * singleNavWidth);
  }

  const switchTab1=(e:any)=>{
    if (e.detail.source == 'touch'){
      switchTab(e.detail.current);
    }

  }


  usePageEvent('onLoad',()=>{
    request("api/categories",(data:MovieCategory[])=>{
      console.log("----",data);
      setNavData([
        {
          id:0,
          name:'热门推荐'
        },
          ...data,
      ]);
    })
  });


  return (
    <View className={styles.app}>
      <ScrollView
          scrollX
          className={styles.nav}
          scrollLeft={navScrollLeft}
          scrollWithAnimation
      >
        {
          navData.map((nav,index)=>(<View onTap={()=>switchTab(index)} key={index} className={classNames(styles.navItem,currentTab==index ? styles.current: '')}>{nav.name}</View>))
        }
      </ScrollView>
      <Swiper onChange={(event)=>switchTab1(event)} className={styles.tabBox} current={currentTab}>
        {
          (navData||[]).map((nav,index)=>(
              <SwiperItem key={index} className={styles.tabContent} style={{overflowY:'auto'}}>
                <ScrollView scrollY className={styles.tabContentScrollView} style={{height:'calc(100vh - 90px)'}}>
                  {
                    nav.id===0 ? (<Index category={nav} />) : (<List category={nav} />)
                  }
                </ScrollView>
              </SwiperItem>))
        }
      </Swiper>
    </View>
  );
};
