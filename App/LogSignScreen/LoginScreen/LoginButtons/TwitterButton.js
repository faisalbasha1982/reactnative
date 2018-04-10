import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';

export default class TwitterButton extends Component {
  onTwitterButtonClick = () => {
    console.warn('Twitter button clicked'); // eslint-disable-line
  };

  render() {
    if (this.props.special) {
      return (
        <Button
          onPress={this.onTwitterButtonClick}
          iconLeft
          activeOpacity={0.5}
          style={{
            width: (width * 74) / 100,
            height: height / 14,
            borderColor: mainThemeColor,
            marginTop: height / 130,
            backgroundColor: '#1dcaff',
          }}
        >
          <Icon style={{ fontSize: GLOBAL.totalSize(3.5), color: mainThemeColor }} name="logo-twitter" />
          <Text
            uppercase={false}
            style={{
            fontSize: GLOBAL.totalSize(2.22), fontWeight: '500', color: mainThemeColor, paddingLeft: 0,
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
        onPress={this.onTwitterButtonClick}
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
