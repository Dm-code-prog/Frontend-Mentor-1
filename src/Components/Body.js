import styled from 'styled-components'
import { ColumnFlexContainer } from './ColumnFlexContainer'
import { BarChart } from './BarChart'

const B = styled.div`
height: 30em;
background: white;
border-radius: 1em;
padding: 2em 1.5em 0 1.5em;
`


const H1 = styled.h1`font-size: 1.8em; letter-spacing: 0.001em; color: #1A1211;
 font-weight: 700`

function Body(props){
    return (
       <B>
           <ColumnFlexContainer>
           <H1>Spending - Last 7 days</H1>
           </ColumnFlexContainer>
           <BarChart></BarChart>
       </B>
    )
}

export {Body}