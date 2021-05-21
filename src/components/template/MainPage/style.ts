import styled from 'styled-components';
import { theme } from 'styled-tools';
import { isMobile } from 'react-device-detect';

export const MainDiv = styled.div`
    display: flex;
    flex-direction: ${isMobile ? 'column':'column'};
    flex-wrap: wrap
`
export const NavDownDiv = styled.div`
    display: flex;
    flex-direction:  ${!isMobile ? 'row':'row'};
    flex-wrap: wrap;
    padding-right: 10px;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 67%;
    height: 100%
`;


export const NavItemDiv = styled.div`
    width: 18rem;
    height:5rem;
    font-size: 30px;
    padding-bottom: 30px;
    border: gray 2px outset;
`;

export const ItemDiv = styled.div`
    padding-bottom: 30px;
    padding-right: 30px;
`;

export  const RightAd = styled.div`
    width: 15%;
`