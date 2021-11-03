import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { Button, Row, Col } from 'antd';
import moment from 'moment';
import _ from 'lodash';
import {
  weatherState,
  weatherLoading,
  fetchSeoulWeather,
  fetchKoreaAir,
  AirState,
  AirLoading,
} from '@slice/WeatherSlice';
import { makeStyles } from '@material-ui/core/styles';
import { RootDiv, ItemDiv, RootDivCol } from './style';

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
  };

  const getKoreaAirApi = () => {
    dispatch(fetchKoreaAir(informCode));
  };

  useEffect(() => {
    getWeatherApi();
  }, []);

  useEffect(() => {
    getKoreaAirApi();
  }, [informCode]);

  return (
    <>
      {_weatherLoading ? (
        <ItemDiv>
          서울 날씨 <LoadingOutlined />
        </ItemDiv>
      ) : (
        <Row>
          <Col span={4} order={1}>
            서울온도 : {_weatherState.main.temp}
          </Col>
          <Col span={4} order={2}>
            흐림 : {_weatherState.main.clouds?.all || 0}
          </Col>
          <Col span={4} order={3}>
            최근 1시간 강수량 :{' '}
            {_weatherState.main?.rain ? _weatherState.main?.rain['1h'] : 0}
          </Col>
          <Col span={4} order={4}>
            최근 3시간 강수량 :{' '}
            {_weatherState.main?.rain ? _weatherState.main?.rain['3h'] : 0}
          </Col>
        </Row>
      )}
      <RootDivCol>
        {_airState[0] ? (
          <>
            <ItemDiv>발생원인 : {_airState[0].informCause}</ItemDiv>
            <ItemDiv>예보개황 : {_airState[0].informCause}</ItemDiv>
          </>
        ) : (
          ''
        )}
      </RootDivCol>
      {_airLoading ? (
        <div>
          한국 미세먼지 <LoadingOutlined />{' '}
        </div>
      ) : (
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={() => {
                    setInform('PM10');
                  }}
                >
                  미세먼지
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <img
                  src={_airState[0]?.imageUrl7}
                  alt="time series air"
                  style={{ display: dps ? 'block' : 'none', width: '30rem' }}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  onClick={() => {
                    setInform('PM25');
                  }}
                >
                  초미세먼지
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                <img
                  src={_airState[0]?.imageUrl8}
                  alt="time series air"
                  style={{ display: dps ? 'block' : 'none', width: '30rem' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
