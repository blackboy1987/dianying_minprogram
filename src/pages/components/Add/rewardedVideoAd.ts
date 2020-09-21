export interface RewardedVideoAd {
    adUnitId:string;
    load?:()=>void;
    error?:(err?:any)=>void;
    close:(res?:any)=>void;
}
let rewardedVideoAd:any = null;


export const rewardedVideoAdPlay=({adUnitId,load,error,close}:RewardedVideoAd)=>{
    if(wx.createRewardedVideoAd){
        rewardedVideoAd = wx.createRewardedVideoAd({ adUnitId })
        rewardedVideoAd.onLoad(()=>{
            if(load){
                load();
            }
        })
        rewardedVideoAd.onError((err:any) => {
            if(error) {
                error(err);
            }
        })
        rewardedVideoAd.onClose((res:any) => {
            if(close){
                close(res);
            }
        })
    }

    if(rewardedVideoAd){
        rewardedVideoAd.show()
            .catch(() => {
                rewardedVideoAd.load().then(() => rewardedVideoAd.show()).catch((err:any) => {
                    console.log('激励视频 广告显示失败')
                })
            })
    }

}