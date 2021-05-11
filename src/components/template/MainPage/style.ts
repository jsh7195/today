import styled from 'styled-components';
import { theme } from 'styled-tools';
export const MainDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap
`
export const NavDownDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-right: 40px;
    width: 13%;
`;

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 77%;
`;


export const NavItemDiv = styled.div`
    font-size: 30px;
    padding-bottom: 30px;
    border: gray 2px outset;
`;

export const ItemDiv = styled.div`
    padding-bottom: 30px;
    padding-right: 30px;
`;
