import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      year: "",
      day: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);

// TEST
    this.renderEmailErrors = this.renderEmailErrors.bind(this);
    this.renderPasswordErrors = this.renderPasswordErrors.bind(this);
    this.renderYearErrors = this.renderYearErrors.bind(this);
    this.renderDayErrors = this.renderDayErrors.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup({email: this.state.email, password: this.state.password});
  }

  demoLogin(e) {
    e.preventDefault();
    let demo = {email: "young1@gmail.com", password: "password"};
    this.props.login(demo);
  }

  renderEmailErrors() {
    if (this.state.email.length > 0) {
      let email = this.state.email.split("");
      if (email.includes("@") && email.includes(".")) {
        if (this.props.errors.length > 0) {
          return(
            <span className="signup-error">We are sorry, that email is taken.</span>
          )
        }
      } else {
        return (
          <span className="signup-error">The email address you supplied is invalid.</span>
        )
      }
    }
  }

  renderPasswordErrors() {
    if (this.state.password.length < 6 && this.state.password.length !== 0) {
      return (
        <span className="signup-error">Your password is too short.</span>
      )
    }
  }

  renderYearErrors() {
    let numbers = /^\d+$/.test(this.state.year);
    if (numbers || this.state.year === "") {
      if (parseInt(this.state.year) < 1900 || parseInt(this.state.year) > 2019) {
        return(
          <span className="signup-error">Please enter a valid year.</span>
        )
      } else if (parseInt(this.state.year) > 2001) {
        return(
          <span className="signup-error">Sorry, but you don't meet AirBnb's age requirements.</span>
        )
      }
    } else {
      return(
        <span className="signup-error">Please enter a valid year with numbers.</span>
      )
    }
  }

  renderDayErrors() {
    let numbers = /^\d+$/.test(this.state.day);
    if (numbers || this.state.day === "") {
      if (parseInt(this.state.day) > 31 || parseInt(this.state.day) < 1) {
        return(
          <span className="signup-error">Please enter a valid day of the month.</span>
        )
      }
    } else {
      return(
        <span className="signup-error">Please enter a valid day with numbers.</span>
      )
    }
  }
  
  renderErrors() {
    if (this.props.errors.length > 0) {
      return(
        <span className="signup-error">{this.props.errors[0]}</span>
      )
    }
  }
  render() {
    return(
      <div className="signup">
        <img className="x-login" onClick={this.props.closeModal} src={window.modalX} />
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <div className="signup-message">Sign up with your email address</div>
            {/* <span className="required-fields">*</span>
            <span className="required-msg">Required fields</span> */}
            <div className="signup-error-msg">{this.renderErrors()}</div>

            <div className="signup-info">
              <label>
                {/* <span className="required">*</span> */}
                <input type="text"
                  className="email login-input"
                  value={this.state.email}
                  onChange={this.update('email')}
                  onClick={this.props.clear}
                  placeholder="Email"
                  />
                <div className="signup-error-messages">{this.renderEmailErrors()}</div>
              </label>
              <label>
                <input type="text"
                  className="first-name login-input"
                  value={this.state.firstName}
                  onChange={this.update('firstName')}
                  placeholder="First Name"
                  />
              </label>
              <label>
                <input type="text"
                  className="last-name login-input"
                  value={this.state.lastName}
                  onChange={this.update('lastName')}
                  placeholder="Last Name"
                  />
              </label>
              <label>
                {/* <span className="required">*</span> */}
                <input type="password"
                  className="password login-input "
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Create a Password"
                  />
                  <div className="signup-error-messages">{this.renderPasswordErrors()}</div>
              </label>
              <div className="dob-text">Birthday</div>
              <div className="dob-msg">To sign up, you need to be at least 18. Other people who use Airbnb won’t see your birthday.</div>
              <select className="dob-month" placeholder="Month">
                <option value="month">Month</option>
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </select> 
              <label>
                <input 
                  className="dob-day dob" 
                  value={this.state.day} 
                  onChange={this.update("day")} 
                  type="text" 
                  placeholder="Day"/>
              </label>
              <label>
                <input 
                  className="dob-year dob" 
                  value={this.state.year} 
                  onChange={this.update("year")} 
                  type="text" 
                  placeholder="Year"/>
                <div className="signup-error-messages">{this.renderDayErrors()}</div>
                <div className="signup-error-messages">{this.renderYearErrors()}</div>
              </label>
              <div className="signup-options">
                <input className="login-button" type="submit" value={this.props.formType} />
                <button className="demo-button" onClick={this.demoLogin}>Log In with Demo</button> 
                <div className="signup-redirect">
                  <span className="yes-account">Already have an Airbnb account?</span>
                  <a className="login-link" role="button" onClick={this.props.clear}>{this.props.loginForm}</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default SignupForm;
