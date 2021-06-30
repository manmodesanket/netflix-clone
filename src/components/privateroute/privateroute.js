import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useFirebase } from "../../contexts/firebase";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { firebase } = useFirebase();
  const currentUser = firebase.auth().currentUser;
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={ROUTES.SIGN_IN} />
        )
      }
    />
  );
};

export default PrivateRoute;
