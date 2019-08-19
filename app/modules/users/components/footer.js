import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default (Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bodyText}>All users has been loaded.</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  bodyText: {
    textAlign: "center",
    fontSize: hp("1.8%"),
    fontWeight: "500",
    color: "#D84315"
  },
  container: {
    flex: 1,
    width: "100%",
    height: hp('5%'),
    alignItems: "center",
    justifyContent: "center"
  }
});
