import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login({email: this.state.email, password: this.state.password});
  }

  demoLogin(e) {
    e.preventDefault();
    let demo = {email: "young1@gmail.com", password: "password"};
    this.props.login(demo);
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
    return(
      <div className="login">
        {/* <button className="x-login" onClick={this.props.closeModal}>X</button> */}
        <img className="x-login" onClick={this.props.closeModal} src={window.modalX} />
        <div className="login-message">Log in to continue</div><br/>
        <div className="login-form">
            {/* DEMO BUTTON */}
          <form onSubmit={this.handleSubmit} >
            <div className="login-error-message">{this.renderErrors()}</div>
            <div className="login-info">
              <label onChange={this.props.clear}>
                <input type="text"
                  className="email-input login-input"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="Email Address"
                  />
              </label>
              <label onChange={this.props.clear}>
                <input type="password"
                  className="password-input login-input"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  />
              </label>
              <div className="login-submit">
                <label className="remember-submit">
                  <input className="remember-checkbox" type="checkbox"/>
                  <div className="remember-me">Remember me</div>
                </label>
                <div className="login-space-between"></div>
                <input className="login-button" type="submit" value={"Log In"} />
                <button className="demo-button" onClick={this.demoLogin}>Log In with Demo</button><br/> 
              </div>
              <div className="signup-redirect">
                <div className="no-account">Don't have an account?</div> 
                <a className="signup-link" role="button" onClick={this.props.clear}>{this.props.signup}</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

export default LoginForm;
