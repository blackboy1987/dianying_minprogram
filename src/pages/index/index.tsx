import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.less';
import {Movie, MovieCategory, ResponseData} from "@/data";
import { usePageEvent } from 'remax/macro';
import request from "@/util/request";
import {forwardRef} from "react";

interface IndexProps{
  category:MovieCategory;
}

export const Index:React.FC<IndexProps> = ({category}) => {

    const [data, setData] = React.useState();
    usePageEvent("onLoad",()=>{
        console.log("index==============================================");
        request("/api/list/",(data:ResponseData)=>{
            setData(data.data);
        },{
            data:{
                categoryId:category.id,
                pageNumber:1
            }
        });
    });

  return (
      <View className={styles.index}>
          {category.name}
      </View>
  );
};
export default Index;