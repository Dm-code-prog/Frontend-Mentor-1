import './App.css';
import {Header} from './Components/Header'
import {Body} from './Components/Body'
import styled from 'styled-components'


const Card = styled.div`
padding: 1em 0 1em 0;
  max-width: 500px;
  margin: 0 auto;
`

function App() {
  return (
   
    <Card>
      <Header
        balance="$1999.976"
      >

      </Header>
      <Body>

      </Body>
    </Card>
  );
}

export default App;
