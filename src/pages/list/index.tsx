import * as React from 'react';
import { View } from 'remax/one';
import styles from './index.css';
import {Movie, MovieCategory, ResponseData} from "@/data";
import {usePageEvent} from 'remax/macro';
import request from "@/util/request";
import MovieItem3 from "@/pages/components/MoveItem3";

interface ListProps{
    category:MovieCategory;
}


interface StateProps {
    data:Movie[],
}

class List extends React.Component<ListProps>{
    state:StateProps = {
        data:[],
    }
    componentDidMount() {
        const {category} = this.props;
        request("/api/list/",(data:ResponseData)=>{
            this.setState({
                data,
            })
        },{
            data:{
                categoryId:category.id,
                pageNumber:1
            }
        });
    }

    render(){
        const {data} = this.state;
        return (
            <View className={styles.list} id='latoutRef'>
                {
                    data.map(movie=>(
                        <MovieItem3 key={movie.vod_id} movie={movie} />
                    ))
                }
            </View>
        )
    }
}

export default List;