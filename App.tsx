import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PlannificationsScreen from "./screens/PlannificationsScreen";
import PedagogicalJournalScreen from "./screens/PedagogicalJournalScreen";
import JournalScreen from "./screens/JournalScreen";
import NavigationDrawer from "./Components/NavigationDrawer";
import SettingScreen from "./screens/SettingScreen";
import NavigationHeader from "./Components/NavigationHeader";

const App: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <NavigationDrawer {...props} />}
        screenOptions={{
          drawerPosition: "right",
        }}
      >
        <Drawer.Screen
          name="المخططات"
          options={({ navigation, route }) => ({
            header: () => (
              <NavigationHeader navigation={navigation} route={route} />
            ),
          })}
          component={PlannificationsScreen}
        />
        <Drawer.Screen
          name="الكراس البيداغوجي"
          options={({ navigation, route }) => ({
            header: () => (
              <NavigationHeader navigation={navigation} route={route} />
            ),
          })}
          component={PedagogicalJournalScreen}
        />
        <Drawer.Screen
          name="الكراس اليومي"
          options={({ navigation, route }) => ({
            header: () => (
              <NavigationHeader navigation={navigation} route={route} />
            ),
          })}
          component={JournalScreen}
        />
        <Drawer.Screen
          name="اﻷعدادات"
          options={({ navigation, route }) => ({
            header: () => (
              <NavigationHeader navigation={navigation} route={route} />
            ),
          })}
          component={SettingScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
