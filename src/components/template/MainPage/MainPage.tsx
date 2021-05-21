import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
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
import {GoogleAd, GoogleAdFooter} from '@module/AD/GoogleAd';
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
    // { id: 'Estate', nm: '부동산' },
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
                <span 
                 style={{ width: '100%', height:'140%', display: 'inline-block', textAlign: 'center'}}
                 onClick={(e) => setMenu(item.id)}>{item.nm}</span>
              </NavItemDiv>
            );
          })}
          </NavDownDiv>
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
        <div>
          <GoogleAd />
        </div>
        <ContentDiv>{getMenuEle(menu)}</ContentDiv>
        {/* <RightAd> */}
          
        {/* </RightAd> */}
      </MainDiv>
      <GoogleAdFooter />
      <div style={{ textAlign: 'center' }}>
        성투하세요
        <a
          style={{ color: 'white' }}
          href="mailto:jsh7195gg@gmail.com"
        >
          메일로 문의
        </a>
      </div>
    </>
  );
};

export default MainPage;
