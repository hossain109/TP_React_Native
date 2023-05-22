import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation as FoundationIcons } from "react-native-vector-icons";
import Accueil from "./Accueil";
import Liste from "./Liste";

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator backBehavior="order">
      <Tab.Screen
        name="Accueil"
        component={Accueil}
        options={{
          tabBarLabel: "Accueil",
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#888",
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="home" color={color} size={size} />
          ),
          title: "Accueil",
        }}
      />

      <Tab.Screen
        name="Liste"
        component={Liste}
        options={{
          tabBarLabel: "List",
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#888",
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="list-bullet" color={color} size={size} />
          ),
          title: "Listes des étudiants inscription au CDA1",
        }}
      />
    </Tab.Navigator>
  );
};

export default NavigationTab;
