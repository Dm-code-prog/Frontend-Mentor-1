import styled from 'styled-components';
import { ColumnFlexContainer } from './ColumnFlexContainer';


const H = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EA755D;
    padding: 1em;
    height: 3em;
    border-radius: 1em;
    margin-bottom: 1em;
    @media(min-width: 500px){
        height: 3em;}
`;



function Header(props){
    return (
        <H>
            <ColumnFlexContainer style={{color: "white"}}>
                <small  style={{fontSize: "1.1em", fontWeight: "lighter"}}>
                    My balance
                </small>
                <div style={{fontSize: "1.5em", fontWeight: "bold"}}>
                {props.balance}
                </div>
            </ColumnFlexContainer>
        </H>
    )
}

export {Header}