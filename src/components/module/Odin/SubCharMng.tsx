import React, { useState } from 'react';
import axios from 'axios';
import { CharTable, CharTableTh, CharInnerTable, CharInnerTr, CharInnerTd } from './style';

import arkmage from './images/arkmage.png';
import assasin from './images/assasin.png';
import berserker from './images/berserker.png';
import darkwizard from './images/darkwizard.png';
import defender from './images/defender.png';
import paladin from './images/paladin.png';
import saint from './images/saint.png';
import sniper from './images/sniper.png';

const SubCharMng = (): React.ReactElement => {

    const [_isLogin, setLoginInfo] = useState(false);
    const [_isLoginId, setLoginId] = useState('');
    const [_loginCharInfo, setChar] = useState([]);
    
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const loginInfo = {
        userId : inputId,
        userPw : inputPw
    }

    const getRunning = async(type:string,param:any) => {
        const response = await axios.get('http://localhost:3001/char'+type, {params: param});
        console.log("responseData :", response.data);

        // login
        if(type==='/login'){
            // 로그인 성공
            if(response.data.code === "001"){
                setLoginInfo(true);
                setLoginId(param.userId);
                setChar(response.data.characters);
            // 비밀번호 실패
            } else if (response.data.code === "002"){
                window.alert(response.data.msg);

            // 계정 없음
            } else if (response.data.code === "003"){
                window.alert(response.data.msg);
                if(window.confirm("Do you make account by " + param.userId + "?")){
                    createAccount();
                }
            }
        }

        // charInfo
        else if(type==='/charInfo'){
            setChar(response.data.characters);
            console.log(response.data.characters);
        }
    }

    // login 버튼 클릭 이벤트
    const accountLogin = () => {
        getRunning('/login', loginInfo);
    }

    //////////////////////////////////////////////

    const postRunning = async(type:string,param:any) => {
        const response = await axios.post('http://localhost:3001/char'+type, {params: param});
        console.log(response.data);
    }

    // 계정 생성
    const createAccount = () => {
        postRunning('/create', loginInfo);        
    }

    // 캐릭터 생성
    const insertChar = (charNum:number) => {

        const charInfo = {
            userId : _isLoginId,
            charNum : charNum,
            charName : "삼찬덕",
            charJob : "디펜더",
            charLev : 62,
            charDesc : "본캐"
        }

        postRunning('/insertChar', charInfo).then(() => {
            getRunning('/charInfo', loginInfo);
        });
        
    }

    // 캐릭터 정보 수정



    // 캐릭터 숙제 체크










    // 렌더링 함수
    const charRendering = () => {
        const result = [];
        for(let idx = 0; idx < 5 ; idx++ ){            
            result.push(
                <CharInnerTd key={idx}>
                    {
                        _loginCharInfo[idx]
                        ?
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <CharInnerTable>
                                            <tbody>
                                                <tr>
                                                    <td><img alt="Job" src={arkmage}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Lv.{_loginCharInfo[idx]["charLev"]} {_loginCharInfo[idx]["charJob"]}</td>
                                                </tr>
                                                <tr>
                                                    <td>{_loginCharInfo[idx]["charName"]}</td>
                                                </tr>
                                            </tbody>
                                        </CharInnerTable>
                                    </td>
                                    <td>
                                        <CharInnerTable>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <button type="button">공허</button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </CharInnerTable>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        : <button onClick={() => insertChar(idx)}>캐릭터생성</button>
                    }
                </CharInnerTd>
            );
        }
        return result;
    }


    const handleInputId = (e:any) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e:any) => {
        setInputPw(e.target.value)
    }
 
    return (
        <>
            <div>
               ID : <input type="text" name='input_id' value={inputId} onChange={handleInputId}/>
               PW : <input type="password" name='input_pw' value={inputPw} onChange={handleInputPw}/>
               <button onClick={() => accountLogin()}>가져오기</button>               
            </div>
            {
                _isLogin ?
                    <div>
                        <CharTable>
                            <thead>
                                <tr>
                                    <CharTableTh colSpan={5}>{ _isLoginId }</CharTableTh>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {charRendering()}                                    
                                </tr>
                            </tbody>                            
                        </CharTable>
                    </div>
                :
                <div>
                    a
                </div>
            }            
        </>
    )
}

export default SubCharMng;