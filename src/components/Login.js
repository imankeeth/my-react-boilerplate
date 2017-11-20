import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, authenticateUser } from '../actions';

import '../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: '',
      password: '',
      errors: {},
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onLogin(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });

    if (this.isNotEmpty()) {
      this.props
        .login(this.state)
        .then(data => {
          this.setState({ errors: {}, isLoading: false });
          this.props.authenticateUser();
          this.props.history.push('/');
        })
        .catch(errors => {
          this.setState({ errors, isLoading: false });
        });
    } else {
      this.setState({ errors: { emailid: 'This field is required', password: 'This field is required' } });
    }
  }

  isNotEmpty() {
    return this.state.emailid && this.state.password;
  }

  render() {
    const { emailid, password, errors } = this.state;

    return (
      <div className="container">
        <div className="profile profile--open">
          <div className="profile__form">
            <form className="profile__fields" onSubmit={this.onLogin}>
              <div className="field">
                <input
                  type="text"
                  id="emailid"
                  name="emailid"
                  className="input"
                  value={emailid}
                  onChange={this.onFieldChange}
                  required
                />
                <label htmlFor="emailid" className="label">
                  Email ID
                </label>
                {errors.emailid && <span>{errors.emailid}</span>}
              </div>
              <div className="field">
                <input
                  type="password"
                  id="fieldPassword"
                  name="password"
                  className="input"
                  value={password}
                  onChange={this.onFieldChange}
                  required
                />
                <label htmlFor="fieldPassword" className="label">
                  Password
                </label>
                {errors.password && <span>{errors.password}</span>}
              </div>
              <div className="profile__footer">
                <button type="submit" className="button raised blue">
                  <div className="center">LOGIN</div>
                </button>
              </div>
            </form>
            {errors.loginFailed && (
              <span style={{ color: 'red', position: 'absolute', top: 0, right: 50 }}>{errors.loginFailed}</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isUserAuthenticated }) => ({
  isUserAuthenticated,
});

export default connect(mapStateToProps, { login, authenticateUser })(Login);
