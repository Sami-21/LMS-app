import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PlannificationsScreen from "./screens/Planifications";
import PedagogicalJournalScreen from "./screens/PedagogicalJournal";
import JournalScreen from "./screens/Journal";
import NavigationDrawer from "./Components/NavigationDrawer";
import SettingScreen from "./screens/Settings";
import NavigationHeader from "./Components/NavigationHeader";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";

interface screen {
  name: string;
  component: React.FC<any>;
}

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const authScreens: screen[] = [
    { name: "planifications", component: PlannificationsScreen },
    { name: "Pedagogical Journal", component: PedagogicalJournalScreen },
    { name: "Journal", component: JournalScreen },
    { name: "Settings", component: SettingScreen },
  ];
  const preAuthScreens: screen[] = [
    { name: "Welcome", component: WelcomeScreen },
    { name: "Signup", component: SignupScreen },
    { name: "Login", component: LoginScreen },
  ];
  const stackNavigatorScreenoption: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: "#0758FB",
    },
    headerTintColor: '#ddd',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 25,
    },
    headerTitleAlign: "center",
  }
  return (
    <NavigationContainer>
      {authenticated ?
        <Drawer.Navigator
          drawerContent={(props) => <NavigationDrawer {...props} />}
          screenOptions={{
            drawerPosition: "right",
          }}
        >
          {authScreens.map((screen: screen, index: number) => (
            <Drawer.Screen
              key={index}
              name={screen.name}
              options={({ navigation, route }) => ({
                header: () => (
                  <NavigationHeader navigation={navigation} route={route} />
                ),
              })}
              component={screen.component}
            />
          ))}
        </Drawer.Navigator>
        :
        <Stack.Navigator
          screenOptions={stackNavigatorScreenoption}>
          {preAuthScreens.map((screen: screen, index: number) => (
            <Stack.Screen
              key={index}
              name={screen.name}
              component={screen.component}
              options={({ route }) => ({ title: route.name })}
            ></Stack.Screen>
          ))}
        </Stack.Navigator>
      }



    </NavigationContainer>
  );
};

export default App;
