import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'native-base';
import * as Animatable from 'react-native-animatable';
import Email from '../InputComponents/Email';
import LoginButton from './LoginButtons/LoginButton';
import LoginButtons from './LoginButtons/LoginButtons';

export default class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
    };
  }

  changeInputFocus = index => () => {
    if (index === 0) {
      this.state.inputs[index+1].state.inputRef._root.focus(); // eslint-disable-line
    }
  };

  updateCanLoginState = () => {
    let canLogin = true;
    this.state.inputs.forEach((child) => {
      if (child.state.isCorrect !== 1) {
        canLogin = false;
      }
    });
    this.loginButtons.loginButton.updateCanLogin(
      canLogin, this.state.inputs[0].state.value,
      this.state.inputs[1].state.value,
    );
  };

  clearAllInputs = () => {
    this.state.inputs.forEach((child) => {
      child.clearInput();
    });
  };

  forgotPassword = () => {
    console.warn('Forgot password clicked'); // eslint-disable-line
  };

  render() {
    return (
      <Animatable.View
        animation="fadeInRight"
        delay={1200}
        duration={700}
        ref={(ref) => { this.animationView = ref; }}
        style={GLOBAL.loginScreenStyle.mainView}
      >

        <LoginButtons
          ref={(ref) => { this.loginButtons = ref; }}
          clear={this.clearAllInputs}
          move={this.props.move}
        />

        <Form style={GLOBAL.loginScreenStyle.form}>
          <Email
            changeFocus={this.changeInputFocus(0)}
            update={this.updateCanLoginState}
            bordered
            ref={(ref) => { this.state.inputs[0] = ref; }}
          />

          <LoginButton clear={this.props.clear} ref={(ref) => { this.loginButton = ref; }} />

        </Form>

      </Animatable.View>
    );
  }
}

LoginScreen.propTypes = {
  move: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};
