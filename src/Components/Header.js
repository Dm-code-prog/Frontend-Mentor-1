import styled from 'styled-components';
import { ColumnFlexContainer } from './ColumnFlexContainer';
import React from 'react';

import {Ctx} from '../App'



const H = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1.5em 1em 1.5em;
    height: 3em;
    background-color: #EA755D;
    border-radius: 1em;
    margin-bottom: 1em;
    @media(min-width: 500px){
        height: 3em;}
`;

const Logo = styled.div`
        width: 4em;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
`

const C1 = styled.div`
        position: absolute;
        width: 28px;
        height: 28px;
        border: 1.75px solid white;
        border-radius: 50%;
        z-index: 1;
`
const C2 = styled.div`
        position: absolute;
        width: 32px;
        height: 32px;
        background-color: rgb(61,31,11);
        border-radius: 50%;
        left: 40%;
        z-index: 0;
`

function Header(props){
    const [ColorGlobal, setColor] = React.useContext(Ctx)
    console.log(ColorGlobal)
    return (
        <H style={{backgroundColor: ColorGlobal}}>
            <ColumnFlexContainer style={{color: "white"}}>
                <small  style={{fontSize: "1.1em", fontWeight: "lighter"}}>
                    My balance
                </small>
                <div style={{fontSize: "1.5em", fontWeight: "bold", letterSpacing: "0.055em"}}>
                {props.balance}
                </div>
            </ColumnFlexContainer>
            <Logo>
                <div style={{position:"relative", width: "45px", height:"30px" }}>
                    <C1></C1>
                    <C2></C2>
                </div>
            </Logo>
        </H>
    )
}

export {Header}