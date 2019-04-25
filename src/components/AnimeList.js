import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import { ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Helper files for time formatting.
const prettyms = require("pretty-ms");
const epochDate = Math.round(new Date().getTime() / 1000);

/**
 * @description
 * create sql like query to get anime data and time
 */
const AnimeQuery = gql`
  query {
    Page(page: 1, perPage: 20) {
      airingSchedules(airingAt_greater: ${epochDate}) {
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
            large
            extraLarge
          }

          description(asHtml: false)
          meanScore
          popularity    
        }
      }
    }
  }
`;

const AnimeTest = gql`
  query {
    Media(id: ${apples}) {
      title {
        romaji
        english
      }
    siteUrl
    coverImage{
      medium
    }
    description
    }
  }
`;
var apples = 23;
class AnimeList extends Component {
  state = {
    date: ""
  };

  componentDidMount() {
    d;
  }

  renderTitle = ({ Page }, index) => {
    return <Text>{Page.airingSchedules[index].episode}</Text>;
  };

  renderLoading = () => {
    <View>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>;
  };

  render() {
    const { data } = this.props;
    const { loading, error, Page } = data;
    const personIcon = <Icon name="account-heart" size={15} color="white" />;
    const starIcon = <Icon name="star" size={15} color="white" />;

    if (loading) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <ActivityIndicator size="large" color="#7A4BA3" />
        </View>
      );
    }
    if (error) {
      return <Text>ERRROR</Text>;
    }
    return (
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#180E18"
        }}
      >
        {Page.airingSchedules.map(anime => (
          <View key={anime.media.title.romaji}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(anime.media.siteUrl);
              }}
            >
              {/* card */}
              <View style={styles.card}>
                {/* card bg image */}
                <Image
                  source={{
                    uri: anime.media.coverImage.extraLarge
                  }}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFillObject}
                />

                {/* card overlay over image technique */}
                <View style={styles.overlay} />

                {/* card content */}
                <View style={styles.content}>
                  {/* title */}
                  <Text
                    style={textStyle.title}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {anime.media.title.romaji}
                  </Text>

                  {/* description */}
                  <Text
                    style={textStyle.paragraph}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {anime.media.description}
                  </Text>
                  {/* popular and score */}
                  <View style={styles.row}>
                    <Text style={textStyle.popular}>
                      {personIcon} {anime.media.popularity}
                    </Text>
                    <Text style={textStyle.score}>
                      {starIcon} {parseFloat(anime.media.meanScore)}
                    </Text>
                  </View>
                  <View style={styles.marginMedium} />
                  <View style={styles.row}>
                    <Text style={textStyle.episode}>ep {anime.episode}</Text>
                    <Text style={textStyle.timeRemaining}>
                      {prettyms(anime.timeUntilAiring * 1000)}
                    </Text>
                    <Text style={textStyle.score}> remaining.</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    );
  }
}

const textStyle = {
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5
  },
  paragraph: {
    fontSize: 11,
    color: "white",
    marginBottom: 10
  },
  popular: {
    fontSize: 10,
    color: "white",
    marginRight: 10
  },
  score: {
    fontSize: 10,
    color: "white"
  },
  episode: {
    fontSize: 11,
    color: "white",
    marginRight: 10
  },
  timeRemaining: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white"
  }
};
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  card: {
    width: 355,
    height: 155,
    borderRadius: 6,
    margin: 10
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: 25
  },
  row: {
    flexDirection: "row"
  },
  marginMedium: {
    marginBottom: 20
  }
};
export default graphql(AnimeQuery)(AnimeList);
