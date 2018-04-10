import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import GuestButton from '../../GuestButton/GuestButton';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';
import TwitterButton from './TwitterButton';

export default class LoginButtons extends Component {
  render() {
    if (GLOBAL.appLoginStyle === 0) {
      return (
        <View style={{ marginTop: height / 25 }}>
          <LoginButton clear={this.props.clear} ref={(ref) => { this.loginButton = ref; }} />
          <GoogleButton />
          <GuestButton move={this.props.move} />
        </View>
      );
    } else if (GLOBAL.appLoginStyle === 1) {
      return (
        <View style={{ marginTop: height / 25 }}>
          <LoginButton clear={this.props.clear} ref={(ref) => { this.loginButton = ref; }} />
          <FacebookButton />
          <GuestButton move={this.props.move} />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: height / 30 }}>
          <FacebookButton special />
          <GoogleButton special />
          <TwitterButton special />
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height / 130 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>OR</Text>
          </View>
        </View>
      </View>
    );
  }
}

LoginButtons.propTypes = {
  move: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};
