import React, { Component } from "react";
import { View, Text, Linking, ScrollView } from "react-native";

import axios from "axios";
import AlbumDetail from "./AlbumDetail";
let api_point = "https://rallycoding.herokuapp.com/api/music_albums";

class AlbumList extends Component {
  state = {
    albums: []
  };

  componentWillMount() {
    axios.get(api_point).then(res =>
      this.setState({
        albums: res.data
      })
    );
  }

  // Create helper method to generate list of albums
  renderAlbums() {
    return this.state.albums.map((albums, id) => (
      <AlbumDetail key={id} albums={albums} />
    ));
  }

  // renderAlbums() {
  //   return this.state.albums.map(album => <Text>{album.title}</Text>);
  // }

  render() {
    console.log(this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
