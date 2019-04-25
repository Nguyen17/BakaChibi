// Import libraries to use components
import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Header, Button, Icon, SearchBar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/**
 * Headeer
 * @description
 * render the header component on the top of the app
 *    - includes menu, search, and other things
 */
class HeaderThing extends Component {
  state = {
    search: ""
  };

  // @description
  // Takes user input and displays it in the searchbar
  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    const calendarIcon = (
      <Icon
        name="calendar-blank"
        type="material-community"
        color="white"
        onPress={() => {}}
      />
    );

    return (
      <View>
        {/* 
          Uses premade Header component from react-native-element ui library
        */}
        <Header
          barStyle="light-content"
          backgroundColor="black"
          leftComponent={{
            icon: "menu",
            color: "#fff"
          }}
          centerComponent={{
            text: "Saiikomo | Anime chart | Anime source",
            style: {
              color: "#fff",
              fontWeight: "bold"
            }
          }}
          rightComponent={calendarIcon}
        />

        {/* Render a search bar */}
        <SearchBar
          searchIcon={{
            color: "#fff"
          }}
          containerStyle={{
            backgroundColor: "#180E18",
            // backgroundColor: "white",
            borderBottomWidth: 0
          }}
          inputContainerStyle={{
            // backgroundColor: "#e4e4e4"
            backgroundColor: "#463e46"
          }}
          inputStyle={{
            color: "#f1f1f1",
            fontSize: 11
          }}
          onChangeText={this.updateSearch}
          value={search}
          onCancel={() => {}}
          placeholder="search for an anime."
        />
      </View>
    );
  }
}

// Create styles object
// styles is implemented similiar to a hash structure
const styles = {
  viewStyle: {
    paddingTop: 15,
    borderWidth: 0
  },
  headerOneStyle: {
    fontSize: 20.0,
    color: "black"
  }
};

export default HeaderThing;
