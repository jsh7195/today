import React, { useEffect, useState } from 'react';
import { CloudFilled, SmileTwoTone } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Life from '@template/Life/Life';
import Game from '@template/Game/Game';
import Diablo from '@template/Diablo/Diablo';
import { Common } from '@/myTypes/myTypes';
import { getOffsetTo, scrollMove } from '@lib/common'
import { isMobile } from 'react-device-detect';

const Header = (): React.ReactElement => {

  const Menus: Common.Menu[] = [
    {
      id: 'Life',
      index: '1',
      nm: '일상 Life',
      icon: <CloudFilled />,
      component: Life,
      link: '/life',
    },
    {
      id: 'Game',
      index: '2',
      nm: '오딘 발할라 Odin',
      icon: <SmileTwoTone />,
      component: Game,
      link: '/game',
    },
    {
      id: 'Diablo',
      index: '3',
      nm: '디아블로2 Diablod 2',
      icon: <SmileTwoTone />,
      component: Diablo,
      link: '/diablo',
    },
  ];

  const [nav, setNav] = useState(false);
  
  const navHandler = () => {
    setNav(!nav);
  }

  const [active, setActive] = useState(0); //active index

  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="/">
            Game App<span>.</span>
          </a>
        </h1>

        <nav id="navbar" className={ nav ? "navbar order-last order-lg-0 navbar-mobile" : "navbar order-last order-lg-0"}>
          <ul>
            {Menus ? (
              Menus.map((menu) => {
                return (
                  <li onMouseEnter={(item) => {
                    setActive(Number(menu.index));
                  }}>
                    <Link className={active === Number(menu.index) ? "nav-link scrollto active" : "nav-link scrollto" } to={menu.link} onClick={(item) => {
                      scrollMove(getOffsetTo('about'));
                      setNav(false);
                    }}
                    >{menu.nm}</Link>
                  </li>
                );
              })
            ) : (
              <li>빈 메뉴</li>
            )}
          </ul>
          <i className={ nav ? "bi-x mobile-nav-toggle" : "bi bi-list mobile-nav-toggle" } onClick={navHandler}></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
