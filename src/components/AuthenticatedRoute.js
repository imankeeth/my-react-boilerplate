import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthenticatedRoute = ({ component: Component, isUserAuthenticated, ...rest }) => {
  if (!isUserAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} component={Component} />;
};

const mapStateToProps = ({ isUserAuthenticated }) => ({
  isUserAuthenticated,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
