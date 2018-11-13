import React, { Component } from "react";
import { Home } from "./app/views/Home.js";
import { Contact } from "./app/views/Contact.js";
import { StackNavigator } from "react-navigation";

const MyRoutes = StackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    }
  },
  {
    initialRouteName: "HomeRT"
  }
);

export default class App extends Component {
  render() {
    return <MyRoutes />;
  }
}
