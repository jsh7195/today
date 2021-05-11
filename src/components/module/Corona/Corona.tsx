import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCorona, coronaLoading, coronaState } from '@slice/CoronaSlice';

const Corona = (): React.ReactElement => {

    const dispatch = useDispatch();
    const loading = useSelector(coronaLoading);
    const data = useSelector(coronaState);

    const getCoronaData = () => {
        dispatch(fetchCorona());
    }


    useEffect(() => {
        getCoronaData();
    }, [])

    return (
        loading ? 
            <div>코로나</div>
        :
        <div>코로나 정보 Loading...</div>
    )
}

export default Corona;