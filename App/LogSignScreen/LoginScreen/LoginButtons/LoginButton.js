import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { Text, Spinner, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';
import Api from '../../../Api/api';


export default class LoginButton extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      canLogin: false,
      auth_token: '',
    };
  }

  updateCanLogin(can) {
    this.setState({ canLogin: can });
  }

  moveToMainAppScreen = () => {
    Actions.push('mainAppScreen');
  };

  login = async () => {
    fetch(Api.url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        AuthenticationData: "{'Lang': 'en','AuthID': 'JS#236734','Data':'FormLogin','D' : '2018-04-22 7:15:12' ,'R' : 'er3rssf3dfd'}",
        LoginData: "{'U' : 'Subbiah.Balaji@esteinternationalgroup.be.com','P': 'hello','D':'2018-04-17 6:28:12', 'R' : 'er3rssfd'}",
        TestingMode: 'Testing@JobFixers#09876',
      }),
    }).then(response => response.json())
      .then((res) => {
        if (typeof (res.message) !== 'undefined') {
          this.setState({ auth_token: res.LoginAccessToken });
          Alert.alert('Welcome', ' You have succesfully logged in');
          this.setState({ isLogin: false, canLogin: false });
          GLOBAL.showToast(language.loginSuccess);
          this.moveToMainAppScreen();
          this.props.clear();
        } else {
          this.setState({ auth_token: res.LoginAccessToken });
          Alert.alert('Welcome', ' You have succesfully logged in');
        }
      }).catch((error) => { console.error(error); });
  };

  loginUser = () => {
    if (!this.state.isLogin) {
      if (!this.state.canLogin) {
        GLOBAL.showToast(language.checkFields);
      } else {
        this.setState({ isLogin: true });
        this.login();
        setTimeout(() => {
          GLOBAL.showToast(language.loginSuccess);
          this.moveToMainAppScreen();
          this.props.clear();
          this.setState({ isLogin: false, canLogin: false });
        }, 1000);
      }
    }
  };

  render() {
    let animationType;
    let loginColor;

    console.log('auth_token=', this.state.auth_token);

    if (this.state.canLogin) {
      animationType = 'pulse';
      loginColor = mainThemeColor;
    } else {
      loginColor = mainThemeColor;
      animationType = null;
    }

    let indicator = (<Text uppercase={false} style={{ color: 'white', fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}>{language.login}</Text>);
    if (this.state.isLogin) {
      indicator = (<Spinner color={loginColor} size="large" />);
    }

    return (
      <Animatable.View animation={animationType} iterationCount="infinite" duration={500}>
        <Button
          bordered
          success
          activeOpacity={0.5}
          onPress={this.login}
          style={{
            borderColor: '#000',
            backgroundColor: '#e82d38',
            alignSelf: 'center',
            justifyContent: 'center',
            width: (width * 7) / 10,
            height: height / 13,
            marginTop: height / 50,
            shadowColor: '#000000',
            shadowOffset: {
              width: 5,
              height: 3,
            },
            shadowRadius: 15,
            shadowOpacity: 1.0,
          }}
        >
          {indicator}
        </Button>
      </Animatable.View>
    );
  }
}

LoginButton.propTypes = {
  clear: PropTypes.func.isRequired,
};
