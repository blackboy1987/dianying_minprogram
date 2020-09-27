import * as React from 'react';
import 'anna-remax-ui/dist/anna.css';
import {useAppEvent} from 'remax/macro';
import './app.css';
import request from "@/util/request";
import {setStorage} from "@/util/wxUtils";

const App: React.FC = props => {

    useAppEvent('onLaunch', () => {
        console.log("onLaunch");
        request("api/site",(result)=>{
            setStorage("siteInfo",result);
        })
    });

    return props.children as React.ReactElement;
};

export default App;
