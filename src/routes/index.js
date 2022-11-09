import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/// SCREENS
import Welcome from '../screens/Welcome';
import SelectVehicle from '../screens/SelectVehicle';
import SelectRoute from '../screens/SelectRoute';
import Home from '../screens/Home';

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
        <Stack.Screen component={SelectVehicle} name="SelectVehicle" />
        <Stack.Screen component={SelectRoute} name="SelectRoute" />
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}