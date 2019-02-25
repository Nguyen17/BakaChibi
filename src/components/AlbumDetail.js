import React, { Component } from "react";
import { Text, View, Linking, ScrollView } from "react-native";
import { Button, ListItem } from "react-native-elements";
import AlbumItem from "./AlbumItem";
// class AlbumDetail extends Component {
//   render() {
//     return (
//       <View>
//         <Text>{this.props.data.title}</Text>
//       </View>
//     );
//   }
// }

const AlbumDetail = props => {
  return (
    <ScrollView>
      <AlbumItem
        key={props.id}
        title={props.albums.title}
        artist={props.albums.artist}
        url={props.albums.url}
        img={props.albums.thumbnail_image}
        cover={props.albums.image}
      />
    </ScrollView>
  );
};

export default AlbumDetail;
