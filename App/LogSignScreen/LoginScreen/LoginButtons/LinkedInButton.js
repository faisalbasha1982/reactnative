import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import { Button, Text, Icon } from 'native-base';
import LinkedInModal from 'react-native-linkedin';
import Api from '../../../Api/api';

export default class LinkedInButton extends Component {
  state = {
    user: '',
  };

  render() {
    if (this.props.special) {
      return (
        <Button
          onPress={this.onLinkedInButtonClick}
          iconLeft
          activeOpacity={0.5}
          style={{
            width: (width * 37) / 50,
            height: height / 14,
            backgroundColor: '#4875B4',
            borderColor: mainThemeColor,
            marginBottom: height / 80,
          }}
        >
          <Icon style={{ fontSize: GLOBAL.totalSize(3.5), color: mainThemeColor }} name="logo-linkedin" />
          <LinkedInModal
            style={{
                        fontSize: GLOBAL.totalSize(2.22),
                        fontWeight: '500',
                        textAlign: 'left',
                        color: mainThemeColor,
                        marginRight: 10,
                      }}
            clientID="81td97f0ibm93v"
            clientSecret="RotJQJQRBbBoWG7l"
            redirectUri="https://www.linkedin.com/developer/apps"
            onSuccess={token => console.log(token)}
          />
        </Button>
      );
    }
    return (
      <Button
        iconLeft
        activeOpacity={0.5}
        onPress={this.onLinkedInButtonClick}
        style={{
          backgroundColor: '#4875B4',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: height / 134,
          borderColor: '#4875B4',
          width: (width * 37) / 50,
          height: height / 14,
        }}
      >
        <Text
          uppercase={false}
          style={{ color: mainThemeColor, fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}
        >
          {language.linkedin}
        </Text>
      </Button>
    );
  }
}

LinkedInButton.propTypes = {
  special: PropTypes.bool,
};

LinkedInButton.defaultProps = {
  special: false,
};
