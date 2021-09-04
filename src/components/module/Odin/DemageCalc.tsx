import React, { useEffect, useState } from 'react';
import LabelInput from '../LabelInput/LabelInput';
import moment from 'moment';
import _ from 'lodash';

const DemageCalc = (): React.ReactElement => {

    const [ power, setPower ] = useState("0");
    const [ allpower, setAllPower ] = useState("0");
    const [ skillPower, setSkillPower ] = useState("0");
    const [ anyPower, setAnyPower ] = useState("0");
    
    const [ skillRate, setSkillRate ] = useState("0");

    const [ baseDmg , setDmg ] = useState(0);
    const [ skillDmg , setSkillDmg ] = useState(0);

    const [ realHitDmg, setRealHitDmg ] = useState("0");

    const [ correction, setCorrection ] = useState("0");

    const percentCalc = (value:any) => {
        const valueInt = Number(value);
        const percentage = (valueInt * 0.01) + 1;
       
        return Number(percentage.toFixed(2));
    }

    const skillRateCalc = (value:any) => {
        console.log(`${value} = > ${Number(value) / 100}`);
        return Number(value) / 100;
    }

    const caclDmg = () => {
        const calcBaseDmg = Number(power) * percentCalc(anyPower) * percentCalc(allpower);
        setDmg(Number(calcBaseDmg.toFixed(2)));
        const calcSkillDmg = calcBaseDmg * percentCalc(skillPower) * skillRateCalc(skillRate);
        setSkillDmg(Number(calcSkillDmg.toFixed(2)));
    }


    useEffect(() => {
        caclDmg();
    }, [power,allpower,skillPower,anyPower,skillRate])

    useEffect(() => {
        
        if(Number(realHitDmg) > Number(baseDmg)){
            const diff = Number(realHitDmg) - Number(baseDmg);
            const calcRate = (diff/Number(baseDmg))*100;
            setCorrection(String(calcRate.toFixed(2)));
        } else if(Number(realHitDmg) < Number(baseDmg)){
            // 실제 때린 데미지가 작을 때
            const diff = Number(baseDmg) - Number(realHitDmg);
            const calcRate = (diff / Number(baseDmg)) * 100;
            setCorrection(String("-"+calcRate.toFixed(2)));
        }
    }, [realHitDmg])


    return (
        <div>
          <LabelInput id="power" label="공격력 : " value={power} setData={setPower} />
          <LabelInput id="allpower" label="근접,원거리,마법 데미지 % : " value={allpower} setData={setAllPower} /> 
          <LabelInput id="anyPower" label="모든 데미지 % : " value={anyPower} setData={setAnyPower} /> 
          <LabelInput id="skillPower" label="스킬 데미지 % : " value={skillPower} setData={setSkillPower} /> 

          <LabelInput id="skillRate" label="스킬 계수 % : " value={skillRate} setData={setSkillRate} /> 
          
          <LabelInput id="baseDmg" label="계산한 평타 데미지 : " value={String(baseDmg)} setData={setDmg} /> 
          <LabelInput id="skillDmg" label="계산한 스킬 데미지 : " value={String(skillDmg)} setData={setSkillDmg} /> 


          <LabelInput id="realHitDmg" label="실제 몬스터 공격시 나오는 평타 데미지 : " value={realHitDmg} setData={setRealHitDmg} /> 

          <LabelInput id="correction" label="내 공격력레벨과 몬스터레벨 보정치 % : " value={correction} setData={setCorrection} /> 

        </div>
    )
}

export default DemageCalc;