import * as React from 'react';
import {View,Image,Text} from 'remax/one';
import styles from './index.less';
import {Movie} from "@/data";

interface DetailProps {
    movie:Movie;
}

const Detail:React.FC<DetailProps> = ({movie}) =>{

    return (
        <View className={styles.detail}>
            <View className={styles.title}><Text>基本信息</Text></View>
            <View className={styles.content}>
                <View className={styles.img}>
                    <Image mode='widthFix' src={movie.img} />
                </View>
                <View className={styles.detail1}>
                    <View className={styles.name}>{movie.title}</View>
                    <View>
                        <Text className={styles.title1}>别名：</Text>
                        <Text className={styles.text}>无</Text>
                    </View>
                    <View>
                        <Text className={styles.title1}>主演：</Text>
                        <View className={styles.text}>
                            <Text>{movie.actors}</Text>
                        </View>
                    </View>
                    <View>
                        <Text className={styles.title1}>类型：</Text>
                        <Text className={styles.text}>无</Text>
                    </View>
                    <View>
                        <Text className={styles.title1}>导演：</Text>
                        <View className={styles.text}>
                            <Text>{movie.director}</Text>
                        </View>
                        <Text className={styles.title1}>地区：</Text>
                        <View className={styles.text}>
                            <Text>{movie.area}</Text>
                        </View>
                    </View>
                    <View>
                        <Text className={styles.title}>年份：</Text>
                        <View className={styles.text}>
                            <Text>{movie.director}</Text>
                        </View>
                        <Text className={styles.title}>语言：</Text>
                        <View className={styles.text}>
                            <Text>{movie.area}</Text>
                        </View>
                    </View>
                    <View>
                        <Text className={styles.title}>片长：</Text>
                        <View className={styles.text}>
                            <Text>{movie.director}</Text>
                        </View>
                        <Text className={styles.title}>得分：</Text>
                        <View className={styles.text}>
                            <Text>{movie.area}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Detail;
