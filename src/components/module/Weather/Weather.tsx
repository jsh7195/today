import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { weatherState, weatherLoading, fetchSeoulWeather, fetchKoreaAir, AirState, AirLoading } from '@slice/WeatherSlice';
// import {} from './style'

const Weather = (): React.ReactElement => {
    const dispatch = useDispatch();

    const [informCode, setInform] = useState('PM10');
    const [dps, setDsp] = useState(false);

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

    return <div>
        {
            _weatherLoading ?
                <div>서울 날씨 Loading....</div>
                :
                <div>현재 서울온도 : {_weatherState.main.temp}</div>
        }
        {
            _airLoading ?
                <div>한국 미세먼지 Loading...</div>
                :
                <>
                <button onClick={()=>{setInform('PM10')}} style={{ backgroundColor : informCode === 'PM10'?'red':'gray'}}>미세먼지</button>
                <button onClick={()=>{setInform('PM25')}} style={{ backgroundColor : informCode !== 'PM10'?'red':'gray'}}>초미세먼지</button>
                    <div style={{fontSize : '2rem'}}
                        onMouseEnter={() => { setDsp(true) }}
                        onMouseLeave={() => { setDsp(false) }}
                    >
                        [[ 현재 시간이후 {informCode === 'PM10'?'미세먼지':'초미세먼지'} 예보 움짤 확인 ]]
                <img src={_airState[0] && informCode === 'PM10' ? _airState[0]?.imageUrl7 : _airState[0]?.imageUrl8 } alt="time series air" style={{ display: dps ? 'block' : 'none' }} />
                    </div>
                    {
                        _airState[0] ?
                            <div>
                                <br/>
                                <div>발생원인 : {_airState[0].informCause}</div>
                                <br/>
                                <div>예보개황 : {_airState[0].informCause}</div>
                            </div>
                            :
                            ''
                    }
                </>

        }

    </div>
}

export default Weather