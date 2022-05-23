import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: "Age 20" },
    { name: "Friend #2", age: "Age 21" },
    { name: "Friend #3", age: "Age 22" },
    { name: "Friend #4", age: "Age 23" },
    { name: "Friend #5", age: "Age 24" },
    { name: "Friend #6", age: "Age 25" },
    { name: "Friend #7", age: "Age 26" },
    { name: "Friend #8", age: "Age 27" },
    { name: "Friend #9", age: "Age 28" },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        // element === {item: {name: 'Friend #1}, index: 0}
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
