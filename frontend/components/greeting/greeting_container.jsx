import React from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal} from '../../actions/modal_actions';


const mapStateToProps = state => {
  return({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    booking: {location: "", startDate: null, endDate: null, adults: 0, children: 0}
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
    login: (
      <div className="playlist-button" role="button" onClick={() => dispatch(openModal('login'))}>
        <div className="new-playlist">
          <div className="playlist-center">Log In</div>
        </div>
      </div>
    ),
    signup: (
      <div className="playlist-button" role="button" onClick={() => dispatch(openModal('signup'))}>
        <div className="new-playlist">
          <div className="playlist-center">Sign Up</div>
        </div>
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);