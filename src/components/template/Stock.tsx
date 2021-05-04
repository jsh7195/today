import React, { useEffect, useState } from 'react';
import LabelInput from '@module/LabelInput/LabelInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../store';
import { fetchWaterTempData } from '@actions/Investment/WaterTempActions';
import { fetchCoinListData, fetchCoinInfoData, fetchBinBtcInfoData } from '@actions/Investment/CoinInfoActions';

const Stock = (): React.ReactElement => {

    const dispatch = useDispatch();

    const [selectCoins, setSelectCoin] = useState('KRW-BTC');

    const waterTempReducer = useSelector(
        (state: RootReducerType) => state.WaterTempReducer
    );

    const coinListReducer = useSelector(
        (state: RootReducerType) => state.CoinListReducer
    );
    const coinInfoReducer = useSelector(
        (state: RootReducerType) => state.CoinInfoReducer
    );

    const coinOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectCoin(e.target.value);
    }

    useEffect(() => {
        const searchWaterTempFn = () => {
            dispatch(fetchWaterTempData());
        };

        const searchCoinListFn = () => {
            dispatch(fetchCoinListData());
        };

        const searchBinBtcFn = () => {
            dispatch(fetchBinBtcInfoData());
        }

        searchWaterTempFn();
        searchCoinListFn();
        searchBinBtcFn();
    }, []);

    useEffect(() => {
        const searchCoinInfoFn = () => {
            dispatch(fetchCoinInfoData(selectCoins));
        };

        searchCoinInfoFn();
    }, [selectCoins])
    return (
        <div>
            <LabelInput
                label="온도"
                value={waterTempReducer.temp || ""}
                readOnly
            />

            <select onChange={coinOnChange}>
                {
                    !!coinListReducer.success ?
                        coinListReducer?.coinList?.map((item) =>
                            <option value={item.market}>{`${item.korean_name}(${item.english_name})`}</option>
                        )
                        :
                        <option>코인 목록이 존재하지 않습니다.</option>
                }
            </select>
            <div>
                {
                    !!coinInfoReducer.success ?
                        coinInfoReducer?.coinInfo?.map((item) => 
                        <div>
                            현재가 : <span>{item.trade_price}</span><br/>
                            전일대비<br/>
                            <span>{(item.change_rate * 100).toFixed(2)}%</span><br/>
                            <span>{item.change_price}원</span><br/>
                        </div>
                        )
                        :
                        <span>코인을 선택해주세요</span>
                }
            </div>
        </div>
    )
}

export default Stock;