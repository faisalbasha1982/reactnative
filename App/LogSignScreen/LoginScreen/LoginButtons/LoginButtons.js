import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import LoginButton from './LoginButton';
import GuestButton from '../../GuestButton/GuestButton';
import GoogleButton from './GoogleButton';
import FacebookButton from './FacebookButton';
import TwitterButton from './TwitterButton';
import LinkedInButton from './LinkedInButton';

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
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height / 10,
    }}>
        <View style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: height / 5,
        }}
        >
          <LinkedInButton special />
          <FacebookButton special />
          <GoogleButton special />
          <TwitterButton special />
          <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: height / 25 }}>
            <Text style={{
                  color: '#000000',
                  fontWeight: 'bold',
                  fontSize: 25,
                  fontStyle: 'italic',
          }}>or....
            </Text>
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
