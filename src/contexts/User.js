import React, { createContext, useEffect, useState } from 'react';

const UserContext = createContext({
    user: { name: '' },
    dispatch: () => {},
    hi: { text: '' },
});

const UserProvider = ({ children, value }) => {
    const [name, setName] = useState('yeojin_jeon');
    const [text, setText] = useState('Hi');

    useEffect(() => {
        if (value) {
            setText(value);
        }
    }, [value]);

    const valueContext = { user: { name }, dispatch: setName, hi: { text } };
    return (
        <UserContext.Provider value={valueContext}>
            {children}
        </UserContext.Provider>
    );
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
