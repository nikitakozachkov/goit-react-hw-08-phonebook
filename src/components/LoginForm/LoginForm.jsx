import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/actions';
import { Container, Text, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Container onSubmit={handleSubmit} autoComplete="off">
      <label>
        <Text>Email</Text>
        <Input type="email" name="email" required />
      </label>

      <label>
        <Text>Password</Text>
        <Input type="password" name="password" required />
      </label>

      <Button type="submit">Sign in</Button>
    </Container>
  );
};
