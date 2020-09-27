import * as React from 'react';
import {View,Input,Text} from 'remax/one';
import styles from './index.css';
import {Movie} from "@/data";

interface SearchBarProps{
    search:(result:string)=>void;
}


interface StateProps {
    keywords:string;
    list:Movie[];
}

class SearchBar extends React.Component<SearchBarProps,StateProps>{
    state:StateProps = {
        keywords:'',
        list:[],
    }
    componentDidMount() {

    }

    onInput=(e:any)=>{
        this.setState({
            keywords:e.target.value,
        })
    }

    search = () =>{
        const {keywords} = this.state;
        const {search} = this.props;
        if(keywords){
            if(search){
                search(keywords);
            }
        }
    }

    render(){
        const {keywords} = this.state;
        return (
            <View className={styles.searchBar}>
                <View className={styles.searchBarInput}>
                    <Text className='iconfont icon-search' />
                    <Input
                        wechat-confirm-type='search'
                        value={keywords}
                        onInput={this.onInput}
                        onConfirm={this.search}
                        placeholder="搜索电影/电视等关键字"
                    />
                </View>
                <View className={styles.action} onTap={this.search}>
                    <Text className='iconfont icon-search' />
                    <Text>搜索</Text>
                </View>
            </View>
        )
    }
}

export default SearchBar;