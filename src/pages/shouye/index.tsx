import * as React from 'react';
import { View, Text } from 'remax/one';
import {ScrollView,Swiper,SwiperItem,Image} from 'remax/wechat';
import styles from './index.css';
import MovieList from "@/pages/components/MovieList";
import SwiperImage from "@/pages/components/SwiperImage";
import {usePageEvent} from 'remax/macro';
import request from "@/util/request";
import {useState} from "react";
import {Movie, MovieCategory} from "@/data";
import classNames from 'classnames';
import Tabs from "@/pages/components/Tabs";

export interface Data {
  new:Movie[];
  hotMovies:Movie[];
  hottv:Movie[];
  categories:MovieCategory[]
}


const defaultNavData = [
  {
    text: '首页'
  },
  {
    text: '健康'
  },
  {
    text: '情感'
  },
  {
    text: '职场'
  },
  {
    text: '育儿'
  },
  {
    text: '纠纷'
  },
  {
    text: '青葱'
  },
  {
    text: '上课'
  },
  {
    text: '下课'
  }
];



export default () => {
  const [data,setData] = useState<Data>({
    new:[],
    hotMovies:[],
    hottv:[],
    categories:[]
  });
  const [movies,setMovies] = useState<Movie[]>([]);
  const [scrollLeft,setScrollLeft] = useState<Number>(0);
  const [currentNav,setCurrentNav] = useState<any>({});

  const [current,setCurrent] = useState<number>(-1);
  usePageEvent('onLoad',()=>{
    request("api/index",(data:Data)=>{
      setData(data);
    })
  });
  usePageEvent("onPullDownRefresh",()=>{
    console.log("onPullDownRefresh");
  })

  const tabSelect = (id:number,position:number) =>{
    list(id);
    setScrollLeft(60*position);
  }

  const list = (id:number) =>{
    setCurrent(id);
    request("api/index",(data:Movie[])=>{
      setMovies(data);
    },{
      data:{
        categoryId:id
      }
    })
  }


  const {new:news,hottv,hotMovies,categories} = data;
  return (
    <View className={styles.app}>
      <Tabs navData={defaultNavData} callback={(currentNav)=>{
        setCurrentNav(currentNav);
        console.log("回调",currentNav);
      }}>
        <View>我是子玄术={currentNav.text}</View>
      </Tabs>
    </View>
  );
};
