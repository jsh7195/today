import React from 'react';
import { CloudFilled, SmileTwoTone } from '@ant-design/icons';
import { Switch, Route } from 'react-router-dom';
import { Common } from '@/myTypes/myTypes';
import Life from '@template/Life/Life';
import Game from '@template/Game/Game';
import Diablo from '@template/Diablo/Diablo';

const Body = () => {
  const Menus: Common.Menu[] = [
    {
      id: 'Life',
      index: '1',
      nm: '일상',
      icon: <CloudFilled />,
      component: Life,
      link: '/life',
    },
    {
      id: 'Game',
      index: '2',
      nm: '오딘 발할라',
      icon: <SmileTwoTone />,
      component: Game,
      link: '/game',
    },
    {
      id: 'Diablo',
      index: '3',
      nm: '디아블로2',
      icon: <SmileTwoTone />,
      component: Diablo,
      link: '/diablo',
    },
  ];

  const switchRoutes = (
    <Switch>
      <Route exact path="/" component={Life} />
      {Menus.map((prop: Common.Menu) => {
        <Route path={prop.link} component={prop.component} key={prop.id} />
        return (
          <Route path={prop.link} component={prop.component} key={prop.id} />
        );
      })}
    </Switch>
  );
  return switchRoutes;
};

export default Body;