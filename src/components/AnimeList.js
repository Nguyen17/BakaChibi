import React, { Component } from "react";
import { Text, View } from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";

/// @desc Try to query popular anime and stuff.

const AnimeQuery = gql`
  query  {
        Page(page: 1, perPage: 20) {
          airingSchedules(airingAt_greater: 1551055572) {
            id
            mediaId
            episode
            timeUntilAiring
            airingAt

            media {
              title {
                romaji
                english
              }
              siteUrl
              coverImage {
                medium
              }
            }
          }
        }
      }
  }`;

class AnimeList extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default graphql(AnimeQuery)(AnimeList);
