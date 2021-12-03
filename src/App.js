import react from 'react';
import styled from 'styled-components';
import CardSection from './components/CardSection';
import Header from './components/Header';
import {OuterLayout} from './styles/Layout';

function App() {
  return (
    <div className="App">
      <Header/>
      <OuterLayout>
        <MainStyled>
          <CardSection/>
        </MainStyled>
      </OuterLayout>
            
      </div>
  );
}

const MainStyled = styled.main`

`;

export default App;
