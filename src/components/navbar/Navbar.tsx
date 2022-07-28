import { NavbarLogo, NavbarLink, NavbarWrapper } from "./style";

export default function Navbar() {
  return(
    <NavbarWrapper>
      <NavbarLink to="/">HOME</NavbarLink>
      <NavbarLogo src='./logo.svg' alt='logo'/>
      <NavbarLink to="/reviews">REVIEWS</NavbarLink>
    </NavbarWrapper>
  );
}
