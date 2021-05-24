import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

interface Props {
  ticker: string;
  kind: string;
}
export const Tv = ({ ticker, kind }: Props): React.ReactElement => {
  const makeScriptSrc = () => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.type = 'text/javascript';
    script.async = true;
    document.getElementById('coinChart')!.innerHTML = '';
    document.getElementById('coinChart')!.appendChild(script);
  };

  const makeCoinChart = (ticker: string, kind: string) => {
    if (
      document.getElementById('coinChart') &&
      document.getElementById('coinChart')!.childNodes.length > 0
    ) {
      let symbol =
        kind === 'coin'
          ? `"BITHUMB:${ticker ? ticker.replace('KRW-', '') : 'BTC'}KRW"`
          : `"NASDAQ:QQQ"`;

      const innerScript = document.createElement('script');
      innerScript.type = 'text/javascript';
      innerScript.innerHTML = eval(
        JSON.stringify(
          `new TradingView.widget(
                            {
                                "width": "100%",
                                "height": "100%",
                                "symbol": ${symbol},
                                "interval": "D",
                                "timezone": "Etc/UTC",
                                "theme": "dark",
                                "style": "1",
                                "locale": "kr",
                                "toolbar_bg": "#f1f3f6",
                                "enable_publishing": false,
                                "hide_side_toolbar": false,
                                "allow_symbol_change": true,
                                "details": false,
                                "container_id": "tradingview_a0c00"
                            }
                        )`
        )
      );
      document.getElementById('coinChart2')!.innerHTML = '';
      document.getElementById('coinChart2')!.appendChild(innerScript);
    }
  };

  useEffect(() => {
    makeCoinChart(ticker, kind);
  }, [ticker]);

  useEffect(() => {
    if (document.getElementById('coinChart')!.childNodes.length === 0) {
      makeScriptSrc();
    }

    setTimeout(() => {
      makeCoinChart(ticker, kind);
    }, 1000);
  }, []);

  return (
    <div style={{ minWidth:`${isMobile?'45rem':'80rem'}`, minHeight:'500px', height:'1000px' }}>
      <div className="tradingview-widget-container">
        <div id="tradingview_a0c00"></div>
        <div className="tradingview-widget-copyright">
          TradingView 제공{' '}
          <a
            href="https://kr.tradingview.com/symbols/BTCUSDT/?exchange=BINANCE"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="blue-text">TradingView 차트</span>
          </a>
        </div>
        <div id="coinChart" />
        <div id="coinChart2" />
      </div>
    </div>
  );
};

export default Tv;
