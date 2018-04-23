import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';
import { LoginManager } from 'react-native-fbsdk';

export default class FacebookButton extends Component {
  onFacebookButtonClick = () => {
    console.warn('Facebook button clicked'); // eslint-disable-line

    LoginManager.logInWithReadPermissions(['public_profile']).then(
      (result) => {
        if (result.isCancelled) {
          console.log('Login was cancelled');
        } else {
          console.log(`Login was successful with permissions: ${
            result.grantedPermissions.toString()}`);
        }
      },
      (error) => {
        console.log(`Login failed with error: ${error}`);
      },
    );
  };

  render() {
    if (this.props.special) {
      return (
        <Button
          onPress={this.onFacebookButtonClick}
          iconLeft
          primary
          activeOpacity={0.5}
          style={{
            backgroundColor: '#3B5998',
            width: (width * 37) / 50,
            height: height / 14,
            borderColor: mainThemeColor,
          }}
        >
          <Icon style={{ fontSize: GLOBAL.totalSize(3.5), color: mainThemeColor }} name="logo-facebook" />
          <Text
            uppercase={false}
            style={{
            fontSize: GLOBAL.totalSize(2.22),
            fontWeight: '500',
            color: mainThemeColor,
            textAlign: 'center',
          }}
          >Login with Facebook
          </Text>
        </Button>
      );
    }
    return (
      <Button
        primary
        iconLeft
        activeOpacity={0.5}
        onPress={this.onFacebookButtonClick}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: height / 34,
          borderColor: mainThemeColor,
          width: (width * 13) / 100,
          height: height / 14,
        }}
      >
        <Text
          uppercase={false}
          style={{ color: mainThemeColor, fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}
        >
          {language.facebook}
        </Text>
      </Button>
    );
  }
}

FacebookButton.propTypes = {
  special: PropTypes.bool,
};

FacebookButton.defaultProps = {
  special: false,
};
