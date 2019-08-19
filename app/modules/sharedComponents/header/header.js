import React, { Component } from "react";
import { Text, View } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default (header = ({ title }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{ fontSize: hp("2.5%"), fontWeight: "500", color: "#212121" }}
      >
        {title}
      </Text>
    </View>
  );
});
