import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { RootReducerType } from '@store/store';
import { fetchWaterTempData } from '@store/actions/Investment/WaterTempActions';
import { fetchCoinListData, fetchCoinInfoData, fetchBinBtcInfoData } from '@actions/Investment/CoinInfoActions';
import { fetchFgi, fgiState, exchangeRateState, exchangeRateLoading, fgiLoading, fetchExchangeRate } from '@slice/StockSlice';
import { Tv } from '@module/TradingviewWidget/Tv';
import { Dashboard } from '@module/TradingviewWidget/Dashboard';
import EconomicCalendar from '@module/InvestingWidget/EconomicCalendar';
import CurrencyConvert from '@module/InvestingWidget/CurrencyConvert';
import { RootDiv, ItemDiv } from './style';

const Stock = (): React.ReactElement => {

    const dispatch = useDispatch();

    const [selectCoins,] = useState('KRW-BTC');

    const exchangeInfo = useSelector(exchangeRateState);
    const selectorExchangeRateLoading = useSelector(exchangeRateLoading);

    const fgiInfo = useSelector(fgiState);
    const selectorStockLoading = useSelector(fgiLoading);

    const waterTempReducer = useSelector(
        (state: RootReducerType) => state.WaterTempReducer
    );

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

        const searchFgiFn = () => {
            dispatch(fetchFgi());
        }

        const searchExchangeRateFn = () => {
            dispatch(fetchExchangeRate());
        }

        searchWaterTempFn();
        searchCoinListFn();
        searchBinBtcFn();
        searchFgiFn();
        searchExchangeRateFn();
    }, []);

    useEffect(() => {
        const searchCoinInfoFn = () => {
            dispatch(fetchCoinInfoData(selectCoins));
        };

        searchCoinInfoFn();
    }, [selectCoins])

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Dashboard />
            <RootDiv>
                <ItemDiv>
                    <span>???????????? :{waterTempReducer.temp || ""}</span>
                </ItemDiv>
                <ItemDiv>
                    {selectorStockLoading ?
                        <div>?????? ?????? ?????? <LoadingOutlined /></div>
                        :
                        <div>
                            <span>Fear And Greed : </span>
                            <span>{fgiInfo?.now?.value}</span>
                            <span>{` (?????? ${fgiInfo?.previousClose?.value})`}</span>
                        </div>
                    }
                </ItemDiv>
                <ItemDiv>
                    {selectorExchangeRateLoading ?
                        <div>?????? ?????? <LoadingOutlined /></div>
                        :
                        <div>
                            <span>?????? : {exchangeInfo}</span>
                        </div>
                    }
                </ItemDiv>
                <ItemDiv>
                    <a target="_blank" rel="noreferrer" style={{ color: "white" }} href="https://finviz.com/map.ashx">{`S&P500 ???`}</a>
                </ItemDiv>
            </RootDiv>
            <Divider />
            <RootDiv>
                <ItemDiv>
                    <EconomicCalendar />
                </ItemDiv>
                <ItemDiv>
                    <CurrencyConvert />
                </ItemDiv>
            </RootDiv>
            <Divider />
            <RootDiv>

            </RootDiv>
            <RootDiv>
                <ItemDiv>
                    <Tv ticker="QQQ" kind="stock" />
                </ItemDiv>
            </RootDiv>
        </div>
    )
}

export default Stock;