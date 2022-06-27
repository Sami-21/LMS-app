import { StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Avatar } from "@rneui/themed";

const NavigationDrawer: React.FC = (props: any) => {
  return (
    <View style={styles.drawerContainer}>
      <View style={styles.profileContainer}>
        <Avatar rounded size={100} source={require("../assets/profile.jpg")} />
      </View>
      <View style={styles.drawerListContainer}>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      </View>
      {/* <View style={styles.drawerFooterContainer}>
        <Text>تسجيل الخروج</Text>
      </View> */}
    </View>
  );
};

export default NavigationDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  profileContainer: {
    flex: 2,
    width: "100%",
    height: 225,
    backgroundColor: "#000010",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  drawerListContainer: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
  },
  drawerFooterContainer: {
    flex: 1,
    paddingHorizontal: 50,
  },
});
