/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  SafeAreaView
} from "react-native";

/// Integration with Graphql and Appollo
import ApolloClient from "apollo-boost";
import { AppolloProvider, ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co"
});

/// Import Components here
import HeaderThing from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import AnimeList from "./src/components/AnimeList";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

// type Props = {};

// @Method requestLocationPermission
// @descr ask user for permission to access location
// @notes: remeber try and catch technique in regards to async / await
async function requestLocationPermission() {
  try {
    const permissionGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      {
        title: "Location Permission Needed",
        message: "app need location in order to run services.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "Agree"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location");
    } else {
      console.log("Location permission denied");
    }
  } catch (error) {
    console.log(error);
  }
}
export default class App extends Component {
  // Testing android adding permission
  componentDidMount() {
    requestLocationPermission();
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <View
          style={{
            flex: 1
          }}
        >
          <HeaderThing />
          {/* <Text style={styles.welcome}> Welcome to React Native! </Text>
                                <Text style={styles.instructions}> To get started, edit App.js </Text>
                                <Text style={styles.instructions}>I LOVE ANIME</Text>
                                <Text style={styles.instructions}> {instructions} </Text> */}
          <AnimeList />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   backgroundColor: "#F5FCFF"
  // },
  root: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
