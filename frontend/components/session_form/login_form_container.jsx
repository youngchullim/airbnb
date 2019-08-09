import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign Up</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    login: (user) => dispatch(login(user)),
    clear: () => dispatch(clearErrors())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

