import React, { useEffect, useState } from 'react';
import LabelInput from '@module/LabelInput/LabelInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../store';
import { fetchWaterTempData } from '../../actions/WaterTempActions';
import { fetchCoinListData, fetchCoinInfoData } from '../../actions/CoininfoActions';

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

        searchWaterTempFn();
        searchCoinListFn();
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
                            <span>{item.candle_acc_trade_price}</span>
                        )
                        :
                        <span>코인을 선택해주세요</span>
                }
            </div>
        </div>
    )
}

export default Stock;