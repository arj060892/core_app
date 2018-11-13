import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Header } from "../sections/Header.js";

export class Contact extends Component {
  static navigationOptions = {
    header: null
  };
  //   npm install --save react-navigation@1.5.11
  render() {
    return (
      <View style={styles.container}>
        <Header message="Press to Login" />
        <Text style={{ flex: 8 }}>hi i am akhil</Text>
        <Text style={{ flex: 6 }}>hi i am ummar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
