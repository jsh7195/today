import React, { useEffect, useState } from 'react';
import { MainDiv, NavDownDiv, ContentDiv, ItemDiv, NavItemDiv, RightAd } from './style';
import Stock from '@template/Stock/Stock';
import Coin from '@template/Coin/Coin';
import Life from '@template/Life/Life';

interface MenuInfo {
    id: string
    nm: string
}

interface InitialState {
    menu: MenuInfo[]
}

const initialState: InitialState = {
    menu: [
        { id: 'Stock', nm: '주식' },
        { id: 'Coin', nm: '코인' },
        { id: 'Life', nm: '일상' },
        { id: 'Game', nm: '게임' },
        { id: 'Estate', nm: '부동산' },
    ]
}

const MainPage = (): React.ReactElement => {

    const [menu, setMenu] = useState('Stock');

    const getMenuEle = (type: string) => {
        switch (type) {
            case 'Stock':
                return <Stock />
                break;
            case 'Coin':
                return <Coin />
                break;
            case 'Life':
                return <Life />
                break;
            default:
                return <div>No Content</div>
                break;
        }
    }

    // useEffect(() => {


    // }, [menu])


    return <MainDiv>
        <NavDownDiv>
            {
                initialState.menu.map((item) => {
                    return <NavItemDiv><span onClick={(e) =>
                        setMenu(item.id)
                    }>{item.nm}</span></NavItemDiv>
                })
            }
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                <iframe src="https://coupa.ng/bZicV8" width="120" height="240" frameBorder="0" scrolling="no" referrerPolicy="unsafe-url"></iframe>
                <iframe src="https://coupa.ng/bZicqx" width="120" height="240" scrolling="no" frameBorder="0" referrerPolicy="unsafe-url"></iframe>
            </div>
        </NavDownDiv>

        <ContentDiv>
            {getMenuEle(menu)}
        </ContentDiv>
        <RightAd>
            Ad pan
        </RightAd>
    </MainDiv >;
}

export default MainPage;