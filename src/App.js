import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';
import { UserProvider } from './contexts/User';
import Input from './components/Input';
import { SafeAreaView } from 'react-native';

const Container = styled.View`
    flex-direction: column;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    return (
        <SafeAreaView>
            <UserProvider value="안녕">
                <Container>
                    <User />
                    <Input />
                </Container>
            </UserProvider>
            <UserProvider value="Hello">
                <Container>
                    <User />
                    <Input />
                </Container>
            </UserProvider>
            <UserProvider value="Bonjour">
                <Container>
                    <User />
                    <Input />
                </Container>
            </UserProvider>
            <UserProvider>
                <Container>
                    <User />
                    <Input />
                </Container>
            </UserProvider>
        </SafeAreaView>
    );
};

export default App;
