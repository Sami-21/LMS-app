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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";

interface screen {
  name: string;
  component: React.FC<any>;
}

const App: React.FC = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  const screens: screen[] = [
    { name: "planifications", component: PlannificationsScreen },
    { name: "Pedagogical Journal", component: PedagogicalJournalScreen },
    { name: "Journal", component: JournalScreen },
    { name: "Settings", component: SettingScreen },
  ];
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: "welcome" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: "Signup" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        ></Stack.Screen>
      </Stack.Navigator>

      {/* <Drawer.Navigator
        drawerContent={(props) => <NavigationDrawer {...props} />}
        screenOptions={{
          drawerPosition: "right",
        }}
      >
        {screens.map((screen: screen, index: number) => (
          <Drawer.Screen
            name={screen.name}
            options={({ navigation, route }) => ({
              header: () => (
                <NavigationHeader navigation={navigation} route={route} />
              ),
            })}
            component={screen.component}
          />
        ))}
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
