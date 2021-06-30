import React, { useState } from "react";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { useFirebase } from "../contexts/firebase";
import { Redirect } from "react-router-dom";

export default function Signin() {
  const { user, setProfile, firebase } = useFirebase();
  const currentUser = firebase.auth().currentUser;

  const history = useHistory();

  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || email === "";

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setProfile(firebase.auth().currentUser);
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => setError(error.message));
  };
  if (currentUser) {
    return <Redirect to={ROUTES.BROWSE} />;
  } else {
    return (
      <>
        <HeaderContainer>
          <Form>
            <Form.Title>Sign In</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Base onSubmit={handleSubmit}>
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
                Sign In
              </Form.Submit>
              <Form.Text>
                New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
              </Form.Text>
            </Form.Base>
          </Form>
        </HeaderContainer>
        <FooterContainer />
      </>
    );
  }
}
