import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/// SCREENS
import Home from '../screens/Home';
import SelectVehicle from '../screens/SelectVehicle';

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SelectVehicle"
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen component={SelectVehicle} name="SelectVehicle" />
        <Stack.Screen component={Home} name="Home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}