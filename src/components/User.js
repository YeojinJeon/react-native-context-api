import React, { useContext } from 'react';
import styled from 'styled-components/native';
import UserContext from '../contexts/User';

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

const User = () => {
    const { user, hi } = useContext(UserContext);
    return (
        <StyledText>
            {hi.text}! {user.name}
        </StyledText>
    );
};

export default User;
