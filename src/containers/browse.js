import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../contexts/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";
import { useAuth } from "../contexts/AuthContext";

export function BrowseContainer() {
  const { user } = useAuth();
  // const loggedInuser = {
  //   displayName: "Sanket",
  //   photoURL: "1",
  // };

  return user.displayName ? (
    <>
      <p>Browse Container</p>
      <SelectProfileContainer />
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer />
  );
}
