import React, { useState } from 'react';
import axios from 'axios';
import { CharTable, CharTableTh, CharTableTbody, CharTableTd } from './style';
import { CharInnerLeftTable, CharInnerRightTable, CharInnerInfoTd, CharInnerNameTd, CharInnerBtnTd } from './style';
import { CharCreateHeaderTd, CharCreateBodyTd, CharCreateInput } from './style';
import { Btn, ToggleOn, ToggleOff } from './style';
import _ from 'lodash';
import ToggleSwitch from '@/components/common/ToggleSwitch';

import arkmage from './images/arkmage.png';
import assasin from './images/assasin.png';
import berserker from './images/berserker.png';
import darkwizard from './images/darkwizard.png';
import defender from './images/defender.png';
import paladin from './images/paladin.png';
import saint from './images/saint.png';
import sniper from './images/sniper.png';

const SubCharMng = (): React.ReactElement => {

    const jobList = [
        {jobNm:'버서커', pic:berserker},
        {jobNm:'디펜더', pic:defender},
        {jobNm:'아크메이지', pic:arkmage},
        {jobNm:'다크위저드', pic:darkwizard},
        {jobNm:'어쌔신', pic:assasin},
        {jobNm:'스나이퍼', pic:sniper},
        {jobNm:'세인트', pic:saint},
        {jobNm:'팔라딘', pic:paladin}
    ];

    const initCharListBox = [
        false,
        false,
        false,
        false,
        false
    ]
    
    const [_isLogin, setLoginInfo] = useState(false);
    const [_loginId, setLoginId] = useState('');
    const [_loginCharInfo, setChar] = useState([]);
    const [_isUpdate, setUpdateStatus] = useState(false);
    const [_createStatus, setCreatsStatus] = useState(initCharListBox);

    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const [inputCharName, setInputCharName] = useState('');
    const [inputCharLev, setInputCharLev] = useState(0);
    const [inputCharJob, setInputCharJob] = useState('버서커');

    const loginInfo = {
        userId : inputId,
        userPw : inputPw
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const getRunning = async(type:string,param:any) => {
        const response = await axios.get('http://localhost:3001/char'+type, {params: param});
        console.log("getRunning responseData :", response.data);

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
            console.log("/charInfo responseData : ", response.data.characters);
        }
    }

    // login 버튼 클릭 이벤트
    const accountLogin = () => {
        getRunning('/login', loginInfo);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const postRunning = async(type:string,param:any) => {
        const response = await axios.post('http://localhost:3001/char'+type, {params: param});
        console.log("postRunning responseData : ", response.data);
    }

    // 계정 생성
    const createAccount = () => {
        postRunning('/create', loginInfo);        
    }

    // 캐릭터 생성
    const insertChar = () => {

        const charInfo = {
            userId : _loginId,            
            charName : inputCharName,
            charLev : inputCharLev,
            charJob : inputCharJob,
            charDesc : "추가예정"
        }

        postRunning('/insertChar', charInfo).then(() => {
            getRunning('/charInfo', loginInfo);
        });        
    }

    // 캐릭터 정보 수정
    const updateCharInfo = (selCharNum:number) => {
        const charInfo = {
            userId : _loginId,
            charNum : selCharNum,
            charName : inputCharName,
            charLev : inputCharLev,
            charJob : inputCharJob,
            charDesc : "추가예정"
        }

        postRunning('/updateCharInfo', charInfo).then(() => {
            getRunning('/charInfo', loginInfo);
        });        
    };

    // 캐릭터 정보 수정
    const updateCharStatus = (selCharNum:number, dungeonId:string, isComplete:boolean) => {
        const charStatus = {
            userId : _loginId,
            charNum : selCharNum,
            dungeonId : dungeonId,
            isComplete : isComplete
        }

        postRunning('/updateCharStatus', charStatus).then(() => {
            getRunning('/charInfo', loginInfo);
        });        
    };

    // 캐릭터 삭제
    const deleteChar = (selCharNum:number) => {

        const charInfo = {
            userId : _loginId,            
            charNum : selCharNum
        }

        postRunning('/deleteChar', charInfo).then(() => {
            getRunning('/charInfo', loginInfo);
        });        
    }

    // 캐릭터 숙제 체크


    // 캐릭터 생성 화면 변경 체크
    const setCreateScene = (charNum:number, isCreate:boolean) => {
        var createStatus = _.cloneDeep(initCharListBox);
        createStatus[charNum] = isCreate;
        setCreatsStatus(createStatus);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 이벤트 핸들러
    const evHandler = (e:any) => {
        
        const type = e.target.name;
        const value = e.target.value;
        const value_id = e.target.id;

        if (type === 'input_id'){
            setInputId(value);
        } else if(type === 'input_pw') {
            setInputPw(value);
        } else if(type === 'input_char_name') {
            setInputCharName(value);
        } else if(type === 'input_char_lev') {
            setInputCharLev(value);
        } else if(type === 'input_char_job') {
            setInputCharJob(value);
        } else if(type === 'create_page_btn') {
            setInputCharName('');
            setInputCharLev(0);
            setInputCharJob('버서커');
            setUpdateStatus(false);

            setCreateScene(value, true);
        } else if(type === 'create_btn') {
            insertChar();
            setCreateScene(0, false);
        } else if(type === 'update_page_btn') {
            setInputCharName(_loginCharInfo[value]["charName"]);
            setInputCharLev(_loginCharInfo[value]["charLev"]);
            setInputCharJob(_loginCharInfo[value]["charJob"]);
            setUpdateStatus(true);
            
            setCreateScene(value, true);
        } else if(type === 'update_fix_btn') {
            updateCharInfo(_loginCharInfo[value]["charNum"]);
            setCreateScene(0, false);
        } else if(type === 'update_char_dungeon_on') {
            updateCharStatus(_loginCharInfo[value]["charNum"], value_id, false);
        } else if(type === 'update_char_dungeon_off') {
            updateCharStatus(_loginCharInfo[value]["charNum"], value_id, true);
        } else if(type === 'delete_btn') {
            deleteChar(_loginCharInfo[value]["charNum"]);
        } else {
            alert("== Handler Error ==");
        }
    }

    const getPicture = (jobNm:string) => {
        var picObj;
        for(let idx = 0; idx < jobList.length ; idx++ ){
            if(jobList[idx].jobNm === jobNm){
                picObj = jobList[idx];
                break;
            }
        }
        const pic = picObj ? picObj["pic"] : '';
        return pic;
    }
    
    // 렌더링 함수    
    const charRendering = () => {
        const result = [];
        for(let idx = 0; idx < 5 ; idx++ ){
            result.push(
                <CharTableTd key={idx}>
                    {
                        _createStatus[idx] ? charCreateRendering(idx)
                        : _loginCharInfo[idx] ? charInfoRendering(idx)
                        : <Btn name='create_page_btn' value={idx} onClick={evHandler}>캐릭터생성</Btn>
                    }
                </CharTableTd>
            );
        }
        return result;
    }

    const charInfoRendering = (idx:number) => {
        const pic = getPicture(_loginCharInfo[idx]["charJob"]);
        const result = [];
        result.push(
            <table>
                <tbody>
                    <tr>
                        <td>
                            <CharInnerLeftTable>
                                <tbody>
                                    <tr>
                                        <td><img alt="Job" src={pic}/></td>
                                    </tr>
                                    <tr>
                                        <CharInnerInfoTd>Lv.{_loginCharInfo[idx]["charLev"]} {_loginCharInfo[idx]["charJob"]}</CharInnerInfoTd>
                                    </tr>                                    
                                    <tr>
                                        <CharInnerNameTd>{_loginCharInfo[idx]["charName"]}</CharInnerNameTd>
                                    </tr>
                                </tbody>
                            </CharInnerLeftTable>
                        </td>
                        <td>
                            <CharInnerRightTable>
                                <tbody>
                                    <tr>
                                        <CharInnerNameTd width='40%'>공허</CharInnerNameTd>
                                        <CharInnerBtnTd>
                                            {_loginCharInfo[idx]["charGongHeo"]
                                            ?<ToggleOn name='update_char_dungeon_on' id='charGongHeo' value={idx} onClick={evHandler}>완료</ToggleOn>
                                            :<ToggleOff name='update_char_dungeon_off' id='charGongHeo' value={idx} onClick={evHandler}>미완</ToggleOff>}
                                        </CharInnerBtnTd>
                                    </tr>
                                    <tr>
                                        <CharInnerNameTd>난쟁</CharInnerNameTd>
                                        <CharInnerBtnTd>
                                            {_loginCharInfo[idx]["charNanJangEe"]
                                            ?<ToggleOn name='update_char_dungeon_on' id='charNanJangEe' value={idx} onClick={evHandler}>완료</ToggleOn>
                                            :<ToggleOff name='update_char_dungeon_off' id='charNanJangEe' value={idx} onClick={evHandler}>미완</ToggleOff>}
                                        </CharInnerBtnTd>
                                    </tr>
                                    <tr>
                                        <CharInnerNameTd>지감</CharInnerNameTd>
                                        <CharInnerBtnTd>
                                            {_loginCharInfo[idx]["charPrison"]
                                            ?<ToggleOn name='update_char_dungeon_on' id='charPrison' value={idx} onClick={evHandler}>완료</ToggleOn>
                                            :<ToggleOff name='update_char_dungeon_off' id='charPrison' value={idx} onClick={evHandler}>미완</ToggleOff>}   
                                        </CharInnerBtnTd>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <Btn name='update_page_btn' value={idx} onClick={evHandler}>수정</Btn>
                                            <Btn name='delete_btn' value={idx} onClick={evHandler}>삭제</Btn>
                                        </td>
                                    </tr>
                                </tbody>
                            </CharInnerRightTable>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
        
        return result;
    }

    const charCreateRendering = (idx:number) => {
        const result = [];
        result.push(
            <table>
                <tr>
                    <CharCreateHeaderTd>캐릭터명</CharCreateHeaderTd>
                    <CharCreateBodyTd><CharCreateInput type='text' name='input_char_name' value={inputCharName} onChange={evHandler}/></CharCreateBodyTd>
                </tr>
                <tr>
                    <CharCreateHeaderTd>레벨</CharCreateHeaderTd>
                    <CharCreateBodyTd><CharCreateInput type='number' name='input_char_lev' value={inputCharLev} onChange={evHandler} /></CharCreateBodyTd>
                </tr>
                <tr>
                    <CharCreateHeaderTd>직업</CharCreateHeaderTd>
                    <CharCreateBodyTd>
                        <select name='input_char_job' value={inputCharJob} onChange={evHandler}>
                            {
                                jobList.map((item, index)=>(
                                    <option key={item.jobNm} value={item.jobNm}>{item.jobNm}</option>
                                ))
                            }
                        </select>
                    </CharCreateBodyTd>
                </tr>
                <tr>
                    <td colSpan={2} align='right'>
                        {
                            _isUpdate ? <Btn name='update_fix_btn' value={idx} onClick={evHandler}>수정</Btn>
                                      : <Btn name='create_btn' onClick={evHandler}>등록</Btn>
                        }
                        
                    </td>
                </tr>
            </table>
        );
        return result;
    }

    return (
        <>
            {
                _isLogin ?
                    <div>
                        <CharTable>
                            <thead>
                                <tr>
                                    <CharTableTh colSpan={5}>{ _loginId }</CharTableTh>
                                </tr>
                            </thead>
                            <CharTableTbody>
                                <tr>
                                    {charRendering()}
                                </tr>
                            </CharTableTbody>
                        </CharTable>
                    </div>
                : <div>
                    ID : <input type="text" name='input_id' value={inputId} onChange={evHandler}/>
                    PW : <input type="password" name='input_pw' value={inputPw} onChange={evHandler}/>
                    <button onClick={() => accountLogin()}>가져오기</button>               
                </div>
            }            
        </>
    )
}

export default SubCharMng;