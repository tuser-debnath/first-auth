import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <section className="header-area">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
              {user ? (
                <NavLink className="nav-link btn" onClick={handleSignOut}>
                  Sign Out
                </NavLink>
              ) : (
                <NavLink to="/signin" className="nav-link btn">
                  Sign In
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header;
