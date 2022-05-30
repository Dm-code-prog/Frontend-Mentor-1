import './App.css';
import {Header} from './Components/Header'
import {Body} from './Components/Body'
import styled from 'styled-components'
import React from 'react';



const Card = styled.div`
padding: 1em 0 1em 0;
  max-width: 500px;
  margin: 0 auto;
`
const Sidebar = styled.div`
  position: absolute;
  width: 90px;
  height: 120%;
  background-color: rgba(0,0,0,0.1);
  z-index: 0;
  @media(max-width: 700px){
    display: none;
  }
  `

const Color = styled.div`
  background-color: ${props => props.c};
  width: 45px;
  height: 45px;
  position: absolute;
  left: 22.5px;
  top: ${props => props.top};
  border-radius: 10px;
  cursor: pointer;
  z-index: 1;
  @media(max-width: 700px){
    display: none;
  }
  &:hover{
    transform: scale(1.06);
  `
  const Ctx = React.createContext();

function App() {
  const [ColorGlobal, setColor] = React.useState('')
  return (
   <Ctx.Provider value={[ColorGlobal, setColor]}>
  <>
   <Sidebar></Sidebar>
   <Color c="#EC4E20" top="30px" onClick={()=> setColor("#EC4E20")}/>
   <Color c="#FF9505" top="90px" onClick={()=> setColor("#FF9505")}/>
   <Color c="#016FB9" top="150px" onClick={()=> setColor("#016FB9")}/>
   <Color c="#340068" top="210px"onClick={()=> setColor("#340068")}/>
   <Color c="#EA755D" top="270px"onClick={()=> setColor("#EA755D")}/>
    <Card>
      <Header
        balance="$1999.976"
      >

      </Header>
      <Body>

      </Body>
    </Card>
    </>
   </Ctx.Provider>
  );
}
export {Ctx}
export default App;
