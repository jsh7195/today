import React, { useEffect } from 'react';
import GoogleAdsense from 'react-adsense-google';

const GoogleAd = () => {

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [])

    // return <GoogleAdsense adClient="ca-pub-1338813848148433" adSlot="7410699856" />;
    return (
        <div>
            <ins
                className="adsbygoogle"
                style={{ display: "inline-block", width: "728px", height: "90px" }}
                data-ad-client="ca-pub-1338813848148433"
                data-ad-slot="7410699856"
            />
        </ div>
    )
}

export default GoogleAd;