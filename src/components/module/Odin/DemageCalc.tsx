import React, { useEffect, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import moment from 'moment';
import _ from 'lodash';
import infoImg from '@module/Odin/info1.png';
import statImg from '@module/Odin/stat_info.png';

const DemageCalc = (): React.ReactElement => {
  const [power, setPower] = useState('0');
  const [allpower, setAllPower] = useState('0');
  const [skillPower, setSkillPower] = useState('0');
  const [anyPower, setAnyPower] = useState('0');

  const [skillRate, setSkillRate] = useState('0');

  const [baseDmg, setDmg] = useState(0);
  const [skillDmg, setSkillDmg] = useState(0);

  const [realHitDmg, setRealHitDmg] = useState('0');

  const [correction, setCorrection] = useState('0');

  const [coreSkill, setCoreSkill] = useState(0);

  const percentCalc = (value: any) => {
    const valueInt = Number(value);
    const percentage = valueInt * 0.01 + 1;

    return Number(percentage.toFixed(2));
  };

  const skillRateCalc = (value: any) => {
    console.log(`${value} = > ${Number(value) / 100}`);
    return Number(value) / 100;
  };

  const caclDmg = () => {
    const calcBaseDmg =
      Number(power) * percentCalc(anyPower) * percentCalc(allpower);
    setDmg(Number(calcBaseDmg.toFixed(2)));
    const calcSkillDmg =
      calcBaseDmg * percentCalc(skillPower) * skillRateCalc(skillRate);
    setSkillDmg(Number(calcSkillDmg.toFixed(2)));
  };

  const calcRealDmg = () => {
    let corre = '';
    if (Number(realHitDmg) > Number(baseDmg)) {
      const diff = Number(realHitDmg) - Number(baseDmg);
      const calcRate = (diff / Number(baseDmg)) * 100;
      corre = calcRate.toFixed(2);
      setCorrection(String(calcRate.toFixed(2)));
    } else if (Number(realHitDmg) < Number(baseDmg)) {
      // 실제 때린 데미지가 작을 때
      const diff = Number(baseDmg) - Number(realHitDmg);
      const calcRate = (diff / Number(baseDmg)) * 100;
      corre = `-${calcRate.toFixed(2)}`;
      setCorrection(String('-' + calcRate.toFixed(2)));
    }
    console.log('skillDmg' , skillDmg , corre, (skillDmg * (Number(corre) / 100)), correction);

    let correSkillDmg = skillDmg + (skillDmg * (Number(corre) / 100));

    setCoreSkill(correSkillDmg);
  }

  useEffect(() => {
    caclDmg();
  }, [power, allpower, skillPower, anyPower, skillRate]);

  const calcRealDmgFn = () => {
    calcRealDmg();
  }

  return (
    <div>
      <span style={{ fontSize:'30px' }}>오딘 발할라 스킬데미지 계산기</span>
      <br/>
      <img alt="statImg" src={statImg} style={{ width : '25%'}}/>
      <br/>
      <img alt="info1" src={infoImg} />
      <br />
      <br />
      <br />
      <LabelInput
        id="power"
        label="공격력 : "
        value={power}
        setData={setPower}
      />
      <LabelInput
        id="skillPower"
        label="스킬 데미지 % : "
        value={skillPower}
        setData={setSkillPower}
      />
      <LabelInput
        id="anyPower"
        label="모든 데미지 % : "
        value={anyPower}
        setData={setAnyPower}
      />
      <LabelInput
        id="allpower"
        label="근접,원거리,마법 데미지 % : "
        value={allpower}
        setData={setAllPower}
      />
      <br />
      <LabelInput
        id="skillRate"
        label="스킬 계수 % : "
        value={skillRate}
        setData={setSkillRate}
      />
      <LabelInput
        id="baseDmg"
        label="계산한 평타 데미지 : "
        value={String(baseDmg)}
        setData={setDmg}
      />
      <LabelInput
        id="skillDmg"
        label="계산한 스킬 데미지 : "
        value={String(skillDmg)}
        setData={setSkillDmg}
      />
      <br />
      <br />
      <LabelInput
        id="realHitDmg"
        label="실제 몬스터 공격시 나오는 평타 데미지 : "
        value={realHitDmg}
        setData={setRealHitDmg}
      />
      <button onClick={()=>{calcRealDmgFn()}} style={{color:'black'}}>보정치 적용된 스킬뎀 계산하기</button>
      <br />
      <span title="몬스터레벨보다 공격력레벨이 높을 때 보정이 적용된다.">보정치 % : {correction}</span> <br />
      <span>보정치 적용된 스킬데미지 : {coreSkill}</span>
    </div>
  );
};

export default DemageCalc;
