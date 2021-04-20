import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { getQuestions } from "../store/quiz/selectors";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => getQuestions(state)).length !== 0;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
