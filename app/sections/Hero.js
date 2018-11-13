import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
export class Hero extends Component {
  render() {
    return (
      <Image style={styles.heroImage} source={require("./img/wallpaper.jpg")} />
    );
  }
}

const styles = StyleSheet.create({
  heroImage: {
    flex: 8,
    width: undefined,
    height: undefined
  }
});
