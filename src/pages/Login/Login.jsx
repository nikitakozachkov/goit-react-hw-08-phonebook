import { LoginForm } from 'components/LoginForm/LoginForm';
import { Container, Text } from './Login.styled';

export default function Login() {
  return (
    <Container>
      <div>
        <Text>Login</Text>

        <LoginForm />
      </div>
    </Container>
  );
}
