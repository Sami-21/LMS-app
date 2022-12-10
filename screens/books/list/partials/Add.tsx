import { StyleSheet, View, Button } from "react-native";

import React from "react";
import { Icon } from "@rneui/base";

const Add = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button style={styles.button}>
        <Icon name="add" color={"#fff"} size={40} />
      </Button>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
    borderColor: "#0f0",
    borderStyle: "solid",

    overflow: "hidden",
  },
});
