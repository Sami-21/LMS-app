import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const PedagogicalJournalScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pedagogical Journal</Text>
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

export default PedagogicalJournalScreen;
