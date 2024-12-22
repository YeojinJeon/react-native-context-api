import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';
import UserContext from './contexts/User';

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <UserContext.Provider value={{name: 'yeojin'}}>
      <Container>
        <User />
      </Container>
    </UserContext.Provider>
  );
};

export default App;
