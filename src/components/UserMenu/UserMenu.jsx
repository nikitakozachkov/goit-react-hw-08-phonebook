import { useSelector, useDispatch } from "react-redux"
import { getUser } from "redux/auth/selectors"
import { logout } from "redux/auth/actions"
import { Container, Button } from "./UserMenu.styled"

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <Container>
      <p>{user.email}</p>
      <Button type="button" onClick={() => dispatch(logout())}>Logout</Button>
    </Container>
  )
}