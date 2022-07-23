import { Container, NavbarLogo, NavbarLink } from "./style";

export default function Navbar() {
  return(
    <Container>
      <NavbarLink to="/">WELCOME</NavbarLink>
      <NavbarLink to="/items">ITEMS</NavbarLink>
      <NavbarLogo src='./logo.svg' alt='logo'/>
      <NavbarLink to="/reviews">REVIEWS</NavbarLink>
      <NavbarLink to="/about">ABOUT</NavbarLink>
    </Container>
  );
}
