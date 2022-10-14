import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const WelcomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to El Modarib</Text>
      <View style={styles.btnsContainer}>
        <Button onPress={() => {
          navigation.navigate("Signup");
        }}>Sign up</Button>
        <Button onPress={() => {
          navigation.navigate("Login");
        }}>Log in</Button>
      </View>
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
    textAlign: "center",
    marginBottom: 25,
  },
  btnsContainer: {
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
export default WelcomeScreen;
