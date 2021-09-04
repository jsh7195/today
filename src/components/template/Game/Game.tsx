import React from 'react';
import DemageCalc from '@/components/module/Odin/DemageCalc';
import SubCharMng from '@/components/module/Odin/SubCharMng';

const Life = (): React.ReactElement => {
  return (
    <>
      <div>
        <span>오딘 발할라 라이징</span>
        <SubCharMng />
        <DemageCalc />
      </div>
    </>
  );
};

export default Life;
