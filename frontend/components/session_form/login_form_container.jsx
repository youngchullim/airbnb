import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';
import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return({
    errors: state.errors.session,
    navLink: <Link to="/signup">Sign Up</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    login: (user) => dispatch(login(user)),
    clear: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    signup: (
      <div className="playlist-button" role="button" onClick={() => dispatch(openModal('signup'))}>
        <div className="new-playlist">
          <div className="playlist-center">Sign Up</div>
        </div>
      </div>
    ),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

