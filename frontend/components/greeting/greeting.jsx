import React from 'react';
import { Link } from 'react-router-dom';
// import AuthComponent from '../auth';
import { AuthRoute, ProtectedRoute }from '../../util/route_util';


import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import DefaultTheme from 'react-dates/lib/theme/DefaultTheme';

ThemedStyleSheet.registerInterface(aphroditeInterface);
ThemedStyleSheet.registerTheme(DefaultTheme);

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
      startDate: null,
      endDate: null,
      adults: 0,
      children: 0,
      focusedInput: null
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

// Should search for houses accordingly with the data the user input.
  handleSearch(e) {
    e.preventDefault();
    // this.props.search({
    //   location: this.state.location,
    //   startDate: this.state.startDate,
    //   endDate: this.state.endDate,
    //   adults: this.state.adults,
    //   children: this.state.children
    // });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={i} className="login-error">
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }

  render() {
    let result;
    if (this.props.currentUser) {
      result = (
        <div>
          <AuthRoute
            currentUser={currentUser}
            logout={logout}
          />
        </div>
      );
    } else {
      result = (
        <div className="greeting">
          <div className="greeting-navbar">
            <nav>
              {/* change to Airbnb Icon */}
              <Link to="/">AirBnb</Link>
            </nav>
            <ul className="greeting-user">
              <li className="greeting-signup">
                <nav>
                  <Link to="/signup">Sign Up</Link>
                </nav>
              </li>
              <li className="greeting-login">
                <nav>
                  <Link to="/login">Log In</Link>
                </nav>
              </li>
            </ul>
          </div>
          <div className="greeting-search">
            <form onSubmit={this.handleSearch} className="greeting-search-form">
              {/* <div className="login-error-message">{this.renderErrors()}</div> */}
              <div className="greeting-search-info">
                <label>
                  <input type="text"
                    className="location-input"
                    value={this.state.location}
                    onChange={this.update('location')}
                    placeholder="Location"
                    />
                </label>
                  Date: 
                  <DateRangePicker
                    startDate={this.state.startDate} 
                    startDateId="your_unique_start_date_id"
                    endDate={this.state.endDate}
                    endDateId="your_unique_end_date_id"
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                    startDatePlaceholderText="Check in"
                    endDatePlaceholderText='Check out'
                    numberOfMonths={1}
                  />
              </div>
            </form>
          </div>
        </div>
      );
    }
    return(
      <div>
        {result}
      </div>
    )
  }
}
// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => {
//     return(
//       <div className="greeting">
//         <div className="greeting-navbar">
//           <nav>
//             {/* change to Airbnb Icon */}
//             <Link to="/">AirBnb</Link>
//           </nav>
//           <ul className="greeting-user">
//             <li className="greeting-signup">
//               <nav>
//                 <Link to="/signup">Sign Up</Link>
//               </nav>
//             </li>
//             <li className="greeting-login">
//               <nav>
//                 <Link to="/login">Log In</Link>
//               </nav>
//             </li>
//           </ul>
//         </div>
//         <div className="greeting-search">

//         </div>
//       </div>
//     )
//   };

//   const greetingMessage = () => {
//     return(
//       < AuthRoute
//         currentUser={currentUser}
//         logout={logout}
//       />
//     )
//   };


//   return currentUser ? greetingMessage() : sessionLinks();

// };

export default Greeting;