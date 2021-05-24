import React from 'react';
import Corona from '@module/Corona/Corona';
import Weather from '@module/Weather/Weather';
import { RootDiv, ChartItemDiv } from './style';

const Life = (): React.ReactElement => {
    return <RootDiv>
        <ChartItemDiv>
            <Corona />
        </ChartItemDiv>
        <Weather />
    </RootDiv>
}

export default Life;