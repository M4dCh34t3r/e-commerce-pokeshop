import { Anchor, Container, Logo } from "./style";

export default function Navbar() {
  return(
    <Container>
      <Anchor href='/'>HOME</Anchor>
      <Logo src='./logo.svg' alt='logo'/>
      <Anchor href='/reviews'>REVIEWS</Anchor>
    </Container>
  );
}
