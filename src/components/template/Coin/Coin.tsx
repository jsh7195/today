import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootDiv, ItemDiv, ChartDiv } from './style';
import NativeSelect from '@material-ui/core/NativeSelect';
import {
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
} from '@material-ui/core/styles';
import { RootReducerType } from '@store/store';
import { fetchWaterTempData } from '@store/actions/Investment/WaterTempActions';
import { fetchCoinListData, fetchCoinInfoData, fetchBinBtcInfoData } from '@actions/Investment/CoinInfoActions';
import { fetchFgi, fgiState, exchangeRateState, exchangeRateLoading, fgiLoading, fetchExchangeRate } from '@slice/StockSlice';
import { Tv } from '@module/TradingviewWidget/Tv';
import TopCrypto from '@module/InvestingWidget/TopCrypto';
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

const Coin = (): React.ReactElement => {

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
    return (
        <div style={{ width: '100%', height: '100%'}}>
            <RootDiv>
                <ItemDiv>
                    <NativeSelect
                        onChange={coinOnChange}
                        classes={{
                          icon: classes.icon,
                          root: classes.root
                        }}
                        inputProps={{
                            name: 'coin',
                            id: 'coin-native-simple',
                        }}
                    >
                        {
                            !!coinListReducer.success ?
                                coinListReducer?.coinList?.map((item) =>
                                    <option value={item.market}>{`${item.korean_name}(${item.english_name})`}</option>
                                )
                                :
                                <option>?????? ????????? ???????????? ????????????.</option>
                        }
                    </NativeSelect>
                    {
                        !!coinInfoReducer.success ?
                            coinInfoReducer?.coinInfo?.map((item) =>
                                <div>
                                    ????????? : <span>{item.trade_price}</span><br />
                                    ???????????? : &nbsp;
                                    <span>{item.change_price > 0 ? '+' : ''}{item.change_price}???</span>
                                    {`(${item.change_price > 0 ? '+' : ''}${(item.change_rate * 100).toFixed(2)}%)`}
                                    <br />
                                </div>
                            )
                            :
                            <span>????????? ??????????????????</span>
                    }
                </ItemDiv>
                <ItemDiv>
                    <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://kimpga.com/">{`?????? ?????????`}</a>
                </ItemDiv>
                <ItemDiv>
                    <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://www.binance.com/ko">{`????????????`}</a>
                </ItemDiv>
                <ItemDiv>
                    <a target="_blank" rel="noreferrer" style={{color: "white" }} href="https://upbit.com/home">{`?????????`}</a>
                </ItemDiv>
            </RootDiv>
            <div>
                <TopCrypto />
            </div>
            <ChartDiv>
                <Tv ticker={selectCoins} kind="coin"/>
            </ChartDiv>
        </div>
    )
}

export default Coin;