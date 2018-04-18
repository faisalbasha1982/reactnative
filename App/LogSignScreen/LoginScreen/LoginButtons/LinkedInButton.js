import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

export default class LinkedInButton extends Component {
  onLinkedInButtonClick = () => {
    console.warn('LinkedIn button clicked'); // eslint-disable-line
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
          <Text
            uppercase={false}
            style={{
            fontSize: GLOBAL.totalSize(2.22),
            fontWeight: '500',
            textAlign: 'center',
            color: mainThemeColor,
            marginRight: 10,
          }}
          >Login with LinkedIn
          </Text>
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
