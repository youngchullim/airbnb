import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';


const mapStateToProps = state => {
  return({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
    booking: {location: "", startDate: null, endDate: null, adults: 0, children: 0}
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);