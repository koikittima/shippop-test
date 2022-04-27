import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";


const SecureRoute = ({ component: Component, ...rest }) => {
    // console.log("secureRoute", rest);
    return (
      <Route
        {...rest}
        render={(props) =>
            Auth.isLoggedIn(rest) === true ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
};

export default SecureRoute;