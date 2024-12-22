import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';

const Container = styled.View`
flex: 1;
background-color: #ffffff;
justify-content: center;
align-items: center;
`;

const App = () => {
    return (<Container>
        <User />
    </Container>);
};

export default App;