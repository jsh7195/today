import React, { Component, useState } from 'react';
import { Layout, Menu, Breadcrumb, Alert } from 'antd';
import Icon from '@ant-design/icons';
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

const AntMain = () => {

    const [state, setState] = useState({ collapsed: false });

    const onCollapse = (collapsed: any) => {
        console.log(collapsed);
        setState({ collapsed });
    }
    const { SubMenu } = Menu;
    const { Header, Content, Sider, Footer } = Layout;

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

    return (<Layout style={{ minHeight: '100vh' }}>
        <Sider
            collapsible
            collapsed={state.collapsed}
            onCollapse={onCollapse}
        >
            <div className="App-logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                {
                    initialState.menu.map((item, index) => {
                        return (<Menu.Item key={index} onClick={(e) => setMenu(item.id)}>
                            <Icon type="pie-chart" />
                            <span>{item.nm}</span>
                        </Menu.Item>)
                    })
                }
            </Menu>
        </Sider>
        <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' , backgroundColor: 'black' }}>
                {getMenuEle(menu)}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2018 Created by Ant UED
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
            </Footer>
        </Layout>
    </Layout>);
}

export default AntMain;