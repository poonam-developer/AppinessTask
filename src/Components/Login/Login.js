import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import { userLogin, setTextFiled } from '../../actions/LoginAction';
import './Login.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  setTextFiled = (event) => {
    this.props.dispatch(
      setTextFiled({ name: event.target.name, value: event.target.value })
    );
  }
  // ValidateUser() {
  //   this.Validation();
  //   if (this.state.isInvalidData === false) {
  //     const loginModel = this.state.login;
  //     this.props.dispatch(userLogin(loginModel));
  //   }
  // }
  Validation = () => {
    let isDataNotValid = false;
    let errorValMessage = '';
    if (this.props.login.userInfo.userName === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter User Name';
    } else if (this.props.login.userInfo.password === '') {
      isDataNotValid = true;
      errorValMessage = 'Please enter password';
    }
    this.state.isInvalidData = isDataNotValid;
    if (errorValMessage !== '') {
      this.state.errorMessage = errorValMessage;
      setTimeout(() => {
        this.setState({ errorMessage: errorValMessage, isInvalidData: isDataNotValid });
      }, 500);
    } else {
      setTimeout(() => {
        this.setState({ errorMessage: '' });
      }, 500);
      this.props.dispatch(userLogin(this.props.login.userInfo));
      setTimeout(() => {
        this.props.dispatch(hashHistory.push('/Dashboard'));
      }, 5000);
    }
  }

  render() {
    console.log(this.props, 'kamini');
    return (
      <div className="landing-wrapper">
        <div className="landing-col col-lg-8 col-md-7">
          <div>
            <div className="form-field">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-input"
                name="userName"
                value={this.props.login.userInfo.userName}
                onSelect={e => e.stopPropagation()}
                onChange={this.setTextFiled}
              />
            </div>
            <div className="form-field">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-input"
                name="password"
                value={this.props.login.userInfo.password}
                onChange={this.setTextFiled}
                onSelect={e => e.stopPropagation()}
              />
            </div>
            <label className="errorMessage">{(this.props.login.loginMessage && this.props.login.loginMessage !== '') ? this.props.login.loginMessage : this.state.errorMessage}</label>
            <label className="errorMessage">{(this.props.login.loginSuccessMessage && this.props.login.loginSuccessMessage !== '') ? this.props.login.loginSuccessMessage : ''}</label>
            <div className="text-center">
              <input className="log-in-submit btn btn-primary margin-right" onClick={this.Validation} type="button" value="Log in" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, 'state');
  return { login: state.login };
}

export default connect(mapStateToProps)(Home);
// export default Home;
