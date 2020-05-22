import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//  Build a PrivateRoute component and use it to protect a route that renders the BubblesPage component

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.getItem('token')) {
            return <Component {...props} />; // render component passed into props
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  };
  export default ProtectedRoute;