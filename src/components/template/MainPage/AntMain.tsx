import React, { Component, useState, useEffect } from 'react';
import { Layout, Menu, Divider } from 'antd';
import {
  StockOutlined,
  CloudFilled,
  SmileTwoTone,
  DollarOutlined,
} from '@ant-design/icons';
import { isMobile } from 'react-device-detect';
import { Switch, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import Stock from '@template/Stock/Stock';
import Coin from '@template/Coin/Coin';
import Life from '@template/Life/Life';
import Game from '@template/Game/Game';
import { GoogleAd, GoogleAdFooter } from '@module/AD/GoogleAd';

interface MenuInfo {
  id: string;
  index: string;
  nm: string;
  icon: any;
  component: any;
  link: string;
}

interface InitialState {
  menu: MenuInfo[];
}

const initialState: InitialState = {
  menu: [
    {
      id: 'Life',
      index: '0',
      nm: '일상',
      icon: <CloudFilled />,
      component: Life,
      link: '/life',
    },
    {
      id: 'Stock',
      index: '1',
      nm: '주식',
      icon: <StockOutlined />,
      component: Stock,
      link: '/stock',
    },
    {
      id: 'Coin',
      index: '2',
      nm: '코인',
      icon: <DollarOutlined />,
      component: Coin,
      link: '/coin',
    },
    {
      id: 'Game',
      index: '3',
      nm: '게임',
      icon: <SmileTwoTone />,
      component: Game,
      link: '/game',
    },
    // { id: 'Estate', nm: '부동산' },
  ],
};

const AntMain = () => {
  const location = useLocation();

  const [state, setState] = useState({ collapsed: false });

  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setState({ collapsed });
  };
  const { SubMenu } = Menu;
  const { Header, Content, Sider, Footer } = Layout;

  const [menu, setMenu] = useState('life');
  const [menuIndex, setMenuIndex] = useState('0');

  const switchRoutes = (
    <Switch>
      <Route exact path="/" component={Life} />
      {initialState.menu.map((prop: MenuInfo) => {
        console.log(prop);
        return (
          <Route path={prop.link} component={prop.component} key={prop.id} />
        );
      })}
    </Switch>
  );

  useEffect(() => {
    initialState.menu.forEach((item) => {
      if (item.link === location.pathname) {
        setMenuIndex(item.index);
      }
    });

    console.log(location.pathname);
  }, [location.pathname, menuIndex]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={state.collapsed} onCollapse={onCollapse}>
        <div className="App-logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[menuIndex]}
          mode="inline"
          style={{ height: '100%' }}
        >
          {initialState.menu.map((item, index) => {
            return (
              <>
                <Menu.Item
                  key={index}
                  onClick={(e) => setMenu(item.id)}
                  style={{
                    fontSize: `${isMobile ? '5rem' : '1rem'}`,
                    height: `${isMobile ? '10%' : ''}`,
                    paddingTop: `${isMobile ? '80px' : ''}`,
                  }}
                >
                  {isMobile ? '' : item.icon}
                  <span style={{ fontSize: `${isMobile ? '5rem' : '1rem'}` }}>
                    <Link to={item.link}>{item.nm}</Link>
                  </span>
                </Menu.Item>
              </>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{ background: 'black', padding: 0, height: 'auto' }}
        ></Header>
        <Content style={{ backgroundColor: 'black' }}>
          <div style={{ margin: '0 0 0 15px' }}>{switchRoutes}</div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
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
              title="rice"
              src="https://coupa.ng/b6Bijd"
              width="120"
              height="240"
              frameBorder="0"
              scrolling="no"
              referrerPolicy="unsafe-url"
              style={{ background: 'white' }}
            ></iframe>
            <iframe
              title="coupa3"
              src="https://coupa.ng/b6Bckf"
              width="120"
              height="240"
              frameBorder="0"
              scrolling="no"
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
    </Layout>
  );
};

export default AntMain;
