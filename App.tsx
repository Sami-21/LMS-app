import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import PlannificationsScreen from "./screens/PlannificationsScreen";
import PedagogicalJournalScreen from "./screens/PedagogicalJournalScreen";
import JournalScreen from "./screens/JournalScreen";

const App: React.FC = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Plannifications"
          component={PlannificationsScreen}
        />
        <Drawer.Screen
          name=" Pedagogical Journal"
          component={PedagogicalJournalScreen}
        />
        <Drawer.Screen name="Journal" component={JournalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
