import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { List, Item } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <List>
        <Item>
          <NavLink to="/">Home</NavLink>
        </Item>
        {isLoggedIn && (
          <Item>
            <NavLink to="/contacts">Contacts</NavLink>
          </Item>
        )}
      </List>
    </nav>
  );
};
