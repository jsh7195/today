import React, { useEffect } from 'react';
import { CloudFilled, SmileTwoTone } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Life from '@template/Life/Life';
import Game from '@template/Game/Game';
import Diablo from '@template/Diablo/Diablo';
import { Common } from '@/myTypes/myTypes';
import { getOffsetTo, scrollMove } from '@lib/common'

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

  return (
    <header id="header" className="fixed-top ">
      <div className="container d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="index.html">
            Game Application<span>.</span>
          </a>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            {Menus ? (
              Menus.map((menu) => {
                return (
                  <li>
                    <Link className="nav-link scrollto active" to={menu.link} onClick={(item) => {
                      scrollMove(getOffsetTo('about'));
                    }}>{menu.nm}</Link>
                  </li>
                );
              })
            ) : (
              <li>빈 메뉴</li>
            )}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
