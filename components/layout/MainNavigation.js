import { Navbar, Container, NavLink, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
function MainNavigation() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => window.addEventListener("scroll", changeNavbarColor));
  return (
    <header>
      <Navbar
        id="navbar"
        expand="lg"
        fixed="top"
        className={colorChange ? "bg-light" : "bg-transparent"}
      >
        <Container fluid>
          <Navbar.Brand href="#home">{`<Sonal />`}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#work">Experience</NavLink>
              <NavLink href="#aboutme">About</NavLink>
              <NavLink href="#skills">Skills</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MainNavigation;
