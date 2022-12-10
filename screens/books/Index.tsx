import { StyleSheet, View } from "react-native";
import List from "./list/List";
import React from "react";
import Add from "./list/partials/Add";

const Index: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <List />
      <Add />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
