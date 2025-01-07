import { Container } from '../App';
import { UserProvider } from '../contexts/User';
import Input from './Input';
import User from './User';

const Country = ({ value }) => {
    return (
        <UserProvider value={value}>
            <Container>
                <User />
                <Input />
            </Container>
        </UserProvider>
    );
};

export default Country;
