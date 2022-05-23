import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="forest"
        imageSource={require("../../assets/beach.jpg")}
        imageScore={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/forest.jpg")}
        imageScore={7}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        imageScore={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
