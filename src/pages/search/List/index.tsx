import * as React from 'react';
import {View} from 'remax/one';
import {ScrollView} from 'remax/wechat'
import styles from './index.css';
import {Movie} from "@/data";

interface ListProps{
    list:Movie[]
}


interface StateProps {
}

class List extends React.Component<ListProps,StateProps>{
    state:StateProps = {

    }
    componentDidMount() {

    }

    render(){
        const {list} = this.props;
        return (
            <View className={styles.list}>
                <View className={styles.listHeader}>
                    <View className={styles.flex1}>序号</View>
                    <View className={styles.flex3}>电影名称</View>
                    <View className={styles.flex2}>类型</View>
                    <View className={styles.flex2}>资源版本</View>
                </View>
                <ScrollView
                    scrollY
                    style={{height:200}}
                    className={styles.listResult} >
                    {
                        list.map((item,index)=>(
                            <View key={item.id} className={styles.item}>
                                <View className={styles.flex1}>{index+1}</View>
                                <View className={styles.flex3}>{item.title}</View>
                                <View className={styles.flex2}>3</View>
                                <View className={styles.flex2}>4</View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        )
    }
}

export default List;