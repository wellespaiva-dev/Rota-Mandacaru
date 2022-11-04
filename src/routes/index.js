import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/// SCREENS
import Welcome from '../screens/Welcome';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen component={Welcome} name="Welcome" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}