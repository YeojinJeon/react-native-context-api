import React, { useContext, useState } from 'react';
import UserContext, { UserConsumer } from '../contexts/User';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput`
    border: 1px solid #606060;
    width: 250px;
    padding: 10px 15px;
    margin: 10px;
    font-size: 24px;
`;

const Input = () => {
    const [name, setName] = useState('');
    const { dispatch } = useContext(UserContext);

    // 함수이기 때문에 반환해야 한다.
    return (
        <StyledInput
            value={name}
            onChangeText={text => setName(text)}
            onSubmitEditing={() => {
                dispatch(name);
                setName('');
            }}
            placeholder="Enter a name..."
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
        />
    );
};
export default Input;
