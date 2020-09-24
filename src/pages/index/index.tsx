import * as React from 'react';
import { View,Image } from 'remax/one';
import styles from './index.css';
import {Movie, MovieCategory, ResponseData} from "@/data";
import request from "@/util/request";
import {Swiper,SwiperItem} from 'remax/wechat';

interface IndexProps{
  category:MovieCategory;
}

interface StateProps {
    data:{
        hotMovies:Movie[];
        hottv:Movie[];
        new:Movie[];
    },
}

class IndexPage extends React.Component<IndexProps> {

    state:StateProps = {
        data:{
            hotMovies:[],
            hottv:[],
            new:[],
        },
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
    render() {
        return (
            <View className={styles.app}>
                <Swiper
                    className={styles.swiper}
                    indicatorDots
                    indicatorActiveColor='#1d3549'
                    indicatorColor='#FFF'
                >
                    <SwiperItem>
                        <Image mode='widthFix' src='https://bootx-xxl.oss-cn-hangzhou.aliyuncs.com/wzry/b472762f130190171d18a342a53bff93.png' />
                    </SwiperItem>
                    <SwiperItem>
                        <Image mode='widthFix' src='https://bootx-xxl.oss-cn-hangzhou.aliyuncs.com/wzry/dc4bcdf05b1fd050c29d3966b32fe823.png' />
                    </SwiperItem>
                    <SwiperItem>
                        <Image mode='widthFix' src='https://bootx-xxl.oss-cn-hangzhou.aliyuncs.com/wzry/14f6ba4fc6655890660b3d7708eb236c.png' />
                    </SwiperItem>
                    <SwiperItem>
                        <Image mode='widthFix' src='https://bootx-xxl.oss-cn-hangzhou.aliyuncs.com/wzry/156ebbeeeb9f14746596e9a21171247f.png' />
                    </SwiperItem>
                    <SwiperItem>
                        <Image mode='widthFix' src='https://bootx-xxl.oss-cn-hangzhou.aliyuncs.com/wzry/1a1d9e82abc4e2301695ea82d734c97f.png' />
                    </SwiperItem>
                </Swiper>
            </View>
        );
    }
}

export default IndexPage;