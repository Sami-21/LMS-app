import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { ParamListBase, RouteProp } from "@react-navigation/native";

interface Props {
  navigation: any;
  route: RouteProp<ParamListBase>;
}

const NavigationHeader = ({ navigation, route }: Props) => {
  return (
    <View style={styles.headerContainer}>
      <Avatar
        size={44}
        rounded
        source={require("../assets/profile.jpg")}
        containerStyle={{ margin: 20 }}
        onPress={() => navigation.navigate("اﻷعدادات")}
      />
      <Text style={styles.headerText}>{route.name}</Text>
      <DrawerToggleButton />
    </View>
  );
};

export default NavigationHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    backgroundColor: "#0758FB",
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 26,
    color: "#ddd",
  },
});
