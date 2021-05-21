import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { weatherState, weatherLoading, fetchSeoulWeather, fetchKoreaAir, AirState, AirLoading } from '@slice/WeatherSlice';
import { makeStyles } from '@material-ui/core/styles';
import { RootDiv, ItemDiv } from './style';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
    },
}));

const Weather = (): React.ReactElement => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [informCode, setInform] = useState('PM10');
    const [dps, setDsp] = useState(true);

    const _weatherState = useSelector(weatherState);
    const _weatherLoading = useSelector(weatherLoading);

    const _airState = useSelector(AirState);
    const _airLoading = useSelector(AirLoading);

    const getWeatherApi = () => {
        dispatch(fetchSeoulWeather());
    }

    const getKoreaAirApi = () => {
        dispatch(fetchKoreaAir(informCode));
    }


    useEffect(() => {
        getWeatherApi();
    }, [])

    useEffect(() => {
        getKoreaAirApi();
    }, [informCode])

    return <>
            {
                _weatherLoading ?
                    <ItemDiv>서울 날씨 Loading....</ItemDiv>
                    :
                    <RootDiv>
                        <ItemDiv>현재 서울온도 : {_weatherState.main.temp}</ItemDiv>
                        <ItemDiv>흐림 : {_weatherState.main.clouds?.all || 0}</ItemDiv>
                        <ItemDiv>최근 1시간 강수량 : {_weatherState.main?.rain ? _weatherState.main?.rain['1h'] : 0}</ItemDiv>
                        <ItemDiv>최근 3시간 강수량 : {_weatherState.main?.rain ? _weatherState.main?.rain['3h'] : 0}</ItemDiv>
                    </RootDiv>
            }
        <RootDiv>
            {
                _airState[0] ?
                    <>
                        <ItemDiv>발생원인 : {_airState[0].informCause}</ItemDiv>
                        <ItemDiv>예보개황 : {_airState[0].informCause}</ItemDiv>
                    </>
                    :
                    ''
            }
        </RootDiv>
            {
                _airLoading ?
                    <div>한국 미세먼지 Loading...</div>
                    :
                    <div>
                        <button onClick={() => { setInform('PM10') }} style={{ width: '6rem', backgroundColor: informCode === 'PM10' ? 'red' : 'gray' }}>미세먼지</button>
                        <button onClick={() => { setInform('PM25') }} style={{ width: '6rem', backgroundColor: informCode !== 'PM10' ? 'red' : 'gray' }}>초미세먼지</button>
                        <div>
                            <img src={_airState[0] && informCode === 'PM10' ? _airState[0]?.imageUrl7 : _airState[0]?.imageUrl8} alt="time series air" style={{ display: dps ? 'block' : 'none', width: '30rem' }} />
                        </div>
                    </div>

            }
    </>
}

export default Weather