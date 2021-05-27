import React from 'react';

const TopCrypto = (): React.ReactElement => {
    return (
        <div>
            <iframe src={`https://www.widgets.investing.com/top-cryptocurrencies?theme=darkTheme&cols=symbol,priceUsd,chg24,chg7`}
                width="900"
                height="500"
                frameBorder="0"
                allowTransparency={true}
                marginWidth={0}
                marginHeight={0} >
            </iframe >
        </div >
    )
}

export default TopCrypto;