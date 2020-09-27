import * as React from 'react';
import {View} from 'remax/one';
import styles from './index.css';
import SearchBar from "@/pages/components/SearchBar";
import List from "@/pages/search/List";
import {Movie} from "@/data";
import request from "@/util/request";

interface SearchProps{

}


interface StateProps {
    list:Movie[];
}

class Search extends React.Component<SearchProps,StateProps>{
    state:StateProps = {
        list:[]
    }
    componentDidMount() {

    }

    search=(keywords:string)=>{
        request("api/search",(data)=>{
            this.setState({
                list:data,
            })
        },{
            data:{
                keywords
            }
        })
    }

    render(){
        const {list} = this.state;
        return (
            <View className={styles.app}>
               <View className={styles.search}>
                  <SearchBar search={(keyword)=>this.search(keyword)} />
               </View>
                <View className={styles.content}>
                    <List list={list} />
                </View>
            </View>
        )
    }
}

export default Search;