import { Container, NavbarLogo, NavbarLink } from "./style";

export default function Navbar() {
  return(
    <Container>
      <NavbarLink to="/">HOME</NavbarLink>
      <NavbarLogo src='./logo.svg' alt='logo'/>
      <NavbarLink to="/reviews">REVIEWS</NavbarLink>
    </Container>
  );
}
