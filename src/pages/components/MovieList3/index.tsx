import * as React from 'react';
import { View, Text } from 'remax/one';
import styles from './index.css';
import MovieItem from "@/pages/components/MoveItem3";
import {Movie} from "@/data";

interface MovieList3Props {
    movies:Movie[]
}

const MovieList3:React.FC<MovieList3Props> = ({movies}) => {
  return (
      <View className={styles.list3}>
          {
              movies.map(movie=>(<MovieItem key={movie.id} movie={movie} />))
          }
      </View>
  );
};

export default MovieList3;