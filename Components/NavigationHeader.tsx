import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { ParamListBase, RouteProp } from "@react-navigation/native";

interface props {
  navigation: any;
  route: RouteProp<ParamListBase>;
}

const NavigationHeader: React.FC<props> = ({ navigation, route }) => {
  return (
    <View style={styles.headerContainer}>
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
    height: 110,
    backgroundColor: "#0758FB",
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  headerText: {
    fontSize: 26,
    color: "#ddd",
  },
});
