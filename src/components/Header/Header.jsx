import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { AuthMenu } from '../AuthMenu/AuthMenu';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Container>
  );
};
