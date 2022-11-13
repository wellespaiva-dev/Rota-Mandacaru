import React , {useEffect} from 'react';
import {BackHandler} from 'react-native';
import {Container} from './styles';

import * as Location from 'expo-location';

const Welcome = ({navigation}) => {

  const requestPermmisionLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status === 'granted') {
      navigation.navigate('SelectVehicle')
    } else {
      BackHandler.exitApp()
    }
  }
  
  useEffect(() => {
    requestPermmisionLocation()
  }, [Location]);

  return (
    <Container />
  )
}

export default Welcome;