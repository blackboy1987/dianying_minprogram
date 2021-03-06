import * as React from 'react';
import { View,Text } from 'remax/one';
import styles from './index.css';
import {Movie, MovieCategory, ResponseData} from "@/data";
import request from "@/util/request";
import SwiperImage from "@/pages/components/SwiperImage";
import MovieList3 from "@/pages/components/MovieList3";
import MovieList2 from "@/pages/components/MovieList2";

interface IndexProps{
  category:MovieCategory;
}

interface StateProps {
    data:{
        hotMovies:Movie[];
        hottv:Movie[];
        news:Movie[];
    },
}

class IndexPage extends React.Component<IndexProps> {

    state:StateProps = {
        data:{
            hotMovies:[],
            hottv:[],
            news:[],
        },
    }
    componentDidMount() {
        const {category} = this.props;
        request("/api/list",(data:ResponseData)=>{
            this.setState({
                data,
            })
        },{
            data:{
                pageNumber:1
            }
        });
    }
    render() {
        const {data:{hotMovies=[],hottv=[],news=[]}} = this.state;
        return (
            <View className={styles.index}>
                <SwiperImage />
                <View className={styles.hotMovies}>
                    <View className={styles.title}><Text className='iconfont icon-shipin' />热播电影</View>
                    <MovieList3 movies={hotMovies || []} />
                </View>
                <View className={styles.hottv}>
                    <View className={styles.title}><Text className='iconfont icon-shipin' />热播电视剧</View>
                    <MovieList3 movies={hottv || []} />
                </View>
                <View className={styles.news}>
                    <View className={styles.title}><Text className='iconfont icon-shipin' />最近更新</View>
                    <MovieList2 movies={news || []} />
                </View>
            </View>
        );
    }
}

export default IndexPage;