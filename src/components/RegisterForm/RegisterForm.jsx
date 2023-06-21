import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/actions';
import { Container, Text, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <Container onSubmit={handleSubmit} autoComplete="off">
      <label>
        <Text>Username</Text>
        <Input type="text" name="username" required />
      </label>

      <label>
        <Text>Email</Text>
        <Input type="email" name="email" required />
      </label>

      <label>
        <Text>Password</Text>
        <Input type="password" name="password" required />
      </label>

      <Button type="submit">Sign up</Button>
    </Container>
  );
};
