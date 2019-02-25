import React, { Component } from "react";
import { Text, View, Linking, ScrollView } from "react-native";
import { Button, ListItem, Image } from "react-native-elements";

const AlbumItem = props => {
  return (
    <View>
      <ListItem
        key={props.key}
        title={props.title}
        subtitle={props.artist}
        leftAvatar={{
          source: {
            uri: props.img
          }
        }}
        rightElement={
          <View>
            <Button
              title="buy"
              type="clear"
              titleStyle={{
                fontSize: 10.0
              }}
              onPress={() => {
                Linking.openURL(props.url);
              }}
            />
          </View>
        }
        style={{
          flexDirection: "column"
        }}
      />
      <Image
        source={{
          uri: props.cover
        }}
        style={styles.imageStyle}
      />
    </View>
  );
};

const styles = {
  imageStyle: {
    width: 500,
    height: 300
  }
};

export default AlbumItem;
