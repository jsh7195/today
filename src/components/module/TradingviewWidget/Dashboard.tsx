import React, { useEffect } from 'react';

export const Dashboard = (): React.ReactElement => {

    const makeNasdaqSnp = () => {
        if (document.getElementById("dashboard")) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js'
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbols": [
                    {
                        "proName": "FOREXCOM:SPXUSD",
                        "title": "S&P 500"
                    },
                    {
                        "proName": "FOREXCOM:NSXUSD",
                        "title": "나스닥 100"
                    },
                    {
                        "proName": "FX_IDC:EURUSD",
                        "title": "EUR/USD"
                    }
                ],
                "colorTheme": "dark",
                "isTransparent": false,
                "showSymbolLogo": true,
                "locale": "kr",
                "width": "50%"
            });
            document.getElementById("dashboard")!.appendChild(script);
        }
    }


    useEffect(() => {
        makeNasdaqSnp()
    }, [])


    return (
        <div className="tradingview-widget-container" style={{ minWidth: '800px' , width: '800px' }}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com" rel="noopener" target="_blank"><span className="blue-text">쿼트</span></a></div>
            <div id="dashboard" />
        </div>
    )
}

export default Dashboard;