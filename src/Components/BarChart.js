import styled from 'styled-components'
import { ColumnFlexContainer } from './ColumnFlexContainer'
import {useEffect} from 'react'
import data from '../data.json'
import React from 'react'
import {Ctx} from  '../App'


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]



function sum(){
    let value = 0;
    for (let i=0; i<data.length; i++){
        value += data[i]['amount']
    }
    return `$${value}`
}

const Bar = styled(ColumnFlexContainer)`
    align-items: center;

    &:hover > div.visual-bar{
        background: rgb(180,223,229)
    }
    &:hover > div.brown-box{
        opacity: 1;
    }
`

const AmountBox = styled.div`
    width: 50px;
    height: 30px;
    background: rgb(52,31,17);
    margin: 0 0 0.5em 0;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0.8em;
    opacity: 0.1;
    @media (max-width: 440px){
        opacity: 0;
    }
`

const VisualBar = styled.div`
    height: calc(${props => props.price}px *3);
    width: 100%;
    background-color: #EA755D;
    transition: 0.1s ease-in;
    border-radius: 0.5em;
    width: 30px;
    @media(min-width: 440px){
        width: 40px;
    }
    background: ${props => props.color};
`

const Chart = styled.div`
    height: 15em;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid rgb(190,189,180);
    padding-bottom: 1.5em;
    @media(min-width: 450px){
        justify-content: space-around;
    }
`

const Summary = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5em;
`

const Sum = styled.h1`
    margin: 0;
    font-size: 2.2em;
    color: #1A1211;
`

function BarChart(){
    const [ColorGlobal, setColor] = React.useContext(Ctx)
    return (
        <>
            <Chart>
                { days.map(
    (i, index)=> {
        console.log(data[index]['amount'])
        return(
        <Bar>
                <AmountBox key={index} className="brown-box">
                    {`$${data[index]['amount']}`}
                </AmountBox>
            <VisualBar
                onClick={console.log("works!")}
                price={data[index]['amount']}
                key={index+10*2}
                className="visual-bar"
                color={ColorGlobal}
            
            />
        
        <small style={{color: "rgb(190,189,180)", minWidth: "2em"}} className="small">
            {i}
        </small>
    </Bar>
        )
    }
)}
            </Chart>
            <Summary>
                <ColumnFlexContainer style={{background:"rgba(0,0,0,0.1)", padding: "0.7em", borderRadius: "10px"}}>
                    <small style={{fontSize: "1.1em", fontWeight: "lighter", color: "rgb(100,110,100)"}}>
                        Total this month
                    </small>
                    <Sum>
                        {
                           sum()
                        }
                    </Sum>
                </ColumnFlexContainer>
                <ColumnFlexContainer>
                <small style={{fontSize: "0.88em", fontWeight: "bold", alignSelf: 'flex-end', color:"#1A1211"}}>
                    +2.4%
                </small>
                <small style={{fontSize: "0.88em", fontWeight: "lighter", color: "rgb(150,160,150)"}}>
                        From last month
                    </small>

                </ColumnFlexContainer>
            </Summary>
        </>
    )
}

export {BarChart}