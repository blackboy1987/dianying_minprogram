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

export interface Data {
  new:Movie[];
  hotMovies:Movie[];
  hottv:Movie[];
  categories:MovieCategory[]
}

export default () => {
  const [data,setData] = useState<Data>({
    new:[],
    hotMovies:[],
    hottv:[],
    categories:[]
  });
  const [movies,setMovies] = useState<Movie[]>([]);
  const [scrollLeft,setScrollLeft] = useState<Number>(0);

  const [current,setCurrent] = useState<number>(-1);
  usePageEvent('onLoad',()=>{
    request("api/index",(data:Data)=>{
      setData(data)
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
      <ScrollView
          scrollX
          scrollWithAnimation
          className={styles.scrollView}
          scrollLeft={scrollLeft}
      >
        <View onTap={()=>tabSelect(-1,0)} className={current===-1 ? classNames(styles.scrollViewItem,styles.scrollViewItemCurrent):styles.scrollViewItem}>
          <Text>热门推荐</Text>
        </View>
        {
          categories.map((category,index)=>(
              <View onTap={()=>tabSelect(category.id,index)} key={category.id} className={current===category.id ? classNames(styles.scrollViewItem,styles.scrollViewItemCurrent):styles.scrollViewItem}>
                {category.name}
              </View>
          ))
        }
      </ScrollView>

      <SwiperImage />

      <ad unit-id="adunit-090ca0df5b0c4b32" />

      <MovieList />

    </View>
  );
};
