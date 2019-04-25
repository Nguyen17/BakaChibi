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
import AnimeList from "./src/components/AnimeList";

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
  // Testing android location  permission
  // request for location after every ui is rendered on the screen
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
          <AnimeList />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
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
