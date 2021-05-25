import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export const Dashboard = (): React.ReactElement => {
  const makeNasdaqSnp = () => {
    if (document.getElementById('dashboard')) {
      const script = document.createElement('script');
      script.src =
        'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          {
            proName: 'FOREXCOM:SPXUSD',
            title: 'S&P 500',
          },
          {
            proName: 'FOREXCOM:NSXUSD',
            title: '나스닥 100',
          },
          {
            proName: 'FX_IDC:EURUSD',
            title: 'EUR/USD',
          }
        ],
        colorTheme: 'dark',
        isTransparent: false,
        showSymbolLogo: true,
        locale: 'kr',
        width: '100%',
        height: '100%',
      });
      document.getElementById('dashboard')!.appendChild(script);
    }
  };

  useEffect(() => {
    makeNasdaqSnp();
  }, []);

  return (
    <div style={{ width: '80%' , overflowX: 'auto' }}>
      <div>
        <div className="tradingview-widget-container">
          <div id="dashboard" />
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
