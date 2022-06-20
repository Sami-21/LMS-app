import { StyleSheet, Text, View } from "react-native";
import React from "react";

const JournalScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Journal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 44,
  },
});

export default JournalScreen;
