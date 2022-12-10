import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NavigationDrawer from "./Components/NavigationDrawer";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import BooksScreen from "./screens/books/Index";
import TransactionsScreen from "./screens/transactions/Index";

interface screen {
  name: string;
  component: React.FC;
}
const drawerScreens: screen[] = [
  {
    name: "Books",
    component: BooksScreen,
  },
  {
    name: "Transactions",
    component: TransactionsScreen,
  },
];

const App: React.FC = () => {
  const Drawer = createDrawerNavigator();

  const stackNavigatorScreenoption: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: "#0758FB",
    },
    headerTintColor: "#ddd",
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 25,
    },
    headerTitleAlign: "center",
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <NavigationDrawer {...props} />}
      >
        {drawerScreens.map((screen, index) => (
          <Drawer.Screen
            key={index}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
