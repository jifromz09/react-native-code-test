import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { ListItem, Left, Body, Right, Thumbnail } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default (UserItem = ({ data }) => {
  const name = data.first_name + " " + data.last_name;   
  return (
    <ListItem
      style={{
        paddingLeft: 0,
        marginLeft: 0
      }}
    >
      <Left style={{ flex: 1, paddingLeft: 10 }}>
        <Thumbnail source={{ uri: data.avatar }} />
      </Left>
      <Body style={{ flex: 5 }}>
        <Text style={styles.nameText}>{name}</Text>
        <Text note style={styles.bodyText}>{data.email}</Text>
      </Body>
      <Right />
    </ListItem>
  );
});

const styles = StyleSheet.create({
  nameText: {
    paddingLeft: 10,
    fontSize: hp("2.2%"),
    fontWeight: "400",
    color: "#212121"
  },
  bodyText:{
    paddingLeft: 10,
    fontSize: hp("1.7%"),
    fontWeight: "400",
    color: "#212121"
  }
});
