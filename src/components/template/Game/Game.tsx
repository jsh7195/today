import React from 'react';
import DemageCalc from '@/components/module/Odin/DemageCalc';
import SubCharMng from '@/components/module/Odin/SubCharMng';

const Game = (): React.ReactElement => {
  return (
    <>
      <div>
        <SubCharMng />
        <DemageCalc />
      </div>
    </>
  );
};

export default Game;
