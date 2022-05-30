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
  background-color: rgba(255,255,255,0.7);
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
  opacity : ${props => props.global === props.c || props.initial ? "1" : "0.3"};
  transform: scale(${props => props.global === props.c || props.initial ? "1.2" : "1" });

  @media(max-width: 700px){
    display: none;
  }
  &:hover{
    opacity: 1;
  `
  const Ctx = React.createContext();

function App() {
  const [ColorGlobal, setColor] = React.useState('')
  const [Initial, setInitial] = React.useState(true);
  function handleColorPick(c){
    setColor(c);
    setInitial(false);
  }
  return (
   <Ctx.Provider value={[ColorGlobal, setColor]}>
  <>
   <Sidebar></Sidebar>
   <Color c="#50C878" top="32px" onClick={()=>handleColorPick("#50C878")} global={ColorGlobal} />
   <Color c="#FF9505" top="92px" onClick={()=>handleColorPick("#FF9505")}  global={ColorGlobal}/>
   <Color c="#016FB9" top="152px" onClick={()=>handleColorPick("#016FB9")}  global={ColorGlobal}/>
   <Color c="#340068" top="212px"onClick={()=>handleColorPick("#340068")}  global={ColorGlobal}/>
   <Color c="#EA755D" top="272px"onClick={()=>handleColorPick("#EA755D")}  global={ColorGlobal} initial={Initial}/>
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
