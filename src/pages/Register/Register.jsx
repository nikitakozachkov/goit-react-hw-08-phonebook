import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, Text } from './Register.styled';

export default function Register() {
  return (
    <Container>
      <div>
        <Text>Register</Text>

        <RegisterForm />
      </div>
    </Container>
  );
}
