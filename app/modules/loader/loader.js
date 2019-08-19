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
import LoaderItem from "./loaderItem";
export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: []
    };
    this.counter = 1;
    this.setInterval = null;
    this.timeOut = null;
    this.anim = new Animated.Value(1);
  }

  componentDidMount = () => {
    this.setCircleInterval();
    this.timeOut = setTimeout(() => {
      this.props.navigation.navigate("Users");
    }, 3000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.timeOut);
    clearInterval(this.setInterval);
  };

  setCircleInterval() {
    this.setInterval = setInterval(this.addCircle.bind(this), 1000);
    this.addCircle();
  }

  addCircle() {
    this.setState({ circles: [...this.state.circles, this.counter] });
    this.counter++;
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.circles.map(i => (
          <LoaderItem key={i} />
        ))}
        <View style={styles.dotLoader} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  dotLoader: {
    backgroundColor: "#AED581",
    height: 40,
    width: 40,
    borderRadius: 40,
    alignSelf: "center"
  }
});
