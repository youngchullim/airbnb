import React from 'react';
import { Link } from 'react-router-dom';
import AuthComponent from '../auth';
// import { AuthRoute, ProtectedRoute }from '../../util/route_util';


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
      adults: "",
      children: "",
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
          <AuthComponent
            currentUser={currentUser}
            logout={logout}
          />
        </div>
      );
    } else {
      result = (
        <div className="greeting">
          <div className="greeting-navbar">
            <button className="logo-button">
              <Link to="/" className="airbnb-logo">
                <img className="airbnb-logo-img" src={window.airbnbLogo} />
              </Link>
            </button>
            <ul className="greeting-user">
              <li className="greeting-signup">
                <nav>
                  <a>{this.props.signup}</a>
                  {/* <Link to="/signup">Sign Up</Link> */}
                </nav>
              </li>
              <li className="greeting-login">
                <nav>
                  <a>{this.props.login}</a>
                  {/* <Link to="/login">Log In</Link> */}
                </nav>
              </li>
            </ul>
          </div>
          <div className="greeting-search-wrapper">
            <div className="greeting-search">
              <div className="greeting-search-title">
                <h1 className="search-h1">Find places to stay in United States on Airbnb</h1>
                <p className="search-p">Discover entire homes and private rooms perfect for any trip.</p>
              </div>
  {/* SEARCH METHOD */}
              <form onSubmit={this.handleSearch} className="greeting-search-form">
                {/* <div className="login-error-message">{this.renderErrors()}</div> */}
                <div className="greeting-search-info">
                  <label>
                    <p className="greeting-search-tag">WHERE</p>
                    <input type="text"
                      className="location-input greeting-search-input"
                      value={this.state.location}
                      onChange={this.update('location')}
                      placeholder="Anywhere"
                      />
                  </label>
                  <div className="greeting-date">
                    <div className="greeting-date-range-picker greeting-search-input">
                      <p className="greeting-search-tag">WHEN</p>
                      <DateRangePicker
                        startDate={this.state.startDate} 
                        startDateId="your_unique_start_date_id"
                        endDate={this.state.endDate}
                        endDateId="your_unique_end_date_id"
                        onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                        focusedInput={this.state.focusedInput}
                        onFocusChange={focusedInput => this.setState({ focusedInput })}
                        startDatePlaceholderText="mm/dd/yyyy"
                        endDatePlaceholderText="mm/dd/yyyy"
                        numberOfMonths={1}
                      />
                    </div>
                  </div>
                    {/* startDate turns into
                    {console.log(new Date(this.state.startDate))}
                    Tue Aug 20 2019 12:00:00 GMT-0700 (Pacific Daylight Time) */}
                  <div className="greeting-guests">
                    <div className="greeting-adults-wrapper greeting-search-input">
                      <p className="greeting-search-tag">ADULTS</p>
                      <select className="greeting-adults greeting-select" onChange={this.update('adults')}>
                        <option value="1">1 adult</option>
                        <option value="2">2 adults</option>
                        <option value="3">3 adults</option>
                        <option value="4">4 adults</option>
                        <option value="5">5 adults</option>
                        <option value="6">6 adults</option>
                        <option value="7">7 adults</option>
                        <option value="8">8 adults</option>
                        <option value="9">9 adults</option>
                        <option value="10">10 adults</option>
                        <option value="11">11 adults</option>
                        <option value="12">12 adults</option>
                      </select> 
                    </div>
                    <div className="greeting-children-wrapper greeting-search-input">
                      <p className="greeting-search-tag">CHILDREN</p>
                      <select className="greeting-children greeting-select" onChange={this.update('children')}>
                        <option value="0">0 children</option>
                        <option value="1">1 child</option>
                        <option value="2">2 children</option>
                        <option value="3">3 children</option>
                        <option value="4">4 children</option>
                        <option value="5">5 children</option>
                      </select> 
                    </div>
                  </div>
                  <input className="greeting-search-button" type="submit" value={"Search"} />
                </div>
              </form>
            </div>
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