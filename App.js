import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Level from './screens/Level';
import Home from './screens/Home';
import Quiz from './screens/Quiz';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Level"
          component={Level}
          options={({ route }) => ({ title: `level ${route.params.levelId}` })}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={({ route }) => ({ title: `Quiz ${route.params.number}` })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Button
//       title="Go to Jane's profile"
//       onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
//     />
//   );
// };
// const ProfileScreen = () => {
//   return <Text>This is Jane's profile</Text>;
// };

export default function App() {
  return <MyStack />;
}
