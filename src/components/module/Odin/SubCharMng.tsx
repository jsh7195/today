import React, { useEffect, useState } from 'react';
//import { charMngModel } from '@module/DB/OdinCharMngDB';
// import mongoose from 'mongoose';


    
// const charMngSchema = new mongoose.Schema({
//     userId : {type:String, required: true},
//     userPw : {type:String, required: true},
//     userGroup : String,        
//     charInfo : [{
//         charName : String,
//         charJob : String,
//         charLev : Number,
//         charDesc : String,
//         charGongHeo : Boolean,
//         charNanJangEe : Boolean,
//         charPrison : Boolean
//     }]
// });

// const charMngModel = mongoose.model('OdinCollection', charMngSchema);

const SubCharMng = (): React.ReactElement => {

    const url = process.env.MONGO_URL;
    console.log(url);
    // mongoose.Promise = global.Promise;
    
    // mongoose.connect(url)
    // .then(() => console.log(`mongoDB connected`))
    // .catch((err) => console.error(err));

    // const charMngSchema = new mongoose.Schema({
    //     userId : {type:String, required: true},
    //     userPw : {type:String, required: true},
    //     userGroup : String,        
    //     charInfo : [{
    //         charName : String,
    //         charJob : String,
    //         charLev : Number,
    //         charDesc : String,
    //         charGongHeo : Boolean,
    //         charNanJangEe : Boolean,
    //         charPrison : Boolean
    //     }]
    // });
    
    // const charMngModel = mongoose.model('OdinCollection', charMngSchema);

    /////////////////////////

    const _isLogin = false;
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    
    const handleInputId = (e:any) => {
        setInputId(e.target.value)
    }
 
    const handleInputPw = (e:any) => {
        setInputPw(e.target.value)
    }
 
	// login 버튼 클릭 이벤트
    const onClickLogin = () => {
        //charMngModel.find({name:'john'}).exec();

        console.log('click login');
    }
 
	// 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    [])

    return (        
        <>
            <div>
               ID : <input type="text" name='input_id' value={inputId} onChange={handleInputId}/>
               PW : <input type="password" name='input_pw' value={inputPw} onChange={handleInputPw}/>
               <button onClick={() => onClickLogin()}>등록</button>
            </div>
            {
                _isLogin ?
                    <div>
                        b
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