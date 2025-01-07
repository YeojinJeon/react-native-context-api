import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';
import Country from './components/Country';

export const Container = styled.View`
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    return (
        <SafeAreaView>
            <Country value="안녕" />
            <Country value="Hello" />
            <Country value="Bonjour" />
            <Country />
        </SafeAreaView>
    );
};

export default App;
