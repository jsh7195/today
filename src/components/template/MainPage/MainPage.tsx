import React, { useEffect, useState } from 'react';
import {
  MainDiv,
  NavDownDiv,
  ContentDiv,
  ItemDiv,
  NavItemDiv,
  RightAd,
} from './style';
import Stock from '@template/Stock/Stock';
import Coin from '@template/Coin/Coin';
import Life from '@template/Life/Life';
import Game from '@template/Game/Game';
import GoogleAdsense from 'react-adsense-google';

interface MenuInfo {
  id: string;
  nm: string;
}

interface InitialState {
  menu: MenuInfo[];
}

const initialState: InitialState = {
  menu: [
    { id: 'Stock', nm: '주식' },
    { id: 'Coin', nm: '코인' },
    { id: 'Life', nm: '일상' },
    { id: 'Game', nm: '게임' },
    { id: 'Estate', nm: '부동산' },
  ],
};

const MainPage = (): React.ReactElement => {
  const [menu, setMenu] = useState('Stock');

  const getMenuEle = (type: string) => {
    switch (type) {
      case 'Stock':
        return <Stock />;
      case 'Coin':
        return <Coin />;
      case 'Life':
        return <Life />;
      case 'Game':
        return <Game />;
      default:
        return <div>No Content</div>;
    }
  };

  return (
    <>
      <MainDiv>
        <NavDownDiv>
          {initialState.menu.map((item) => {
            return (
              <NavItemDiv key={item.id + 'ids'}>
                <span onClick={(e) => setMenu(item.id)}>{item.nm}</span>
              </NavItemDiv>
            );
          })}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'nowrap',
            }}
          >
            <iframe
              title="coupa1"
              src="https://coupa.ng/bZicV8"
              width="120"
              height="240"
              frameBorder="0"
              scrolling="no"
              referrerPolicy="unsafe-url"
            ></iframe>
            <iframe
              title="coupa2"
              src="https://coupa.ng/bZicqx"
              width="120"
              height="240"
              scrolling="no"
              frameBorder="0"
              referrerPolicy="unsafe-url"
            ></iframe>
          </div>
        </NavDownDiv>

        <ContentDiv>{getMenuEle(menu)}</ContentDiv>
        <RightAd>
          <GoogleAdsense adClient="ca-pub-1338813848148433" adSlot="7410699856" />
        </RightAd>
      </MainDiv>
      <div style={{ textAlign: 'center' }}>
        나 편할려고 만든 사이트{' '}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: 'white' }}
          href="jsh7195gg@gmail.com"
        >
          문의
        </a>
      </div>
    </>
  );
};

export default MainPage;
