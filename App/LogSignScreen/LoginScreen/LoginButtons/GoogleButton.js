import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Icon } from 'native-base';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class GoogleButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
    };
  }

  componentDidMount() {
  }

  onGoogleButtonClick = async () => {
    await GoogleSignin.configure({
      iosClientId: '856112431306-btql03u777irm9ge99n959s1k96omqc8.apps.googleusercontent.com',
    })
      .then(() => {
      // you can now call currentUserAsync()
        GoogleSignin.currentUserAsync().then((user) => {
          console.log('USER', user);
          this.setState({ user });
        }).done();
      });
    const userNew = GoogleSignin.currentUser();

    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      // play services are available. can now configure library
    })
      .catch((err) => {
        console.log('Play services error', err.code, err.message);
      });

    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user });

        GoogleSignin.getAccessToken()
          .then((token) => {
            console.log(token);
          })
          .catch((err) => {
            console.log(err);
          })
          .done();
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  };

  render() {
    console.log('user=', this.state.user);

    if (this.props.special) {
      return (
        <Button
          onPress={this.onGoogleButtonClick}
          iconLeft
          activeOpacity={0.5}
          style={{
          width: (width * 37) / 50,
            height: height / 14,
            borderColor: mainThemeColor,
            backgroundColor: 'red',
            marginTop: height / 80,
        }}
        >
          <Icon style={{ fontSize: GLOBAL.totalSize(3.5), color: mainThemeColor }} name="logo-google" />
          <Text
            uppercase={false}
            style={{
            fontSize: GLOBAL.totalSize(2.22),
            textAlign: 'center',
            fontWeight: '500',
            color: mainThemeColor,
            marginRight: 20,
          }}
          >Login with Google
          </Text>
        </Button>
      );
    }
    return (
      <Button
        iconLeft
        activeOpacity={0.5}
        onPress={this.onGoogleButtonClick}
        style={{
          backgroundColor: 'red', alignSelf: 'center', justifyContent: 'center', marginTop: height / 34, borderColor: mainThemeColor, width: (width * 13) / 20, height: height / 14,
        }}
      >
        <Text
          uppercase={false}
          style={{ color: mainThemeColor, fontWeight: '600', fontSize: GLOBAL.totalSize(2.22) }}
        >
          {language.google}
        </Text>
      </Button>
    );
  }
}

GoogleButton.propTypes = {
  special: PropTypes.bool,
};

GoogleButton.defaultProps = {
  special: false,
};
