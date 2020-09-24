import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.less';
import {Movie, MovieCategory, ResponseData} from "@/data";
import {usePageEvent} from 'remax/macro';
import request from "@/util/request";
import MovieItem3 from "@/pages/components/MoveItem3";

interface ListProps{
    category:MovieCategory;
}

export const List:React.FC<ListProps> = ({category}) => {
    const [data, setData] = React.useState<Movie[]>([]);

    usePageEvent("onLoad",()=>{
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
      <View className={styles.list}>
          {
              data.map(movie=>(
                  <MovieItem3 key={movie.vod_id} />
              ))
          }
      </View>
  );
};
export default List;