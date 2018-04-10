import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { View } from 'react-native-animatable';

const bannerImage = require('../../../assets/rsz_logo_75.png');
const comapnyLogo = require('../../../assets/Logo-jobfixers-CMYK-01.png');

export default class CompanyBanner extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <View animation="fadeInRight" delay={250} duration={700}>
        <ImageBackground
          source={bannerImage}
          style={companyBannerStyle.background}
        >
          <Image source={comapnyLogo} resizeMode="contain" style={companyBannerStyle.icon} />
        </ImageBackground>
      </View>
    );
  }
}
