interface PlayUrl{
    urls:string[];
}
export interface Movie {
    lang?:string;
    area?:string;
    actors?:string;
    director?:string;
    vod_name?:string;
    vod_pic?:string;
    vod_id?:string;
    vod_actor?:string;
    vod_content?:string;
    vod_remarks?:string;
    vod_director?:string;
    vod_play_url?:string;
    vod_year?:string;
    type_name?:string;
    vod_score?: number;

    id?:number;
    title?:string;
    img?:string;
    playUrls?:PlayUrl[];

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

interface SiteInfo {
    name:string;
    logo:string;
}

interface ResponseData{
    code:number;
    msg:string;
    data:any;
}