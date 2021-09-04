import React from 'react';
import DemageCalc from '@/components/module/Odin/DemageCalc';

const Life = (): React.ReactElement => {
  return (
    <>
      <div>
        <span>오딘 발할라 라이징</span>
        <DemageCalc />
      </div>
      <div>
        <span>리그오브레전드</span>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://lolchess.gg/items" >롤체지지 아이템</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://www.op.gg/">오피지지</a>
          </li>
        </ul>
      </div>
      <div>
        <span>POE</span>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" style={{color: "white" }}  href="https://poe.ninja/">닌자</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://poe.game.daum.net/trade/search">POE거래소</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://cafe.naver.com/poekorea">POE네이버카페</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Life;
