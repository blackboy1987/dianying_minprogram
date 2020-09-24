import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';
import MovieItem from "@/pages/components/MoveItem2";
import {Movie} from "@/data";

interface MovieList2 {
    movies:Movie[]
}

const MovieList2:React.FC<MovieList2> = ({movies}) => {
  return (
      <View className={styles.list2}>
          {
              movies.map(movie=>(<MovieItem key={movie.vod_id} movie={movie} />))
          }
      </View>
  );
};

export default MovieList2;