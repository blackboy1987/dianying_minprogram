export interface InterstitialAd {
    adUnitId:string;
    load?:()=>void;
    error?:(err?:any)=>void;
    close?:(res?:any)=>void;
}
let interstitialAd:any = null


export const interstitialAdPlay=({adUnitId,load,error,close}:InterstitialAd)=>{
    if(wx.createInterstitialAd&&interstitialAd==null){
        console.log("wx.createInterstitialAd",wx.createInterstitialAd);
        interstitialAd = wx.createInterstitialAd({ adUnitId })
        interstitialAd.onLoad(() => {
           if(load){
               load();
           }
        })
        interstitialAd.onError((err:any) => {
            if(error) {
                error(err);
            }
        })
        interstitialAd.onClose((res:any) => {
            if(close) {
                close(res);
            }
        })
    }
    if(interstitialAd){
        interstitialAd.show().catch((err:any) => {
            if(error) {
                error(err);
            }
        })
    }



}