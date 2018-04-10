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
          style={{ width: (width * 37) / 100, height: height / 14, borderColor: mainThemeColor }}
        >
          <Icon style={{ fontSize: GLOBAL.totalSize(3.5), color: mainThemeColor }} name="logo-facebook" />
          <Text
            uppercase={false}
            style={{
            fontSize: GLOBAL.totalSize(2.22), fontWeight: '500', color: mainThemeColor, paddingLeft: width / 30,
          }}
          >LinkedIn
          </Text>
        </Button>
      );
    }
    return (
      <Button
        iconLeft
        activeOpacity={0.5}
        onPress={this.onFacebookButtonClick}
        style={{
          alignSelf: 'center', justifyContent: 'center', marginTop: height / 34, borderColor: mainThemeColor, width: (width * 13) / 200, height: height / 14,
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

LinkedInButton.propTypes = {
  special: PropTypes.bool,
};

LinkedInButton.defaultProps = {
  special: false,
};
