
export interface Movie {
    vod_name:string;
    vod_pic:string;
    vod_id:string;
    vod_lang:string;
    vod_remarks:string;
}

export interface MovieCategory {
    id:number;
    name:string;
}

interface SystemInfo {
    pixelRatio:number;
    windowHeight:number;
    windowWidth:number;
}

interface ResponseData{
    code:number;
    msg:string;
    data:any;
}