import { Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from 'src/constants/Colors';
import ExploreProjectsScreen from 'src/screens/Explore/ExploreProjectsScreen';
import ExploreScreen from 'src/screens/Explore/ExploreScreen';
import HomeScreen from 'src/screens/HomeScreen';

const Explore = () => {
  const ExploreStack = createStackNavigator();
  return (
    <ExploreStack.Navigator screenOptions={{ headerShown: false }}>
      <ExploreStack.Screen
        name="ExploreInstitutions"
        component={ExploreScreen}
      />
      <ExploreStack.Screen
        name="ExploreProjects"
        component={ExploreProjectsScreen}
      />
    </ExploreStack.Navigator>
  );
};

export function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.color_primary,
          tabBarInactiveTintColor: Colors.text_neutral,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarActiveTintColor: Colors.color_primary,
          tabBarInactiveTintColor: Colors.text_neutral,
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
