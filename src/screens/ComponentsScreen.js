import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  const yourName = "William";

  return (
    <View>
      <Text style={{ fontSize: 45 }}>Getting started with react Native!</Text>
      <Text style={{ fontSize: 20 }}>My name is {yourName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
