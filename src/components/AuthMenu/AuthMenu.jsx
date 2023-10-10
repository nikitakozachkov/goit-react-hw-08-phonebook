import { Link } from "react-router-dom"
import { Container } from "./AuthMenu.styled"

export const AuthMenu = () => {
  return (
    <Container>
      <Link to="/register">Register</Link>
      
      <Link to="/login">Login</Link>
    </Container>
  )
}