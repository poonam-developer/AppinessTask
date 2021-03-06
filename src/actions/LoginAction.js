// import axios from 'axios';
import { LoginType } from './ActionType';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
import userInfo from '../../config/userLoginInfo.json';

// const HEADER_CONFIG = {
//   headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
// };

export function setTextFiled(data) {
  return { type: LoginType.SET_LOGIN_TEXT_FIELD, data };
}

export function userLogin(loginInfo) {
  console.log(loginInfo, 'shreeerre');
  return (dispatch) => {
    // axios
    //   .post(`${config.BASE_URL}/rest/userlogin?t=${Date.now()}`, userCredentials, HEADER_CONFIG)
    //   .then(response => {
    //     console.log('In Sucess');
    //     dispatch({
    //       type: LoginType.LOGIN_SUCCESS,
    //       userInfo: response.data.dbData
    //     });
    //   })
    //   .catch(err => {
    //     dispatch({ type: LoginType.LOGIN_ERROR, message: err });
    //   });
    if (loginInfo.userName === userInfo.username && loginInfo.password === userInfo.password) {
      dispatch({
        type: LoginType.LOGIN_SUCCESS,
        userInfo,
        loginMessage: 'Login Successsful'
      });
    } else {
      dispatch({ type: LoginType.LOGIN_FAILED, loginMessage: 'invalid username and password' });
    }
  };
}

export function userLogOut() {
  return { type: LoginType.LOGOUT_SUCCESS };
}

/* export function userLogin1(userData) {
  return function (dispatch) {
    const accessToken = { access_token: AppConfig.MASTER_TOKEN };
    const LOGINCONFIG = Configs.LOGINCONFIG;
    LOGINCONFIG.auth = userData;
    axios
      .post(LoginUrl.AUTHENTICATE, JSON.stringify(accessToken), LOGINCONFIG)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        // setAuthorizationToken(token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch({
          type: LoginType.AUTHENTICATE,
          userInfo: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ErrorType.ERROR_LOG, mesage: err.message });
      });
  };
} */
