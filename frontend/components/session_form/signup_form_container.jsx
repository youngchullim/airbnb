import { connect } from 'react-redux';
import { signup, clearErrors, login } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    formType: 'Sign Up',
    navLink: <Link to='/login'>Log In</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    signup: (user) => dispatch(signup(user)),
    clear: () => dispatch(clearErrors()),
    loginForm: (
      <div className="playlist-button" role="button" onClick={() => dispatch(openModal('login'))}>
        <div className="new-playlist">
          <div className="playlist-center">Log In</div>
        </div>
      </div>
    ),
    login: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);