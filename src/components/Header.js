// Import libraries to use components
import React, { Component } from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Header, Button, Icon, SearchBar } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Create the header component to be usable
// Header component is able to accept props
// const HeaderThing = props => {

//   return (
//     <View>
//       {/* <Text style={styles.headerOneStyle}>Anime Chart</Text> */}
//       <Header
//         barStyle="dark-content"
//         backgroundColor="black"
//         leftComponent={{ icon: "menu", color: "#fff" }}
//         centerComponent={{ text: "Anime Chart", style: { color: "#fff" } }}
//         rightComponent={calendarIcon}
//       />

//       {/* <SearchBar
//         containerStyle={{
//           backgroundColor: "#fff",
//           borderBottomWidth: 0
//         }}
//         inputStyle={{}}
//         onChangeText={this.updateSearch}
//         value={search}
//       /> */}
//     </View>
//   );
// };

class HeaderThing extends Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const calendarIcon = (
      <Icon
        name="calendar-blank"
        type="material-community"
        color="white"
        onPress={() => {}}
      />
    );
    const { search } = this.state;
    return (
      <View>
        {/* <Text style={styles.headerOneStyle}>Anime Chart</Text> */}
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
    // backgroundColor: "red"
  },
  headerOneStyle: {
    fontSize: 20.0,
    color: "black"
  }
};

export default HeaderThing;
