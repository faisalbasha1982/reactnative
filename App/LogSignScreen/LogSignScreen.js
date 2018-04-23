import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'native-base';
import { Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import CompanyBanner from './CompanyBanner/CompanyBanner';
import LoginScreen from './LoginScreen/LoginScreen';

const viewPortHeight = Dimensions.get('window').height;

export default class LogSignScreen extends Component {
  changeZindex = () => {
    this.signInScreen.changeZindex();
  };

  switchScreens = index => () => {
    if (this.topTabs.state.currentTabIndex !== index) {
      if (index === 0) {
        this.loginScreen.animationView.fadeInLeft(600).then(this.changeZindex);
        this.signInScreen.animationView.fadeOutRight(400);
      } else {
        this.loginScreen.animationView.fadeOutLeft(400);
        this.signInScreen.animationView.fadeInRight(600).then(this.changeZindex);
      }
      this.topTabs.state.tabsStyles.reverse();
      this.topTabs.setState({ currentTabIndex: index });
    }
  };

  moveToMainAppScreen = () => {
    Actions.push('testMainAppScreen');
  };

  showSettings = () => {
    this.settingsPanel.showPanel();
  };

  showPopupDialog = (index) => {
    this.popupDialogs.showPopup(index);
  };

  scrollToTextInput = (index) => {
    this.keyboardAvoidView.scrollToPosition(0, (index * height) / 10, true);
  };

  render() {
    return (
      <KeyboardAwareScrollView
        {...GLOBAL.keyboardAvoidView}
        ref={(ref) => { this.keyboardAvoidView = ref; }}
      >
        <CompanyBanner />
        <Animatable.View
          animation="fadeIn"
          delay={1900}
          duration={1000}
          style={{ flex: 7, flexDirection: 'row', height: viewPortHeight }}
        >
          <LoginScreen
            move={this.moveToMainAppScreen}
            ref={(ref) => { this.loginScreen = ref; }}
          />

        </Animatable.View>
      </KeyboardAwareScrollView>
    );
  }
}
