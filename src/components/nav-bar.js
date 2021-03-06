import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => (
  <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
    <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/coffee-quiz">Coffee Quiz</Nav.Link>
          <Nav.Link href="/recipe/1">Sample Recipe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
