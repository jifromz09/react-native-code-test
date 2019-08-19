/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
export default class LoaderItem extends Component {
  constructor(props) {
    super(props);
    this.anim = new Animated.Value(0);
  }

  componentDidMount = () => {
    this.fadeAnimation();
  };

  fadeAnimation = () => {
    this.anim.setValue(0);
    Animated.timing(this.anim, {
      toValue: 1,
      duration: 2200,
      // delay: 200,
      easing: Easing.in
    }).start();
  };

  render() {
    return (
      <Animated.View
        style={[
          styles.dotLoader1,
          {
            borderRadius: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 200]
            }),
            width: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 200]
            }),
            height: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 200]
            }),
            opacity: this.anim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0]
            })
          }
        ]}
      />
    );
  }
}

const styles = StyleSheet.create({
  dotLoader1: {
    backgroundColor: "#F0F4C3",
    borderColor: "#F9FBE7",
    alignContent: "center",
    justifyContent: "center",
    position: "absolute"
  }
});
