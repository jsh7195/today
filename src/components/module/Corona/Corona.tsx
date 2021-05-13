import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCorona, coronaLoading, coronaState, corona, coronaDiffCnt, coronaAgoDiffCnt, coronaFullState } from '@slice/CoronaSlice';
import moment from 'moment';
import { numComma } from '@lib/common';
import Chart from 'react-apexcharts'
import _ from 'lodash';
import { Line } from 'react-chartjs-2';

const Corona = (): React.ReactElement => {

    const dispatch = useDispatch();
    const loading = useSelector(coronaLoading);
    const data = useSelector(coronaState);
    const diff = useSelector(coronaDiffCnt);
    const agoDiff = useSelector(coronaAgoDiffCnt);
    const coronaFullDate = useSelector(coronaFullState);

    const getCoronaData = () => {
        dispatch(fetchCorona());
    }

    // ------ chart opt
    const chartOpt = {
        series: [
            {
                name: "누적 확진자",
                data: coronaFullDate.decideData
            },
            {
                name: "누적 완치자",
                data: coronaFullDate.clearData
            },
        ],
        options: {
            chart: {
                type: 'area',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
            },
            title: {
                text: '코로나',
                align: 'left'
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaixs: {
                type: 'datetime',
                //categories : coronaFullDate.date,
                categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                label: {
                    show: true
                }
            },
            legend: {
                horizontalAlign: "left"
            },
            tooltip: {
                y: {
                    title: {
                        formatter(val: any) {
                            return val;
                        }
                    }
                }
            },
            grid: {
                borderColor: '#f5eded',
            }
        },
    };
    // ------- chart opt end

    // chartjs option
    const chartjsData = {
        labels: coronaFullDate.date,
        datasets: [
            {
                label: '누적 확진자',
                data: coronaFullDate.decideData,
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            }
            ,
            {
                label: '누적 완치자',
                data: coronaFullDate.clearData,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
            },
        ],
    };

    const options = {
        scales: {
            yAxes:
            {
                ticks: {
                    beginAtZero: true,
                },
            }

        }
    };
    // chartjs option end

    useEffect(() => {
        getCoronaData();
    }, [])

    return (
        !loading ?
            <>
                {
                    coronaFullDate.date && coronaFullDate.date.length > 0 ?
                        <Line data={chartjsData} options={options} type="linear" width={300} height={200} />
                        :
                        ''
                }
                <div>오늘 확진자 수 : {diff}</div>
                <div>어제 확진자 수 : {agoDiff}</div>
            </>
            :
            <div>코로나 정보 Loading...</div>
    )
}

export default Corona;