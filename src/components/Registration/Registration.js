import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import auth from "../../firebase.init";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML = "error";
  }
  if (loading) {
    messageDiv.innerHTML = "Loading....";
  }
  if (user) {
    messageDiv.innerHTML = "User Registered";
  }
  return (
    <section className="registration-area py-5">
      <Container>
        <h2 className="text-center py-4">Registration Here</h2>
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <div id="message-div"></div>
            <p>
              Already Have an Account?
              <NavLink to="/signin" className="nav-link reg-link">
                Sign In Here
              </NavLink>
            </p>
            <Button
              className="mt-2"
              variant="primary"
              type="submit"
              onClick={() => createUserWithEmailAndPassword(email, password)}
            >
              Register
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Registration;
