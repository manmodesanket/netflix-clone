import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { useFirebase } from "../contexts/firebase";

export function HeaderContainer({ children }) {
  const { user, firebase } = useFirebase();
  const currentUser = firebase.auth().currentUser;

  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          src="/images/misc/logo.svg"
          alt="Netflix"
        />
        {currentUser ? null : (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
