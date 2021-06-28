import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../contexts/firebase";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || email === "" || firstName === "";

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setEmail("");
            setPassword("");
            setError("");
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a User? <Form.Link to="/signin">Sign In</Form.Link>
            </Form.Text>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
