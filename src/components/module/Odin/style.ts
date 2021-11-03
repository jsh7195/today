import styled from 'styled-components';

//////////////////////////////////////////////
/////////////////////////////////// Main Table
//////////////////////////////////////////////

export const CharTable = styled.table`
    width: 100%;
    height: 200px;
    min-width: 500px;
    border: 1px solid;
    border-collapse: collapse;
    background-color: white;
`;

export const CharTableTh = styled.th`
    padding: 10px;
    text-align: left;
    font-size: 24px;
    font-color: white;
    background-color: black;
`;

export const CharTableTbody = styled.tbody`
    border: 1px solid;
    border-collapse: collapse;
`;

export const CharTableTd = styled.th`
    padding: 10px;
    border: 1px solid;
    border-collapse: collapse;
    width: 20%;
    text-align: center;
`;

//////////////////////////////////////////////
////////////////////////////////// Inner Table
//////////////////////////////////////////////

export const CharInnerLeftTable = styled.table`
    width: 100%;
    height: 100%;
    background-color: rgb(241, 196, 15);
    border: 1px solid;
    border-collapse: collapse;
`;

export const CharInnerRightTable = styled.table`
    width: 100%;
    height: 100%;
    font-color: black;
`;

export const CharInnerInfoTd = styled.td`
    text-align: left;
    font-size: 13px;
    font-color: black;
`;

export const CharInnerNameTd = styled.td`
    text-align: left;
    font-size: 15px;
    font-color: rgb(99, 95, 79);
`;

export const CharInnerBtnTd = styled.td`
    text-align: right;   
`;

//////////////////////////////////////////////
/////////////////////// Character Create Table
//////////////////////////////////////////////

export const CharCreateHeaderTd = styled.td`
    width: 30%;
    text-align: center;
`;

export const CharCreateBodyTd = styled.td`
    width: 70%;
    text-align: left;
`;

export const CharCreateInput = styled.input`
    width: 100%;
`;

//////////////////////////////////////////////
/////////////////////////////////// Components
//////////////////////////////////////////////

export const Btn = styled.button`

    margin: 5px;
    outline: none;

    width: 100%;
    height: 40px;    
    border: 2px solid #000;
    font-family: '맑은 고딕';
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: all 0.3s ease;
  
    &:hover {
        background: #000;
        color: #fff;
    }

    &:before {
        position: absolute;
        content: '';
        display: inline-block;
        top: -180px;
        left: 0;
        width: 30px;
        height: 100%;
        background-color: #fff;
        animation: shiny-btn1 3s ease-in-out infinite;
    }
    
    &:active {
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.3),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
        inset -4px -4px 6px 0 rgba(255,255,255,.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, .2);
    }  
`;

export const ToggleOn = styled.button`

    font-family:고딕체;
    background:#2ef1ff;
    background:-o-linear-gradient(90deg, #2ef1ff, #3b9ceb);
    background:-moz-linear-gradient( center top, #2ef1ff 5%, #3b9ceb 100% );
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #2ef1ff), color-stop(1, #3b9ceb) );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2ef1ff', endColorstr='#3b9ceb');
    background:-webkit-linear-gradient(#2ef1ff, #3b9ceb);
    background:-ms-linear-gradient(#2ef1ff, #3b9ceb);
    background:linear-gradient(#2ef1ff, #3b9ceb);
    text-indent:0px;
    line-height:6px;
    -moz-border-radius:7px;
    -webkit-border-radius:7px;
    border-radius:7px;
    text-align:center;
    vertical-align:middle;
    display:inline-block;
    font-size:15px;
    color:#ffffff;   
    padding:10px;
    text-shadow:#6daac2 2px 2px 0px;
    border-color:#659dab;
    border-width:2px;
    border-style:solid;

    &:active {
        position:relative;
        top:3px
    }

    &:hover {
        background:#3b9ceb;
        background:-o-linear-gradient(90deg, #3b9ceb, #2ef1ff);
        background:-moz-linear-gradient( center top, #3b9ceb 5%, #2ef1ff 100% );
        background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #3b9ceb), color-stop(1, #2ef1ff) );
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3b9ceb', endColorstr='#2ef1ff');
        background:-webkit-linear-gradient(#3b9ceb, #2ef1ff);
        background:-ms-linear-gradient(#3b9ceb, #2ef1ff);
        background:linear-gradient(#3b9ceb, #2ef1ff);
    }
`;

export const ToggleOff = styled.button`

    font-family:고딕체;
    background:#db0f24;
    background:-o-linear-gradient(90deg, #db0f24, #f09898);
    background:-moz-linear-gradient( center top, #db0f24 5%, #f09898 100% );
    background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #db0f24), color-stop(1, #f09898) );
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#db0f24', endColorstr='#f09898');
    background:-webkit-linear-gradient(#db0f24, #f09898);
    background:-ms-linear-gradient(#db0f24, #f09898);
    background:linear-gradient(#db0f24, #f09898);
    text-indent:0px;
    line-height:6px;
    -moz-border-radius:7px;
    -webkit-border-radius:7px;
    border-radius:7px;
    text-align:center;
    vertical-align:middle;
    display:inline-block;
    font-size:15px;
    color:#ffffff;   
    padding:10px;
    text-shadow:#6daac2 2px 2px 0px;
    border-color:#ff0000;
    border-width:2px;
    border-style:solid;

    &:active {
        position:relative;
        top:3px
    }

    &:hover {
        background:#f09898;
        background:-o-linear-gradient(90deg, #f09898, #db0f24);
        background:-moz-linear-gradient( center top, #f09898 5%, #db0f24 100% );
        background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #f09898), color-stop(1, #db0f24) );
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f09898', endColorstr='#db0f24');
        background:-webkit-linear-gradient(#f09898, #db0f24);
        background:-ms-linear-gradient(#f09898, #db0f24);
        background:linear-gradient(#f09898, #db0f24);
    }
`;