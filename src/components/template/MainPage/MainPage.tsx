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
import { GoogleAd, GoogleAdFooter } from '@module/AD/GoogleAd';
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
                  style={{
                    width: '100%',
                    height: '140%',
                    display: 'inline-block',
                    textAlign: 'center',
                  }}
                  onClick={(e) => setMenu(item.id)}
                >
                  <p>{item.nm}</p>
                </span>
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
            width="160"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="coupa2"
            src="https://coupa.ng/b0aDTH"
            width="160"
            height="240"
            scrolling="no"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="baedduck"
            src="https://coupa.ng/b0aCTE"
            width="160"
            height="240"
            scrolling="no"
            frameBorder="0"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
          ></iframe>
          <iframe
            title="salchistake"
            src="https://coupa.ng/b0aDkt"
            width="160"
            height="240"
            frameBorder="0"
            scrolling="no"
            referrerPolicy="unsafe-url"
            style={{ background: 'white' }}
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
        <br />
        사이트문의 :{' '}
        <a style={{ color: 'white' }} href="mailto:jsh7195gg@gmail.com">
          jsh7195gg@gmail.com
        </a>
        <br />
        discord : 미숫가루라떼#4526
      </div>
    </>
  );
};

export default MainPage;
