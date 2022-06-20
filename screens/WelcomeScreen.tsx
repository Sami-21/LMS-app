import { StyleSheet, Text, View } from "react-native";
import React from "react";

const WelcomeScreen: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to El Modarib</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 44,
  },
});
export default WelcomeScreen;
