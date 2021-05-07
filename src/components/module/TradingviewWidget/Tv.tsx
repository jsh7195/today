import React, { useEffect } from 'react';

interface Props {
    ticker: string
}
export const Tv = ({
    ticker
}: Props): React.ReactElement => {
    const makeScriptSrc = () => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript';
        script.async = true;
        document.getElementById("coinChart")!.innerHTML = '';
        document.getElementById("coinChart")!.appendChild(script);
    }

    const makeCoinChart = (ticker: string) => {
        if (document.getElementById("coinChart")) {
            
                const innerScript = document.createElement('script');
                innerScript.type = 'text/javascript';
                innerScript.innerHTML = eval(JSON.stringify(
                    `new TradingView.widget(
                            {
                                "width": 980,
                                "height": 610,
                                "symbol": "BITHUMB:${ticker ? ticker.replace('KRW-','') : 'BTC'}KRW",
                                "interval": "D",
                                "timezone": "Etc/UTC",
                                "theme": "dark",
                                "style": "1",
                                "locale": "kr",
                                "toolbar_bg": "#f1f3f6",
                                "enable_publishing": false,
                                "hide_side_toolbar": false,
                                "allow_symbol_change": true,
                                "details": true,
                                "container_id": "tradingview_a0c00"
                            }
                        )`
                )
                )
                document.getElementById("coinChart2")!.innerHTML = '';
                document.getElementById("coinChart2")!.appendChild(innerScript);
            
        }
    }

    useEffect(() => {
        makeCoinChart(ticker);
    }, [ticker])

    useEffect(() => {
        if(document.getElementById('coinChart')!.childNodes.length === 0){
            makeScriptSrc();
        }
        
        setTimeout(() => {
            makeCoinChart(ticker);
        },500)
    }, [])

    return (
        <div className="tradingview-widget-container">
            <div id="tradingview_a0c00"></div>
            <div className="tradingview-widget-copyright">TradingView 제공 <a href="https://kr.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE" rel="noopener" target="_blank"><span className="blue-text">BTCUSDT 차트</span></a></div>
            <div id="coinChart" />
            <div id="coinChart2" />
        </div>
    )
}

export default Tv;

