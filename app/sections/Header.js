import React, { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  toggleUser = () => {
    this.setState(previousState => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };

  render() {
    let display = this.state.isLoggedIn ? "Sample User" : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image style={styles.logoStyle} source={require("./img/logo.png")} />
        <Text style={styles.headerText} onPress={this.toggleUser}>
          {display}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    textAlign: "right",
    color: "white",
    fontSize: 20,
    flex: 1
  },
  headStyle: {
    backgroundColor: "#35605a",
    flex: 5,
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#000000"
  },
  logoStyle: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
