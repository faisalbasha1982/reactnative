import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';
import { NativeModules, Alert } from 'react-native';

const { RNTwitterSignIn } = NativeModules;

const Constants = {
  // Dev Parse keys
  TWITTER_COMSUMER_KEY: 'Mp0taY9OcO8UhvacuTPU73Xbp',
  TWITTER_CONSUMER_SECRET: 'HWAhDOOUFYsuL4H4w445eEta2lzpxRBN07zxuFZCo5UwbD9RqG',
};

export default class TwitterButton extends Component {
  state = {
    isLoggedIn: false,
    auth_token: '',
  }

  twitterSignIn = () => {
    console.warn('twitter button clicked'); // eslint-disable-line
    RNTwitterSignIn.init(Constants.TWITTER_COMSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET);
    RNTwitterSignIn.logIn()
      .then((loginData) => {
        console.log(loginData);
        const { authToken, authTokenSecret } = loginData;
        if (authToken && authTokenSecret) {
          this.setState({
            isLoggedIn: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleLogout = () => {
    console.log('logout');
    RNTwitterSignIn.logOut();
    this.setState({
      isLoggedIn: false,
    });
  }


  render() {
    console.log('isLoggedIn:', this.state.isLoggedIn);
    if (this.props.special) {
      return (
        <Button
          onPress={this.twitterSignIn}
          iconLeft
          activeOpacity={0.5}
          style={{
            width: (width * 74) / 100,
            height: height / 14,
            borderColor: mainThemeColor,
            marginTop: height / 70,
            backgroundColor: '#1dcaff',
          }}
        >
          <Icon style={{ fontSize: GLOBAL.totalSize(3.5), color: mainThemeColor }} name="logo-twitter" />
          <Text
            uppercase={false}
            style={{
            fontSize: GLOBAL.totalSize(2.22),
            fontWeight: '500',
            textAlign: 'center',
            color: mainThemeColor,
            marginRight: 18,
          }}
          >Login with Twitter
          </Text>
        </Button>
      );
    }
    return (
      <Button
        iconLeft
        activeOpacity={0.5}
        onPress={this.twitterSignIn}
        style={{
            backgroundColor: '#1dcaff', alignSelf: 'center', justifyContent: 'center', marginTop: height / 34, borderColor: mainThemeColor, width: (width * 13) / 200, height: height / 14,
        }}
      >
        <Text
          uppercase={false}
          style={{ color: mainThemeColor, fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}
        >
          {language.twitter}
        </Text>
      </Button>
    );
  }
}

TwitterButton.propTypes = {
  special: PropTypes.bool,
};

TwitterButton.defaultProps = {
  special: false,
};
