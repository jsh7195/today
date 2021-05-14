import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootDiv, ItemDiv } from './style';
import NativeSelect from '@material-ui/core/NativeSelect';
import {
    createMuiTheme,
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import LabelInput from '@module/LabelInput/LabelInput';
import { RootReducerType } from '@store/store';
import { fetchWaterTempData } from '@store/actions/Investment/WaterTempActions';
import { fetchCoinListData, fetchCoinInfoData, fetchBinBtcInfoData } from '@actions/Investment/CoinInfoActions';
import { fetchFgi, fgiState, exchangeRateState, exchangeRateLoading, fgiLoading, fetchExchangeRate } from '@slice/StockSlice';
import { Tv } from '@module/TradingviewWidget/Tv';
import { Dashboard } from '@module/TradingviewWidget/Dashboard';
const useStyles = makeStyles((theme: AugmentedTheme) =>
    createStyles({
        root: {
            color: 'gray',
        },
        icon: {
            color: 'white'
        }
    }),
);

const Stock = (): React.ReactElement => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [selectCoins, setSelectCoin] = useState('KRW-BTC');

    const exchangeInfo = useSelector(exchangeRateState);
    const selectorExchangeRateLoading = useSelector(exchangeRateLoading);

    const fgiInfo = useSelector(fgiState);
    const selectorStockLoading = useSelector(fgiLoading);

    const waterTempReducer = useSelector(
        (state: RootReducerType) => state.WaterTempReducer
    );

    const coinListReducer = useSelector(
        (state: RootReducerType) => state.CoinListReducer
    );
    const coinInfoReducer = useSelector(
        (state: RootReducerType) => state.CoinInfoReducer
    );

    const coinOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
    console.log('selectorStockLoading', selectorStockLoading);
    return (
        <div>
            <Dashboard />

            <RootDiv>
                <ItemDiv>
                    <span>한강수온 :{waterTempReducer.temp || ""}</span>
                </ItemDiv>
                <ItemDiv>
                    {selectorStockLoading ?
                        <div>로딩중...</div>
                        :
                        <div>
                            <span>Fear And Greed : </span>
                            <span>{fgiInfo?.now?.value}</span>
                            <span>{` (어제 ${fgiInfo?.previousClose?.value})`}</span>
                        </div>
                    }
                </ItemDiv>
                <ItemDiv>
                    {selectorExchangeRateLoading ?
                        <div>로딩중...</div>
                        :
                        <div>
                            <span>환율 : {exchangeInfo}</span>
                        </div>
                    }
                </ItemDiv>
            </RootDiv>
            <RootDiv>
                <ItemDiv>
                    <Tv ticker="AAPL" kind="stock" />
                </ItemDiv>
            </RootDiv>
        </div>
    )
}

export default Stock;